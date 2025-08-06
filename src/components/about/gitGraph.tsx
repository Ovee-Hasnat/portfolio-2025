import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { useEffect, useState } from "react";
import { Suspense } from "react";

// API fetch function
let cache: { month: string; commit: number }[] | null = null;

async function getChartData() {
  if (cache) return cache;

  const res = await fetch(
    "https://github-contributions-api.jogruber.de/v4/Ovee-Hasnat?y=last",
    { cache: "force-cache" }
  );
  if (!res.ok) throw new Error("Failed to fetch chart data");

  const { contributions } = await res.json();

  const now = new Date();
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

  const monthMap = new Map<string, number>();

  for (const { date, count } of contributions) {
    const entryDate = new Date(date);
    if (entryDate >= sixMonthsAgo && entryDate <= now) {
      const monthKey = entryDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      monthMap.set(monthKey, (monthMap.get(monthKey) || 0) + count || 12);
    }
  }

  // Sort months chronologically
  const sorted = [...monthMap.entries()].sort((a, b) => {
    const aDate = new Date(a[0]);
    const bDate = new Date(b[0]);
    return aDate.getTime() - bDate.getTime();
  });

  // Format to chartData
  const chartData = sorted.map(([month, commit]) => ({
    month,
    commit,
  }));

  cache = chartData;
  return chartData;
}

function ChartContent() {
  const [data, setData] = useState<{ month: string; commit: number }[] | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    getChartData()
      .then((data) => {
        if (isMounted) setData(data);
      })
      .catch((err) => {
        console.log(err);
        if (isMounted) setError(err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="text-red-800 text-sm font-mono px-4">
        Something went wrong while loading the chart. Please try again later.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center text-sm text-gray-600 font-mono space-x-2 w-full">
        <span className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></span>
        <span>Loading chart...</span>
      </div>
    );
  }

  const chartConfig = {
    commit: {
      label: "Commits",
      color: "#27272a",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)} // Jan, Feb, ...
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="commit" fill="var(--color-commit)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export default function GitGraph() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <ChartContent />
    </Suspense>
  );
}
