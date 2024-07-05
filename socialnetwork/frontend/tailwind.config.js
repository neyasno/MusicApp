import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        action_shadow: "rgba(0, 0, 0, 0.5);" ,
        main_black: "#121212",
        main_green: "rgb(22 , 163 , 74)",
        main_grey: "rgb(107 ,114 ,128)" ,
        main_l_grey:"rgb(180 ,180 ,180)",
      },
      borderWidth:{
        1:"1px",
      } ,
      keyframes:{
        get_up:{
          '100%' : {transform: "translateY(-20px)"}
        }
      },
      animation:{
        get_up: "get_up 2s ease-in-out infinite" ,
      },
      rotate:{
        26:"26deg"
      },
      height:{
        34:"8.5rem"
      },
      spacing:{
        '1/10': "10%"
      }
    },
  },
  plugins: [],
}