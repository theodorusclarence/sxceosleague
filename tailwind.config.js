module.exports = {
    mode: 'jit',
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
                // Gradient from 500 to 600
                spurple: {
                    400: '#7a3cf9',
                    500: '#9A18F9',
                    600: '#4F56E9',
                    800: '#2a0b46',
                },
                sorange: {
                    400: '#FCC86C',
                    500: '#ffca6c',
                    600: '#FDB26E',
                    700: '#FDA750',
                },
                sred: { 500: '#f44e61', 600: '#FA8A97' },
                beige: '#FCF5EE',
            },
            spacing: {
                120: '30rem',
            },
        },
    },
    variants: {
        extend: {
            translate: ['group-hover'],
        },
    },
    plugins: [],
};
