import type { Config } from 'tailwindcss'
import flowbite from 'flowbite/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
   theme: {
    fontFamily: {
      'sans': ['Courier Prime',  ...defaultTheme.fontFamily.sans],
      'anton': 'Anton'
    },
    extend: {
      colors: {
        primary: {
          green: {
            dark: '#46472B',
            standard: '#6C7246',
            light: '#B0B78C'
          },
          brown: {
            dark: '#7F3C1B',
            standard: '#A6643D',
            light: '#D4A373'
          }
        }
      }
    }
  },
  plugins: [flowbite()],
}
