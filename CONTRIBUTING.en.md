# Contributing

<kbd>[한국어](CONTRIBUTING.md)</kbd> | <kbd>English</kbd>

Hello! Thank you for your interest in contributing.

The Bananass Framework welcomes community contributions in various areas, including documentation, website development, code improvements, and solving or explaining Codeforces or Baekjoon problems using the framework. You can contribute to the [Bananass Framework repository](https://github.com/lumirlumir/npm-bananass) in the following ways:

1. Documentation Contributions: Solving and explaining Codeforces or Baekjoon problems with the Bananass Framework, Bananass Framework website docs, `README.md`, etc.
1. Website Contributions: Website design, bug fixes, feature suggestions, etc.  
1. Code Contributions: Adding tests for untested parts of the codebase, bug fixes, feature suggestions, etc.

The basic rules that apply across the entire project are as follows.

- All code and inline comments, except for markdown documents (`**/*.md`), must be written in English.  
- All markdown documents, except for `LICENSE.md` and `CHANGELOG.md`, must exist in two versions: Korean (`.md`) and English (`.en.md`).

## Documentation Contributions

If you find a typo in the Bananass Framework documentation, please submit a [Pull Request](https://github.com/lumirlumir/npm-bananass/pulls) with your corrections. If you're unable to make the fix yourself, opening an [Issue](https://github.com/lumirlumir/npm-bananass/issues) to report the typo is also very helpful.

If you feel the documentation is hard to understand, clarify or improve it. your edits can help many users who share the same difficulties.

You can also help by translating any untranslated documents. Since Bananass Framework supports both Korean and English docs, your translations will make it accessible to more people.

## Project Structure

The Bananass Framework uses a **monorepo** structure with [`npm workspaces`](https://docs.npmjs.com/cli/using-npm/workspaces) and [`lerna`](https://lerna.js.org/).

- Core package `bananass` is in `packages/bananass`.  
- Other packages are under `packages`.  
- Community docs like `README.md` and `CONTRIBUTING.md` are at the project root.  
- Website content lives in `websites/vitepress/ko` and `websites/vitepress/en`.

## Commit Messages

All pull request titles follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Getting Started

1. Fork the repository.  

1. Clone it locally (requires [Git](https://git-scm.com/downloads)):

  ```sh
  git clone https://github.com/lumirlumir/npm-bananass.git
  ```

1. Change into the `npm-bananass` directory:

  ```sh
  cd npm-bananass
  ```

1. Install npm packages (requires [Node.js](https://nodejs.org/en)):

  ```sh
  npm install
  ```

1. Make your documentation or code changes.  

1. Create a new branch:

  ```sh
  git switch -c my-branch
  ```

1. Commit your changes (`husky` and `lint-staged` will auto-format):

  ```sh
  git commit -am "<type>[optional scope]: <description>"
  ```

1. Push to your remote branch.  

1. Open a pull request.
