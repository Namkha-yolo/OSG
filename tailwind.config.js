cat << 'EOF' > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fb923c',
        accent:  '#facc15',
      }
    }
  },
  plugins: []
}
EOF
