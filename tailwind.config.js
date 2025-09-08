/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aapke project mein use kiye gaye custom colors
        primary: {
          orange: '#ff8d4f',        // Main brand color
        },
        background: {
          light: '#f8f9fa',         // Header background
          card: '#e4e4ed4f', 
          dark: '#1a1a1a',        // Card/body background
        },
        text: {
          black: '#000',            // Black text
          lightGray: '#DDDDDD',     // Light gray text
        },
        border: {
          light: '#ddd',            // Light border
        },
        notification: {
          red: '#ef4444',           // Red notification badge
        },
        white: '#fff',              // White color
      },
    },
  },
  plugins: [],
}
