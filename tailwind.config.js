/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     // ===== ACTUALLY USED COLORS ONLY =====
        
    //     // Primary Orange Colors (53 uses) - Sirf jo use hue hain
    //     primary: {
    //       50: '#fff7ed',    // bg-orange-50, hover:bg-orange-50, focus:bg-orange-50
    //       100: '#ffedd5',   // bg-orange-100
    //       200: '#fed7aa',   // border-orange-200
    //       300: '#fdba74',   // hover:border-orange-300, focus:ring-orange-300
    //       400: '#fb923c',   // border-orange-400
    //       500: '#ff8d4f',   // bg-orange-500, text-orange-500, border-orange-500, focus:ring-orange-500
    //       600: '#ea580c',   // text-orange-600, hover:bg-orange-600, hover:text-orange-600, hover:border-orange-600
    //       700: '#c2410c',   // hover:to-orange-700
    //     },

    //     // Gray Colors (96 uses) - Sirf jo use hue hain
    //     gray: {
    //       50: '#f9fafb',    // bg-gray-50, hover:bg-gray-50
    //       100: '#f3f4f6',   // bg-gray-100, hover:bg-gray-100
    //       200: '#e5e7eb',   // border-gray-200
    //       300: '#d1d5db',   // border-gray-300
    //       400: '#9ca3af',   // text-gray-400
    //       500: '#6b7280',   // text-gray-500
    //       600: '#4b5563',   // text-gray-600
    //       700: '#374151',   // text-gray-700
    //       800: '#1f2937',   // text-gray-800
    //       900: '#111827',   // text-gray-900
    //     },

    //     // Blue Colors (2 uses) - Sirf jo use hue hain
    //     blue: {
    //       50: '#eff6ff',    // hover:bg-blue-50
    //       500: '#3b82f6',   // text-blue-500
    //       600: '#2563eb',   // text-blue-600
    //     },

    //     // Green Colors (4 uses) - Sirf jo use hue hain
    //     green: {
    //       100: '#dcfce7',   // bg-green-100
    //       500: '#22c55e',   // text-green-500, bg-green-500
    //       800: '#166534',   // text-green-800
    //     },

    //     // Yellow Colors (1 use) - Sirf jo use hue hain
    //     yellow: {
    //       500: '#f59e0b',   // bg-yellow-500
    //     },

    //     // Red Colors (2 uses) - Sirf jo use hue hain
    //     red: {
    //       50: '#fef2f2',    // hover:bg-red-50
    //       500: '#ef4444',   // text-red-500, bg-red-500
    //     },

    //     // Custom Hex Colors (aapke project specific)
    //     custom: {
    //       orange: '#ff8d4f',        // text-[#ff8d4f]
    //       lightGray: '#DDDDDD',     // text-[#DDDDDD]
    //       lightBg: '#f8f9fa',       // bg-[#f8f9fa]
    //       lightBorder: '#ddd',      // border-[#ddd]
    //       semiTransparent: '#e4e4ed4f', // bg-[#e4e4ed4f]
    //       black: '#000',            // text-[#000]
    //     },

    //     // Background Colors
    //     background: {
    //       DEFAULT: '#ffffff',       // bg-white
    //       light: '#f8f9fa',         // bg-[#f8f9fa]
    //       dark: '#1a1a1a',          // bg-[#1a1a1a]
    //     },

    //     // Text Colors
    //     text: {
    //       primary: '#111827',       // text-gray-900
    //       secondary: '#6b7280',     // text-gray-500
    //       muted: '#9ca3af',         // text-gray-400
    //       light: '#DDDDDD',         // text-[#DDDDDD]
    //       black: '#000',            // text-[#000]
    //     },

    //     // Border Colors
    //     border: {
    //       DEFAULT: '#e5e7eb',       // border-gray-200
    //       light: '#ddd',            // border-[#ddd]
    //       medium: '#d1d5db',        // border-gray-300
    //     },

    //     // Basic colors
    //     white: '#ffffff',
    //     black: '#000000',
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //   },
    // },
  },
  plugins: [],
}
