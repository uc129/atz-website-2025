import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // --blue:#0a3251;
        // --teal: #0a808d;
        "blue": "var(--blue)",
        "teal": "var(--teal)",
      },
    },
  },
  plugins: [],
} satisfies Config;
