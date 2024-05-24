import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        purple: '#7047A2',
        pink: '#CF30C5',
        white: '#FFFFFF',
        black: '#000000',
      },

      boxShadow: {
        custom: '0px 10px 15px -10px #CF30C5',
        customDark: '0px 10px 15px -10px #7047A2',
        custom2: 'inset 0 0 6px  #7047A2',
        custom3: ' 0 0 6px  #7047A2',
        custom3Dark: ' 0 0 6px  #CF30C5',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
