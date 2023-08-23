/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ...,
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [..., require('flowbite/plugin')],
  ...
};

module.exports = {
  content: [
    "./components/home/slidShow/style.css" /* src folder, for example */,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
