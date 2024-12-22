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
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Plugin,
  
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// ChartJS ko register karna
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin ka type extend karna
declare module 'chart.js' {
  interface ChartOptions {
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
  },
};

export default function Charts() {
  // Data ko type-safe banana
  const data: ChartData<'doughnut'> = {
    datasets: [{
      label: 'Sell',
      data: [17439, 9478, 18197, 12510, 14406],
      backgroundColor: ['#0D3559', "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"],
      borderRadius: 8,
    }]
  };

  // Options ko type-safe banana
  const options: ChartOptions<'doughnut'> = {
    plugins: {
      // CenterText plugin ko configure karte hue
      centerText: {
        totalValueColor: "#000", // Yahan aap color set kar sakte hain
        subTextColor: "#333",    // Yahan aap subtext ka color set kar sakte hain
      },
    },
    elements: {
      arc: {
        cutout: 120, // Doughnut ka center cutout
      },
    },
  };

  // Plugin ko register karna
  ChartJS.register(centerTextPlugin);

  return (
    <div className="w-80 xs:w-[266px] xs:h-[266px] sm:h-72 sm:w-72 h-80 ">
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
}
