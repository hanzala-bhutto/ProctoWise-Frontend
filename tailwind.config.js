/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: {
          "100": "#6a4dff",
          "200": "rgba(106, 77, 255, 0.25)",
          "300": "rgba(106, 77, 255, 0.1)",
        },
        gray: {
          "100": "#767676",
          "200": "#11121c",
          "300": "rgba(255, 255, 255, 0)",
        },
        lightsteelblue: {
          "100": "#c3d1e3",
          "200": "#bdbfd4",
        },
        limegreen: "#00cc00",
        royalblue: "#0075ff",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "3xs": "10px",
      base: "16px",
      "29xl": "48px",
      "28xl-8": "47.8px",
      "5xl": "24px",
      "sm-6": "13.6px",
      "lgi-8": "19.8px",
      xl: "20px",
      "4xl-8": "23.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
