// @ts-check
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const codeFiles = ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,astro}'];

// Include Astro files so TypeScript rules also apply to them.
const typescriptFiles = ['**/*.{ts,mts,cts,tsx,astro}'];

export default defineConfig([
  globalIgnores(['**/dist/**', '**/.astro/**', '**/coverage/**']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  {
    files: codeFiles,
    extends: [js.configs.recommended],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      eqeqeq: ['error', 'always'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: typescriptFiles,
  })),

  // Keep Astro after TypeScript so it uses the correct parser.
  ...astro.configs.recommended,
  {
    files: typescriptFiles,
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,mts}'],
    extends: [reactHooks.configs.flat.recommended],
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx,mjs,mts}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: [
      '**/*.config.{js,mjs,cjs,ts,mts,cts}',
      'scripts/**/*.{js,mjs,cjs,ts,mts,cts}',
      '**/*.{cjs,cts}',
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
  // Prevent ESLint rules from conflicting with Prettier.
  prettier,
]);
