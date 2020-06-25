export = conf;
declare const conf: {
    output: {
        filename: string;
        path: any;
    };
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: string;
            loader?: undefined;
            query?: undefined;
        } | {
            test: RegExp;
            loader: string;
            exclude: string;
            query: {
                presets: string[];
            };
            use?: undefined;
        })[];
    };
    plugins: any[];
    resolve: {
        alias: {
            modules: any;
        };
        extensions: string[];
    };
    optimization: {
        minimizer: any[];
    };
};
