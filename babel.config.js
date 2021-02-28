module.exports = {
    presets: [
        ['@babel/preset-env', { exclude: ['transform-regenerator'] }],
        ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        'add-module-exports'
    ],
    ignore: ['node_modules/**/*'],
    env: {
        production: {
            plugins: [
                '@babel/plugin-transform-react-constant-elements',
                '@babel/plugin-transform-react-inline-elements',
                [
                    'transform-react-remove-prop-types',
                    { ignoreFilenames: ['node_modules'], removeImport: true }
                ]
            ]
        }
    }
};
