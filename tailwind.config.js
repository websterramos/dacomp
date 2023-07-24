/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
        'dark-blue': '#2D3E51',
        'light-blue': '#407BBC',
        'dark-gray':  '#0D1117',
        'dacomp-dark-blue': '#003153',
        'dacomp-light-blue': '#005296',
        'engenharia-light-orange': '#e47705'
      },
     backgroundImage: {
        'hero-image': "linear-gradient(to right bottom, rgba(34, 34, 34, 1), rgba(255, 255, 255, 0)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.colegioweb.com.br%2Fwp-content%2Fuploads%2F2019%2F12%2FUnifei-publica-list%25C3%25A3o-dos-aprovados-no-Vestibular-2020-2-1024x576.jpg&f=1&nofb=1&ipt=d0da516d3acf2bf801249f1183b5a0dd37f04ccefe1cc06400b2eb9278f49e16&ipo=images')"
      }
    },
  },
  plugins: [],
};
