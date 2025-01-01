import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      // Add maxWidth properties here
      screens:{
        // MIN_WIDTH
        // "max-sm": { 'max': '480px' },
        // "sm": "481px",
        // "md":  "640px",
        // "lg": "780px",
        // "xl": "892px",
        // "2xl": "1028px",
        // "3xl": "1248px"
  
        // MAX_WIDTH
  
        '2xl': { 'max': '1535px',
                 'min' : '1310px' 
      },
  
        'xl': { 'max': '1310px',
                'min': '1155px'
      
      },
  
        'lg': { 'max': '1155px',
                'min': '830px' 
       },
        

  
        'md': { 'max': '830px',
                'min': '576px'
       },
  
        'sm': { 'max': '576px',
                'min' : "416px"
       },
  
        'xs': { 'max': '416px',
                'min' : '200px'
      },
        
        // min width
        'msm': { 'min': '640px' },
        'mmd': { 'min': '768px' },
        'mlg': { 'min': '1024px' },
        'mxl': { 'min': '1310px',
                 'max' : '1460px'
                },
        'm2xl': { 'min': '1535px' }
  
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    
  ],
};

export default config;

