module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                primary: ['Barlow', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
            colors: {
                sgreen: { 400: '#3fcb9a', 500: '#85F0B1', 600: '#3FCBED' },
                spurple: { 400: '#7a3cf9', 500: '#9A18F9', 600: '#4F56E9' },
                sorange: { 400: '#FCC86C', 500: '#ffca6c', 600: '#FDB26E' },
                sred: '#f44e61',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
