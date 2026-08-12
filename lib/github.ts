export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export type HeatmapCell = ContributionDay | null;

export interface ContributionHeatmap {
  weeks: HeatmapCell[][];
  monthLabels: { label: string; colIndex: number }[];
  totalLastYear: number;
}

export const HEATMAP_CELL_SIZE = 11;
export const HEATMAP_GAP = 2;
export const HEATMAP_STEP = HEATMAP_CELL_SIZE + HEATMAP_GAP;

export const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"] as const;

export const LEVEL_COLORS: Record<ContributionLevel, string> = {
  0: "bg-secondary",
  1: "bg-primary/20",
  2: "bg-primary/40",
  3: "bg-primary/70",
  4: "bg-primary",
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface GithubContributionsResponse {
  total?: { lastYear?: number };
  contributions?: Array<{ date: string; count: number; level: number }>;
}

function utcDate(date: string): Date {
  return new Date(`${date}T00:00:00`);
}

function toLevel(value: number): ContributionLevel {
  if (value <= 0) return 0;
  if (value >= 4) return 4;
  return value as ContributionLevel;
}

function isContributionDay(cell: HeatmapCell): cell is ContributionDay {
  return cell !== null;
}

function groupIntoWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  let current: ContributionDay[] = [];

  for (const day of days) {
    const dayOfWeek = utcDate(day.date).getUTCDay();
    if (dayOfWeek === 0 && current.length > 0) {
      weeks.push(current);
      current = [];
    }
    current.push(day);
  }

  if (current.length > 0) {
    weeks.push(current);
  }

  return weeks;
}

function padFirstWeek(weeks: ContributionDay[][]): HeatmapCell[][] {
  return weeks.map((week, index) => {
    if (index !== 0 || week.length === 0) return week;
    const padCount = utcDate(week[0].date).getUTCDay();
    return [...Array.from({ length: padCount }, () => null), ...week];
  });
}

function getMonthLabels(weeks: HeatmapCell[][]) {
  const labels: { label: string; colIndex: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, colIndex) => {
    const day = week.find(isContributionDay);
    if (!day) return;

    const month = utcDate(day.date).getUTCMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], colIndex });
      lastMonth = month;
    }
  });

  return labels;
}

export async function fetchContributionHeatmap(
  username: string,
  signal?: AbortSignal,
): Promise<ContributionHeatmap> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    { signal },
  );

  if (!response.ok) {
    throw new Error(`Failed to load GitHub contributions (${response.status})`);
  }

  const data = (await response.json()) as GithubContributionsResponse;
  const days: ContributionDay[] = (data.contributions ?? []).map((entry) => ({
    date: entry.date,
    count: entry.count,
    level: toLevel(entry.level),
  }));
  const weeks = padFirstWeek(groupIntoWeeks(days));

  return {
    weeks,
    monthLabels: getMonthLabels(weeks),
    totalLastYear: data.total?.lastYear ?? 0,
  };
}
