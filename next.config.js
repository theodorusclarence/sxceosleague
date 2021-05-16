module.exports = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    async rewrites() {
        return [
            {
                source: '/bee.js',
                destination: 'https://cdn.splitbee.io/sb.js',
            },
            {
                source: '/_hive/:slug',
                destination: 'https://hive.splitbee.io/:slug',
            },
        ];
    },
};
