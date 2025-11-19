// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',   // <--- This must exist!
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    // ...other theme settings
  },
  plugins: [
    require('@tailwindcss/forms'), // or any other plugins you use
    // ...maybe skeleton's plugin if needed
  ],
  // other configs like content, etc.
};

