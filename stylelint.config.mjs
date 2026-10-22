// @ts-check
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html/astro'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/.astro/**', '**/coverage/**'],
  reportNeedlessDisables: true,
  rules: {
    // Leave declaration spacing to Prettier and match its SVG keyword casing.
    'declaration-empty-line-before': null,
    'custom-property-empty-line-before': null,
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
  },
  overrides: [
    {
      files: ['**/*.astro'],
      rules: {
        // Astro supports :global(...) inside scoped style blocks.
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
      },
    },
  ],
};
