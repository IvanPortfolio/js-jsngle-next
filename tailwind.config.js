/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
        screens: {
            ['2xl']: '1344px',
        },
        container: {
            center: true,
        },
        extend: {
            colors: {
                lightGray: '#ECECED',
                dark: '#020617',
                gray: '#F3F5F7',
                'dark-gray': '#64748B',
                blue: '#2563EB',
                'blue-hover': '#1D4ED8',
                'light-blue': '#F2F5FF',
                'light-blue-hover': '#D8E1FF',
            },
            gradientColorStops: {},
            fontSize: {
                sm: ['0.875rem', '1.1375rem'],
                lg: ['1.125rem', '1.575rem'],
            },
            animation: {
                'scroll-from-right-to-left':
                    'scroll-from-right-to-left 10s linear infinite',
            },
            keyframes: {
                'scroll-from-right-to-left': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
