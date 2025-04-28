import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        forest: {
          DEFAULT: '#4A7C59',
          light: '#5E9E6F',
          dark: '#2A4F36',
        },
        earth: {
          DEFAULT: '#8B4513',
          light: '#A86239',
          dark: '#6B370F',
        },
        satellite: {
          DEFAULT: '#1E90FF',
          light: '#47A3FF',
          dark: '#0066CC',
        },
        canopy: {
          DEFAULT: '#90EE90',
          light: '#B2F5B2',
          dark: '#5DC560',
        },
        carbon: {
          DEFAULT: '#424242',
          light: '#616161',
          dark: '#212121',
        },
        sensing: {
          DEFAULT: '#9370DB',
          light: '#B18CF0',
          dark: '#7953C9',
        },
        space: {
          DEFAULT: '#0A0F1E',
          light: '#161D31',
          dark: '#050A14',
        },
        neon: {
          blue: '#0096FF',
          purple: '#9B6BFF',
          green: '#00F5D4',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 10px 2px rgba(47, 82, 51, 0.3)'
          },
          '50%': { 
            opacity: '0.7',
            boxShadow: '0 0 20px 2px rgba(47, 82, 51, 0.6)'
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'topo-move': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'canopy-wave': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-5px) rotate(2deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'topo-move': 'topo-move 60s ease infinite',
        'canopy-wave': 'canopy-wave 8s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(144,238,144,0.05) 1px, transparent 1px)',
        'hero-gradient': 'linear-gradient(45deg, rgba(30,57,31,1) 0%, rgba(58,106,61,0.8) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(47,82,51,0.7) 0%, rgba(30,57,31,0.9) 100%)',
        'forest-glow': 'radial-gradient(circle, rgba(47,82,51,0.3) 0%, rgba(47,82,51,0) 70%)',
        'canopy-pattern': 'url("/patterns/canopy-pattern.svg")',
        'topo-lines': 'url("/patterns/topo-lines.svg")',
        'satellite-dots': 'url("/patterns/satellite-dots.svg")',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
