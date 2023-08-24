import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        WineBerry: "#A30D27",
        LightningYellow: "#FEBB15",
        gray: {
          default: "#AFAFAF",
          Dark: "#3D3D3D",
          Dark_2: "#727272",
          Medium: "#939393",
          Light: "#CECECE",
          Light_2: "#F9F9F9",
        },
      },
      textColor: {
        WineBerry: "#A30D27",
        LightningYellow: "#FEBB15",
        gray: {
          default: "#AFAFAF",
          Dark: "#3D3D3D",
          Dark_2: "#727272",
          Medium: "#939393",
          Light: "#CECECE",
          Light_2: "#F9F9F9",
        },
      },
      fontSize: {
        h1: "120px",
        h2: "90px",
        h3: "80px",
        guide: "70px",
        body: "58px",
        text: "50px",
      },
    },
  },
  plugins: [],
};
export default config;
