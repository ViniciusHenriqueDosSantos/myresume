import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'cloud': '10px 10px  rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
