import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      'gradient-size': '200% 200%',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation:{
        // 'slide-in': 'slideIn 1.3s ease-out forwards',
        'gradient-flow': 'gradient-flow 5s ease-in-out infinite',
        flipIn: 'flipIn 1.3s ease-in-out',
      },
      keyframes : {
        flipIn: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' }
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
