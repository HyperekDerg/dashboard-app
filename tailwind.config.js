/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'dark-theme',
          extend: {
            colors: {
              "primary": "#454a4e",
              "secondary": "#55a773",
              "sidebar-primary": "#242b32",
              "sidebar-secoundary": "#37424c",
              "font-color": "#f8f8f9",
              "link-active": "#55a773"
            },
            fontFamily: {
              title: "Helvetica"
            }
          }
        },
        {
          name: 'lite-theme',
          extend: {
            colors: {
              "primary": "#ECF0F1",
              "secondary": "#3f54ab",
              "sidebar-primary": "#35478C",
              "sidebar-secoundary": "#4E7AC7",
              "font-color": "#F4EFDC",
              "link-active": "#FEB228"
            },
            fontFamily: {
              title: "Helvetica"
            }
          }
        }
      ]
    })
  ],
}
