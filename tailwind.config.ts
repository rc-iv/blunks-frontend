import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Geom-Graphic-Regular": ["geom-graphic", "sans-serif"],
        "Geom-Graphic-Bold": ["geom-graphic", "sans-serif"],
        "Geom-Graphic-Regular-Italic": ["geom-graphic", "sans-serif"],
        "Geom-Graphic-Bold-Italic": ["geom-graphic", "sans-serif"],
      },
      clipPath: {
        'cut-corners': 'polygon(10% 0, 100% 0%, 100% 90%, 0 100%, 0 10%)',
      },
    },
    colors: {
      camo: {
        "300": "#98A885",
        "400": "#75835D",
        "500": "#404833",
        "600": "#2A2B1F",
        "700": "#11140C",
      },
      blast: {
        "100": "#FCFDC7",
        "300": "#FCFC03",
      },
    },
  },
  plugins: [],
};
export default config;
