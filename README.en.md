# Bananass

[![lint](https://img.shields.io/github/actions/workflow/status/lumirlumir/npm-bananass/lint.yml?label=lint&color=fff478&labelColor=333333&logo=github)](https://github.com/lumirlumir/npm-bananass/actions/workflows/lint.yml)
[![test](https://img.shields.io/github/actions/workflow/status/lumirlumir/npm-bananass/test.yml?label=test&color=fff478&labelColor=333333&logo=github)](https://github.com/lumirlumir/npm-bananass/actions/workflows/test.yml)
[![test-cross-platform](https://img.shields.io/github/actions/workflow/status/lumirlumir/npm-bananass/test-cross-platform.yml?label=test-cross-platform&color=fff478&labelColor=333333&logo=github)](https://github.com/lumirlumir/npm-bananass/actions/workflows/test-cross-platform.yml)
[![Codecov](https://img.shields.io/codecov/c/gh/lumirlumir/npm-bananass?token=2zUCHlMFT3&label=Codecov&color=fff478&labelColor=333333&logo=codecov)](https://codecov.io/gh/lumirlumir/npm-bananass)
![Node Current](https://img.shields.io/node/v/bananass?label=Node&color=fff478&labelColor=333333&logo=node.js)

[![npm package bananass latest version](https://img.shields.io/npm/v/bananass?label=bananass@latest&color=fff478&labelColor=333333&logo=npm)](https://www.npmjs.com/package/bananass)
[![npm package bananass next version](https://img.shields.io/npm/v/bananass/next?label=bananass@next&color=fff478&labelColor=333333&logo=npm)](https://www.npmjs.com/package/bananass)

<kbd>[한국어](README.md)</kbd> | <kbd>English</kbd>

Baekjoon Framework for JavaScript.

A new paradigm for solving algorithm problems in JavaScript.

> [!IMPORTANT]
>
> ```js
> const whyBananass = {
>   banana: '🍌',
>   bananas: '🍌🍌',
>   bananass: '🍌🍌🍌🍌',
> }
> ```
>
> ```js
> console.log(('b' + 'a' + +'a' + 'a').toLowerCase() + (!(1/0) + [])[3].repeat(2));
> ```

<!-- markdownlint-disable-next-line md026 -->
## Hello, Bananass!

Welcome to the Bananass framework!

The Bananass is a **Baekjoon framework for solving algorithm problems based on JavaScript and TypeScript**, providing a simple and convenient user experience by solving common issues encountered in the Baekjoon Node.js environment.

- Do you need support for TypeScript?
- Are you having trouble using the latest JavaScript syntax, such as ES16<sup>ES2025</sup>?
- Do you want to use external libraries?
- Are you tired of repeatedly copying and pasting `readline` / `fs` template code?

Don't worry anymore! The Bananass framework solves all these problems for you.

## Why Bananass?

Let's take a look at an example of solving the [Baekjoon 1000: A+B](https://www.acmicpc.net/problem/1000) problem using JavaScript!

- Solving the problem using the traditional method:

    ```js
    const readline = require('node:readline');
    const { EOL } = require('node:os');

    let inputStr = '';

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', line => {
      inputStr = `${inputStr}${line}${EOL}`;
    }).on('close', () => {
      console.log(solution(inputStr));

      process.exit(0);
    });

    function solution(input) {
      const [a, b] = input
        .trim()
        .split(' ')
        .map(val => Number(val));

      return a + b;
    }
    ```

- Solving the problem using the Bananass Framework:

    ```js
    function solution(input) {
      const [a, b] = input
        .trim()
        .split(' ')
        .map(Number);

      return a + b;
    }

    export default { solution };
    ```

More concise and intuitive code! It reduces the time spent on input handling, allowing you to focus solely on the algorithm.

## Is that all?

Of course, that's not all!

- Support for JavaScript and TypeScript.
- Support for both ESM<sup>ECMAScript Module</sup> and CommonJS module systems.
- Support for the latest syntax, including ES16<sup>ES2025</sup>, independent of the Baekjoon Node.js environment.
- Support for importing custom modules and external libraries like `lodash`.
- Support for starting with a single `solution` function, just like on Programmers.
- Support for writing and running test cases.
- Support for starting with `create-bananass`.
- Faster input/output using the `fs` module.
- Various convenient CLI commands.
- Rich and detailed documentation.
- Built-in support for ESLint and Prettier.

How about it? Don't you want to experience even more convenient problem-solving with the Bananass framework?

## Getting Started with Bananass

Like `create-react-app` for [React](https://react.dev) and `create-next-app` for [Next.js](https://nextjs.org), Experience a new paradigm in problem-solving right now with `create-bananass` provided by the Bananass Framework!

You can instantly install and use the Bananass Framework with `create-bananass`.

```sh
npm create bananass@latest
```

For more detailed usage, please refer to the [Bananass Framework Documentation](https://bananass.lumir.page/en).

## Bananass Framework Documentation

The Bananass Framework values documentation as its highest priority. You can find all usage instructions and features of the Bananass Framework in the [Bananass Framework Documentation](https://bananass.lumir.page/en).

## Contribution (Issues, Pull Requests, Discussions)

Thank you for your interest in the Bananass Framework!

We welcome issues, pull requests, and discussions on various topics, including bugs and suggestions.

However, to maintain a proper community environment and create better open-source software, please make sure to review the following before contributing to the Bananass Framework:

- [Code of Conduct](CODE_OF_CONDUCT.en.md)
- [Contributing](CONTRIBUTING.en.md)

## Versioning

The Bananass Framework follows [Semantic Versioning](https://semver.org/). All release versions adhere to the `MAJOR.MINOR.PATCH` format.

## Code of Conduct

Before contributing to the community, please refer to the [Code of Conduct](CODE_OF_CONDUCT.en.md).

## Change Log

For detailed information on changes, please refer to the [Change Log](CHANGELOG.md).

## Security

Have you discovered a security issue? Please refer to the [Security](SECURITY.en.md).

## License

The Bananass Framework is licensed under the MIT. Please refer to the [License](LICENSE.md).
