import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/*/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
