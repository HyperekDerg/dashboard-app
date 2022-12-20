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
              "link-active": "#55a773",
              "button": "#f8f8f9",
              "button-hover": "#DDDDE1",
              "theme-1": "#B85C38",
              "theme-2": "#5C3D2E"  
            },
            backgroundImage: {
              "hero-pattern": "url('https://png.vector.me/files/images/7/0/700916/cubic_background.jpg')",
              "page-pattern": "url('https://wallpaper.dog//large/20377007.jpg')"
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
              "link-active": "#FEB228",
              "button": "#f8f8f9",
              "button-hover": "#DDDDE1",
              "theme-1": "#F9A101",
              "theme-2": "#55a773"
            },
            backgroundImage: {
              "hero-pattern": "url('https://wallpaper.dog/large/20487512.jpg')",
              "page-pattern": "url('https://wallpaper.dog/large/20508486.jpg')"
            }
          }
        }
      ]
    })
  ],
}
