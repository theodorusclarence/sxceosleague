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
                sgreen: '#3fcb9a',
                spurple: '#7a3cf9',
                sorange: '#ffca6c',
                sred: '#f44e61',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
