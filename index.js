module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'object-curly-newline': [2, { consistent: true }],
        'arrow-parens': 2, // 要求箭头函数的参数使用圆括号  (a) => {}
        'generator-star-spacing': 2, // 允许方法之间加星号 function * generator() {}
        semi: [2, 'always'], // 要求在语句末尾使用分号
        'padded-blocks': [2, { blocks: 'never' }], // 要求或禁止块内填充,要求块语句和类的开始或末尾有空行
        'no-return-assign': 2, // 禁止在返回语句中赋值,除非赋值语句是在圆括号中  return (foo = bar + 2);
        'comma-dangle': [2, 'always-multiline'],
        'space-before-function-paren': [2, { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
        'react/prop-types': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/alt-text': 0,
        'import/prefer-default-export': 0,
        'no-case-declarations': 0,
        'react/jsx-uses-react': 2, // jsx 文件中需要引入 react
        'react/jsx-uses-vars': 2, // jsx 文件中不允许使用 var
        'react/no-danger': 0,
        'react/state-in-constructor': 0,
        'react/no-string-refs': 2, // 当使用字符串格式的 ref 方式时会报错
        'react/display-name': 0,
        'react/require-default-props': 0,
        'react/destructuring-assignment': 0,
        '@typescript-eslint/restrict-plus-operands': 0,
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/no-console': 0,
        '@typescript-eslint/object-literal-sort-keys': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name': 0,
        '@typescript-eslint/no-shadowed-variable': 0,
        '@typescript-eslint/no-eval': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-unused-vars': [2, { vars: 'all', args: 'none', ignoreRestSiblings: true }],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/indent': [2, 4],
        'no-bitwise': 0,
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
        '@typescript-eslint/no-unused-expressions': 0,
        'global-require': 0,
        'react/sort-comp': [
            1,
            {
                order: [
                    'abstract-variables',
                    'abstract-methods',
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    // '/^on.+$/',
                    // 'getters',
                    // 'setters',
                    // '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    // 'instance-methods',
                    'everything-else',
                    'rendering',
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'state',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount',
                    ],
                    rendering: ['/^render.+$/', 'render'],
                },
            },
        ],
    },
};
