/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,html}",
    "./**/*.html",
    "../**/*.html"],
  theme: {
    extend: {},
    fontFamily:
    {
      'main-heading': ["Roboto"],
      'exo-2': ["Exo 2"],
      'lato': ["Lato"],
      'inter-tight': ["Inter Tight"],
    },
    backgroundImage: theme => ({
      'hero-image': "url('./hero-image.jpg')",
    })
  },
  plugins: [],
}

