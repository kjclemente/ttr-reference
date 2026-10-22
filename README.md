# ttr-reference

Toontown Rewritten calculators, mechanics, and strategy references.

**Website:** [https://kjclemente.github.io/ttr-reference/](https://kjclemente.github.io/ttr-reference/)

## Getting started

Use the Node.js version specified in `.nvmrc`, then install dependencies:

```sh
npm ci
```

Start the development server:

```sh
npm run dev
```

## Commands

| Command                      | Description                               |
| ---------------------------- | ----------------------------------------- |
| `npm run dev`                | Start the development server.             |
| `npm run build`              | Build the static site in `dist/`.         |
| `npm run preview`            | Preview the production build locally.     |
| `npm run astro -- <command>` | Run an Astro CLI command.                 |
| `npm run check`              | Check Astro and TypeScript diagnostics.   |
| `npm run lint`               | Run ESLint and Stylelint.                 |
| `npm run lint:js`            | Run ESLint.                               |
| `npm run lint:css`           | Run Stylelint.                            |
| `npm run lint:fix`           | Automatically fix supported lint issues.  |
| `npm run format`             | Format files with Prettier.               |
| `npm run format:check`       | Check formatting without modifying files. |

## Validation

Before committing changes, run:

```sh
npm run check
npm run lint
npm run format:check
npm run build
```

These checks run independently; `npm run build` does not automatically run the others.

## Continuous integration

The [CI workflow](.github/workflows/ci.yml) runs the validation checks on pushes to `main`
and on pull requests. It can also be triggered manually from the GitHub Actions tab.

## Deployment

The [deployment workflow](.github/workflows/deploy.yml) validates, builds, and deploys the website
to GitHub Pages when changes are pushed to `main`. It can also be triggered manually from the
GitHub Actions tab with `main` selected.
