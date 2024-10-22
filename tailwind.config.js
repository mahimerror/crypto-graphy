/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#000000",
          secondary: "#D97706",
          accent: "#16A34A",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#2563EB",
          success: "#16A34A",
          warning: "#D97706",
          error: "#DC2626",
        },
      },
      {
        dark: {
          primary: "#fff",
          secondary: "#F59E0B",
          accent: "#10B981",
          neutral: "#111827",
          "base-100": "#1F2937",
          info: "#60A5FA",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
}