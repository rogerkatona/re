/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-index': "url('/image/background/bgIndex-01.jpg')",
        'banner-01': "url('/image/bg-banner-01.jpg')",
        'banner-02': "url('/image/bg-banner-02.jpg')",
        'hero-blog': "url('/image/background/hero-blog.jpg')",
        'hero-portfolio': "url('/image/background/hero-portfolio.jpg')",
        'hero-process': "url('/image/background/hero-process.jpg')",
        'hero-service': "url('/image/background/hero-service.jpg')",
        'hero-about': "url('/image/background/hero-about.jpg')",
        'hero-processItem': "url('/image/feature-02.jpg')",
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'bebasNeue': ['var(--font-bebasNeue)'],
        'body': ['Helvetica Neue'],
        'roboto': ['var(--font-roboto)'],
        'raleway': ['var(--font-raleway)'],
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen90vh": "calc(90vh)",
        "screen80vh": "calc(80vh)",
        "screen75vh": "calc(75vh)",
        "screen65vh": "calc(65vh)",
        "screen50vh": "calc(50vh)",
        "screen47vh": "calc(47vh)",
        "screen40vh": "calc(40vh)",
        "screen25vh": "calc(25vh)",
        "screen20vh": "calc(20vh)",
      }),
    },
    colors: {
      'rich_black': { DEFAULT: '#001219', 100: '#000405', 200: '#00070a', 300: '#000b0f', 400: '#000f14', 500: '#001219', 600: '#00587a', 700: '#009ddb', 800: '#3dc8ff', 900: '#9ee4ff' },
      'midnight_green': { DEFAULT: '#005f73', 100: '#001417', 200: '#00272f', 300: '#003b46', 400: '#004e5e', 500: '#005f73', 600: '#00a3c4', 700: '#13d8ff', 800: '#62e5ff', 900: '#b0f2ff' },
      'dark_cyan': { DEFAULT: '#0a9396', 100: '#021d1e', 200: '#043b3b', 300: '#065859', 400: '#087577', 500: '#0a9396', 600: '#0ed3d7', 700: '#39eff2', 800: '#7bf4f7', 900: '#bdfafb' },
      'tiffany_blue': { DEFAULT: '#94d2bd', 100: '#153229', 200: '#2a6551', 300: '#3f977a', 400: '#61bd9e', 500: '#94d2bd', 600: '#a9dbca', 700: '#bee4d7', 800: '#d4ede5', 900: '#e9f6f2' },
      'vanilla': { DEFAULT: '#e9d8a6', 100: '#403410', 200: '#7f6720', 300: '#bf9b30', 400: '#d9bc66', 500: '#e9d8a6', 600: '#ede0b7', 700: '#f2e7c9', 800: '#f6efdb', 900: '#fbf7ed' },
      'gamboge': { DEFAULT: '#ee9b00', 100: '#301f00', 200: '#603e00', 300: '#905d00', 400: '#c07d00', 500: '#ee9b00', 600: '#ffb327', 700: '#ffc65d', 800: '#ffd993', 900: '#ffecc9' },
      'alloy_orange': { DEFAULT: '#ca6702', 100: '#281400', 200: '#512901', 300: '#793d01', 400: '#a25202', 500: '#ca6702', 600: '#fd850d', 700: '#fda349', 800: '#fec286', 900: '#fee0c2' },
      'rust': { DEFAULT: '#bb3e03', 100: '#250c01', 200: '#4a1801', 300: '#702402', 400: '#953102', 500: '#bb3e03', 600: '#f95104', 700: '#fc7c41', 800: '#fda880', 900: '#fed3c0' },
      'rufous': { DEFAULT: '#ae2012', 100: '#230604', 200: '#460d07', 300: '#69130b', 400: '#8c190f', 500: '#ae2012', 600: '#e72b1a', 700: '#ed6053', 800: '#f3958d', 900: '#f9cac6' },
      'auburn': { DEFAULT: '#9b2226', 100: '#1f0708', 200: '#3e0e0f', 300: '#5d1417', 400: '#7c1b1e', 500: '#9b2226', 600: '#cf2e33', 700: '#dc6165', 800: '#e89698', 900: '#f3cacc'},
      'eerie_black': { DEFAULT: '#1c1c1c', 100: '#060606', 200: '#0b0b0b', 300: '#111111', 400: '#161616', 500: '#1c1c1c', 600: '#494949', 700: '#777777', 800: '#a4a4a4', 900: '#d2d2d2' },
      'platinum': { DEFAULT: '#daddd8', 100: '#2b2f29', 200: '#565e52', 300: '#828c7b', 400: '#aeb5aa', 500: '#daddd8', 600: '#e2e4e0', 700: '#e9ebe8', 800: '#f1f2f0', 900: '#f8f8f7' },
      'alabaster': { DEFAULT: '#ecebe4', 100: '#363427', 200: '#6d684d', 300: '#9f9a78', 400: '#c5c2ae', 500: '#ecebe4', 600: '#f0efea', 700: '#f4f3ef', 800: '#f7f7f4', 900: '#fbfbfa' },
      'anti-flash_white': { DEFAULT: '#eef0f2', 100: '#2a3036', 200: '#53606c', 300: '#81909e', 400: '#b8c0c8', 500: '#eef0f2', 600: '#f1f3f4', 700: '#f5f6f7', 800: '#f8f9fa', 900: '#fcfcfc' },
      'ghost_white': { DEFAULT: '#fafaff', 100: '#000065', 200: '#0000ca', 300: '#3030ff', 400: '#9595ff', 500: '#fafaff', 600: '#fbfbff', 700: '#fcfcff', 800: '#fdfdff', 900: '#fefeff' }
    },
  },
  plugins: [],
}
