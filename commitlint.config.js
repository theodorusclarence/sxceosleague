module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [2, 'always', ['pre-event', 'ibl-case', 'conference']],
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'BREAKING CHANGE',
                'docs',
                'chore',
                'style',
                'refactor',
                'ci',
                'test',
                'perf',
                'vercel',
            ],
        ],
    },
};
