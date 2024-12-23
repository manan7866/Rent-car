// import React from "react"

// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
// } from "chart.js";
// import { Doughnut } from "react-chartjs-2"



// ChartJS.register(
//     ArcElement,
//     Tooltip,
//     Legend,
// )

// export default function Charts() {

//     const data = {
//         datasets: [{
//             label: 'Sell',
//             data: [17439, 9478, 18197, 12510, 14406],
//             backgroundColor: ['#0D3559', "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
//             borderRadius: 8,
//             cutout: 120 ,
//         }]
//     }

//     const options = {

//     }

//     const centerTextPlugin = {
//         id: "centerText",
//         beforeDraw(chart: { ctx?: any; data?: any; options?: any; width?: any; height?: any; }) {
//           const { width, height } = chart;
//           const ctx = chart.ctx;
//           const total = chart.data.datasets[0].data.reduce((a: any, b: any) => a + b, 0);
    
//           const centerX = width / 2;
//           const centerY = height / 2;
    
//           ctx.save();
    
//           // Draw Total Value
//           ctx.font = `bold 26px Arial`;
//           ctx.fillStyle = chart.options.plugins.centerText.totalValueColor;
//           ctx.textAlign = "center";
//           ctx.textBaseline = "middle";
//           ctx.fillText(total, centerX, centerY - 10);
    
//           // Draw Subtext
//           ctx.font = `14px Arial`;
//           ctx.fillStyle = chart.options.plugins.centerText.subTextColor;
//           ctx.fillText("Rental Car",
//             centerX,
//             centerY + 20
//           );
    
//           ctx.restore();
//         },
//       };
    
//       // Register the plugin
//       ChartJS.register(centerTextPlugin);


//     return (
//         <>
//             <div className="w-80 xs:w-[266px] xs:h-[266px] sm:h-72 sm:w-72 h-80 ">
//                 <Doughnut
//                     data={data}
//                     options={options}>
//                 </Doughnut>
//             </div>
//         </>
//     )
// }
"use client"

import * as React from "react"

import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

<<<<<<< HEAD
const chartConfig = {
  visitors: {
    label: "Visitors",
=======
// ChartJS ko register karna
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin ka type extend karna
declare module 'chart.js' {
  interface ChartOptionst {
    plugins?: {
      centerText?: {
        totalValueColor: string;
        subTextColor: string;
      };
    };
  }
}

// Center text plugin ko define karna
const centerTextPlugin: Plugin<'doughnut'> = {
  id: "centerText",
  beforeDraw(chart) {
    const { ctx, width, height, data, options } = chart;
    const total = data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.save();

    // Default values with optional chaining to avoid undefined errors
    const totalValueColor = options.plugins?.centerText?.totalValueColor || "#000";
    const subTextColor = options.plugins?.centerText?.subTextColor || "#333";

    // Total value ko center mein draw karna
    ctx.font = `bold 26px Arial`;
    ctx.fillStyle = totalValueColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(total.toString(), centerX, centerY - 10);

    // Subtext ko center ke neeche draw karna
    ctx.font = `14px Arial`;
    ctx.fillStyle = subTextColor;
    ctx.fillText("Rental Car", centerX, centerY + 20);

    ctx.restore();
>>>>>>> a7daff9aa80d6e97c53904c488386a0457f62ae5
  },
  chrome: {
    label: "MPV",
    color: "#A6CEF2",
  },
  safari: {
    label: "Sport Car",
    color: "#0D3559]",
  },
  firefox: {
    label: "Hatchback",
    color: "#63A9E8",
  },
  edge: {
    label: "Coupe",
    color: "#2185DE"
  },
  other: {
    label: "SUV",
    color: "#175D9C",
  },
} satisfies ChartConfig

export function Chart () {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className=" w-[100%] h-[100%]  border-none px-0 py-0 shadow-none ">
      
      <CardContent className="flex-1 w-[100%] h-[100%] mx-0 my-0 px-0 py-0 pb-0 border-none">
        <ChartContainer
          config={chartConfig}
          className="border-none w-[100%] sm:w-[150%] m2xl:w-[135%] m2xl:pr-[50%] m2xl:h-[135%] xs:w-[160%] xs:pr-[50%] xs:h-[160%] sm:[w-100%] sm:h-[150%] sm:pr-[45%] h-[100%] px-0 py-0 mx-0 my-0 border-white"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie className="w-[100%] h-[100%] mx-0 my-0 "
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
