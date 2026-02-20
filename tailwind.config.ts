import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,jsx,tsx,mdx}',
    './src/componentes/**/*.{js,jsx,tsx,mdx}',
    './src/app/**/*.{js,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
