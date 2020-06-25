declare const _exports: {
    entry: {
        ignition: string;
    };
    output: {
        path: string;
        publicPath: string;
        filename: string;
    };
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: RegExp;
        } | {
            test: RegExp;
            loader: string;
        } | {
            test: RegExp;
            use: (string | {
                loader: string;
                options: {
                    url: boolean;
                };
            })[];
        })[];
    };
    plugins: any[];
    resolve: {
        extensions: string[];
        alias: {
            vue$: string;
        };
    };
    stats: string;
    performance: {
        hints: boolean;
    };
};
export = _exports;
