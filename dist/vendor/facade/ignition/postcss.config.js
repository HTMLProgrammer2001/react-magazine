"use strict";
var purgecss = require('@fullhuman/postcss-purgecss');
module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-preset-env')(),
        process.env.NODE_ENV === 'production'
            ? purgecss({
                content: [
                    './resources/js/**/*.js',
                    './resources/js/**/*.vue',
                    './resources/views/errorPage.php',
                ],
                extractors: [
                    {
                        extractor: (function () {
                            function extractor() {
                            }
                            extractor.extract = function (content) {
                                return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
                            };
                            return extractor;
                        }()),
                        extensions: ['js', 'php', 'vue'],
                    },
                ],
                whitelistPatterns: [/hljs/, /sf-dump/, /theme-dark/, /theme-auto/],
            })
            : '',
    ],
};
//# sourceMappingURL=postcss.config.js.map