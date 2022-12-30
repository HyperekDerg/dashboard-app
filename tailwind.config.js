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
              // main colors
              "primary": "#454a4e",
              "secondary": "#DC965A",
              "config-area": "#454a4e",
              // sidebar area
              "sidebar-primary": "#242b32",
              "sidebar-hover": "#37424c",
              // font color
              "font-color": "#f8f8f9",
              "font-settings": "#f8f8f9",
              // buttons
              "button": "#f8f8f9",
              "button-hover": "#DDDDE1",
              "switch-to-lite-theme": "#bb5008",
              "switch-to-dark-theme": "#a54708"  
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
              // main colors
              "primary": "#a5c1ae",
              "secondary": "#568d66",
              "config-area": "#a5c1ae",
              // sidebar area
              "sidebar-primary": "#004733",
              "sidebar-hover": "#2b6a4d",
              // font color
              "font-color": "#ffffff",
              // buttons
              "button": "#f8f8f9",
              "button-hover": "#DDDDE1",
              "switch-to-lite-theme": "#2b6a4d",
              "switch-to-dark-theme": "#004733"
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
