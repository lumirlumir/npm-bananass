# bananass

<kbd>[한국어](README.md)</kbd> | <kbd>English</kbd>

Bananass<sup>🍌🍌🍌🍌</sup>: <kbd>Noun</kbd> Baekjoon framework for JavaScript.

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

Welcome to the Bananass<sup>🍌🍌🍌🍌</sup> framework.🎉

The Bananass Framework is a **Baekjoon framework for JavaScript** created by [LuMir](https://github.com/lumirlumir), designed for more convenient problem-solving in the Baekjoon Node.js environment.

You no longer need to write template code using the `readline` or `fs` modules and copy-paste it every time! With the Bananass Framework, you can experience more convenient problem-solving, just like writing a single solution function<sup>`function solution() {}`</sup> on [**Programmers**](https://programmers.co.kr/).

## Why Bananass?

Shall we take a look at an example of solving the [Baekjoon Problem 1000: A+B](https://www.acmicpc.net/problem/1000) using JavaScript together?

- Before: Solving the problem using the traditional method.

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

    function solution(inputStr) {
      const input = inputStr
        .trim()
        .split(' ')
        .map(val => Number(val));

      const [a, b] = input;

      return a + b;
    }
    ```

- After: Solving the problem using the Bananass Framework.

    ```js
    function solution(input) {
      const [a, b] = input
        .trim()
        .split(' ')
        .map(val => Number(val));

      console.log(a + b);
    }

    module.exports = solution;
    ```

Wow!😲 Isn't it amazing? Now you can focus solely on the algorithm logic with simplified code.

## Getting Started with Bananass

Like `create-react-app` for React and `create-next-app` for Next.js,

**Experience a new paradigm in problem-solving right now with `create-bananass-app` provided by the Bananass Framework!**

```bash
npx create-bananass-app my-bananass-app --no-install
```

For more detailed usage, please refer to the [Bananass Framework Documentation](https://bananass.lumir.page).

## Bananass Framework Documentation

> <https://bananass.lumir.page>

The Bananass Framework values documentation as its highest priority. You can find all usage instructions and features of the Bananass Framework in the [Bananass Framework Documentation](https://bananass.lumir.page).

## Contribution (Issues, Pull Requests, Discussions)

Thank you for your interest in the Bananass Framework.🙇‍♂️ We appreciate the valuable time you invest in the Bananass Framework.

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
