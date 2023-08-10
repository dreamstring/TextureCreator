import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/soil.jsx",
            intro: "(function () {",
            outro: "}).call(this);",
            plugins: [
                terser({
                    compress: false,
                    mangle: false,
                    format: {
                        beautify: true,
                        braces: true,
                        comments: false,
                        keep_quoted_props: true,
                        keep_numbers: true,
                        preamble: `// ${new Date().toLocaleString()}`,
                        wrap_func_args: false,
                    },
                }),
            ],
        },
        // {
        //     file: "dist/soil.min.jsx",
        //     intro: "(function () {",
        //     outro: "}).call(this);",
        //     plugins: [
        //         terser({
        //             compress: {
        //                 arrows: false,
        //                 arguments: true,
        //                 booleans: false,
        //                 conditionals: false,
        //                 evaluate: false,
        //                 join_vars: false,
        //                 keep_infinity: true,
        //                 sequences: false,
        //                 toplevel: true,
        //             },
        //             format: {
        //                 braces: true,
        //             },
        //         }),
        //     ],
        // },
    ],
    treeshake: {
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
    },
    plugins: [typescript()],
    context: "this",
};
