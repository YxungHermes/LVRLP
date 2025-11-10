import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Watercolor Coffee-Toned Palette
        watercolor: {
          // Backgrounds
          cream: '#FAF6F0',        // Light ivory/cream - main background
          paper: '#F5F0E8',        // Slightly darker paper tone

          // Browns & Coffee Tones
          coffee: '#4B3621',       // Coffee brown - lines and borders
          espresso: '#2A1E17',     // Deep espresso - body text
          graphite: '#3B3026',     // Soft graphite - alternate line color

          // Rose & Blush Accents
          rose: {
            50: '#F8EDE9',
            100: '#E4C1B0',        // Blush beige
            200: '#D9B5A3',
            300: '#CDA896',
            400: '#C79D8A',        // Rose dust
            500: '#B58B83',        // Rose gradient start
            600: '#8B5C58',        // Rose gradient end
            700: '#7A4E4A',
            800: '#5C3A37',
            900: '#4A2E2C',
          },

          // Watercolor Washes (with transparency)
          wash: {
            light: 'rgba(228, 193, 176, 0.15)',   // Light rose wash
            medium: 'rgba(199, 157, 138, 0.25)',  // Medium rose wash
            dark: 'rgba(181, 139, 131, 0.35)',    // Dark rose wash
          },
        },
        // Keep existing brand colors for backward compatibility
        brand: {
          bg: '#FAF6F0',           // Updated to cream
          ink: '#2A1E17',          // Updated to espresso
          amethyst: '#7F6EE2',
          amethystSoft: '#ECE9FF',
          amethystGlow: 'rgba(127, 110, 226, 0.28)',
          champagne: '#F4E6C5',
          champagneGlow: 'rgba(244, 230, 197, 0.8)',
          roseSoft: '#FFE7EF',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'Lato', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      letterSpacing: {
        airy: '0.2em',
      },
      lineHeight: {
        readable: '1.6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'rose-gradient': 'linear-gradient(135deg, #B58B83 0%, #8B5C58 100%)',
        'watercolor-texture': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\' viewBox=\'0 0 800 800\'%3E%3Cg fill=\'none\' stroke=\'%234B3621\' stroke-width=\'1\'%3E%3Cpath d=\'M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63\'/%3E%3Cpath d=\'M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764\'/%3E%3Cpath d=\'M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880\'/%3E%3Cpath d=\'M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382\'/%3E%3Cpath d=\'M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269\'/%3E%3C/g%3E%3Cg fill=\'%23C79D8A\'%3E%3Ccircle cx=\'769\' cy=\'229\' r=\'5\'/%3E%3Ccircle cx=\'539\' cy=\'269\' r=\'5\'/%3E%3Ccircle cx=\'603\' cy=\'493\' r=\'5\'/%3E%3Ccircle cx=\'731\' cy=\'737\' r=\'5\'/%3E%3Ccircle cx=\'520\' cy=\'660\' r=\'5\'/%3E%3Ccircle cx=\'309\' cy=\'538\' r=\'5\'/%3E%3Ccircle cx=\'295\' cy=\'764\' r=\'5\'/%3E%3Ccircle cx=\'40\' cy=\'599\' r=\'5\'/%3E%3Ccircle cx=\'102\' cy=\'382\' r=\'5\'/%3E%3Ccircle cx=\'127\' cy=\'80\' r=\'5\'/%3E%3Ccircle cx=\'370\' cy=\'105\' r=\'5\'/%3E%3Ccircle cx=\'578\' cy=\'42\' r=\'5\'/%3E%3Ccircle cx=\'237\' cy=\'261\' r=\'5\'/%3E%3Ccircle cx=\'390\' cy=\'382\' r=\'5\'/%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};
export default config;
