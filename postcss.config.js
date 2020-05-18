// noinspection JSValidateTypes
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'production'
            ? require('@fullhuman/postcss-purgecss')({
                content: ['./pages/**/*.js', './components/**/*.js'],
                whitelist: ['html', 'body'],
                defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            })
            : false,
        process.env.NODE_ENV === 'production'
            ? require('cssnano')({preset: 'default'})
            : false
    ]
}