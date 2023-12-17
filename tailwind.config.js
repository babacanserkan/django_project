/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./templates/**/*.html"],
   theme: {
      container: {
         center: true,
         screens: {
            lg: "1266px",
            xl: "1266px",
            "2xl": "1266px",
         },
      },
      extend: {
         fontFamily: {
            netflix: ["Open Sans", "sans-serif"],
         },

         spacing: {
            37: "9.25rem",
            100: "25.625rem",
         },

         height: {
            105: "31.25rem",
            180: "44.25rem",
            200: "60rem",
         },
      },
   },
   plugins: [],
};
