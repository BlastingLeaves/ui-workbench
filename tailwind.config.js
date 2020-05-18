const theme = require('./src/assets/theme')

const colors = {
    'ui-primary': '#283344',
    'ui-light': '#f6e05e',
    "ui-hover": '#344a6e',
}

module.exports = {
    theme: {
        extend:{
            ...colors,
            ...theme['colors']
        }
    },
    variants: {},
    plugins: [],
}