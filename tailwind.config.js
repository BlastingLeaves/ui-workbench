const theme = require('./src/assets/theme')

module.exports = {
    theme: {
        extend:{
            colors:{
                'ui-primary': '#283344',
                'ui-light': '#f6e05e',
                "ui-hover": '#344a6e',
            },
            ...theme
        }
    },
    variants: {},
    plugins: [],
}