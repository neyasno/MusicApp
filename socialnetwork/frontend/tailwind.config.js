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
        action_shadow: "rgba(0, 0, 0, 0.8);" ,

        main_green: "rgb(22 , 163 , 74)",
        main_l_green: "rgb(42 , 183 , 94)",
        main_grey: "rgb(107 ,114 ,128)" ,
        main_l_grey:"rgb(180 ,180 ,180)",
        main_red:"rgb(185, 28 ,28)" ,
        
        main_BLACK: "rgb(0,0,0)",
        main_WHITE: "rgb(255,255,255)" ,
        
        main_black: "rgb(18,18,18)",
        main_d_black:"rgb(25,25,25)" ,
        main_dd_black:"rgb(10,10,10)",
        main_l_black:"rgb(40,40,40)" ,
        main_ll_black:"rgb(55,55,55)" ,

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
      width:{
        '1/7':"14.28571429%"
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