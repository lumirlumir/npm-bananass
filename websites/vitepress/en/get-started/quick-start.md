# Quick Start {#quick-start}

Welcome to the **Quick Start** guide, where you can get hands-on with the Bananass framework right away!

This chapter introduces how to install the Bananass framework using the [`create-bananass`](installation#getting-started-with-create-bananass) command and how to solve and submit the example [Baekjoon problem 1000](https://www.acmicpc.net/problem/1000)!

::: danger Please read carefully!

This chapter is designed to introduce you to the Bananass framework quickly and easily, rather than providing detailed installation and usage instructions! For detailed usage of the Bananass framework, please refer to the [Learn](../learn/) documentation.

:::

---

[[TOC]]

## Quick Installation {#quick-install}

::: info Please note!

For detailed installation methods that support various environments, please refer to the [Installation](installation.md) documentation!

:::

### Prerequisites {#prerequisites}

Before running the `create-bananass` command, please install the latest version of [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) that fall within the `^20.18.0 || ^22.3.0 || >= 24.0.0` range.

### Installing with `create-bananass` {#install-with-create-bananass}

Have you installed Node.js and Git? Now, please enter one of the following commands in your terminal (CLI) to run `create-bananass`!

::: code-group

```sh [npm]
$ npx create-bananass@latest
# or
$ npm create bananass@latest
# or
$ npm init bananass@latest
```

:::

If you see a message like the one below, please press the `y` key on your keyboard and then press `Enter`. (The package version corresponding to `0.1.0` may vary.)

```sh
Need to install the following packages:
create-bananass@0.1.0
Ok to proceed? (y)
```

Next, please answer the following questions. The configuration and settings of the Bananass framework will vary depending on your answers!

For `○ Yes / ● No` options, you can select using keyboard arrows and `Enter`, or by pressing the `y` or `n` keys.

```sh
❯ Which directory should this project be located in?
.

❯ Would you like to use CommonJS module system?
○ Yes / ● No

❯ Would you like to use TypeScript?
○ Yes / ● No

❯ Would you like to skip initializing Visual Studio Code configurations?
○ Yes / ● No

❯ Would you like to skip initializing Git?
○ Yes / ● No

❯ Would you like to skip installing packages with npm?
○ Yes / ● No
```

Once you complete all selections, a Bananass framework project will be automatically created in the specified folder, and if successfully installed, the following message will be displayed.

```sh
✓ Successfully created a new Bananass framework project!
```

## Quick Overview {#quick-overview}

::: info Please note!

For a more detailed explanation of the project structure, please refer to the [Project Structure](../learn/project-structure.md) documentation!

:::

Now, a Bananass framework project has been created! The basic structure of the created project is as follows.

```sh {2-3,7-8,20}
bananass-project/
├── .bananass/ # [!code focus] Automatically generated when running the `build` command!
│   ├── 1000.cjs # [!code focus] Generated when running `npx bananass build 1000` command!
│   ├── 1001.cjs # Generated when running `npx bananass build 1001` command!
│   ├── 2558.cjs # Generated when running `npx bananass build 2558` command!
│   └── ...
├── bananass/ # [!code focus]
│   ├── 1000.{mjs,cjs,mts,cts} # [!code focus]
│   ├── 1001.{js,ts}
│   ├── 2558/
│   │   ├── index.{js,ts}
│   │   ├── solution.{js,ts}
│   │   └── testcases.{js,ts}
│   └── ...
├── .gitattributes
├── .gitignore
├── README.md
├── bananass.config.{js,mjs,cjs,ts,mts,cts}
├── eslint.config.{mjs,mts}
├── package.json # [!code focus]
├── prettier.config.mjs
└── ...
```

First, please focus on the highlighted folders and files! They play important roles in this chapter.

### `package.json` {#package-json}

`package.json` is a file that contains settings for the Bananass framework to operate in the [Node.js](https://nodejs.org/) environment!

The `scripts` section in `package.json` contains various commands. The commands added to `scripts` can be executed through terminal (CLI) commands such as [`npm run build 1000`](../learn/building-a-solution-file.md), [`npm run run 1000`](../learn/running-a-solution-file.md), [`npm run open 1000`](../learn/submitting-a-solution-file.md), etc.

Among the various commands in `scripts`, please focus on the `build`, `run`, and `open` commands! We will be using these commands to solve and submit problems together.

```json [package.json] {5,7,9}
{
  // ...
  "scripts": {
    // ...
    "build": "bananass build", // [!code focus]
    // ...
    "open": "bananass open", // [!code focus]
    // ...
    "run": "bananass run", // [!code focus]
    // ...
  }
  // ...
}
```

### `bananass` folder {#bananass-folder}

The `bananass` folder is where problem-solving files using the Bananass framework will be located! Please add files or folders to this folder to write code for solving and submitting problems.

Currently, as examples, problem-solving *files* for problems `1000` and `1001`, and a problem-solving *folder* for problem `2558` are pre-written in the `bananass` folder.

Problem-solving files can either [write all logic in a single file](../learn/writing-all-logic-in-a-single-file.md) or [write modular logic in a single folder](../learn/writing-modular-logic-in-a-single-folder.md). The problem-solving files for problems `1000` and `1001` are examples of **writing all logic in a single file**, while the problem-solving folder for problem `2558` is an example of **writing modular logic in a single folder**.

### `.bananass` folder {#dot-bananass-folder}

The `.bananass` folder is automatically created when you enter [`build`](../learn/other-useful-cli-commands.md#build) commands such as `npm run build 1000` or `npx bananass build 1000` in the terminal to build problem-solving files.

Problem-solving files such as `1000.mjs` located in the `bananass` folder are converted to files with the same name such as `1000.cjs` located in the `.bananass` folder! The converted files are compatible with the Node.js environment of problem-solving platforms such as [Baekjoon](https://www.acmicpc.net/) and [Codeforces](https://codeforces.com/), and you can submit them by copying the contents of the file and pasting them on the website.

## Quick Solve {#quick-solve}

Now, it's time to solve problems using the Bananass framework! Let's solve [Baekjoon problem 1000](https://www.acmicpc.net/problem/1000) together.

First, please open the `1000.{mjs,cjs,mts,cts}` file located in the `bananass` folder. It is written as follows.

<!-- @include: @/shared/solution-file-example-full.en.md -->

Have you looked at the file? The core of a Bananass framework problem-solving file consists of <u>**3 things**</u>! [`testcases`](../learn/writing-test-cases.md), [`solution`](../learn/writing-a-solution-function.md), and [`export`](../learn/exporting-test-cases-and-solution-function.md). Do you remember?

::: danger Please read carefully!

Since this is important content, I'll explain it again in plain language.  
**Test cases**<sup>[`testcases`](../learn/writing-test-cases.md)</sup>, **solution function**<sup>[`solution`](../learn/writing-a-solution-function.md)</sup>, and **export**<sup>[`export`](../learn/exporting-test-cases-and-solution-function.md)</sup>!

:::

### Writing `testcases` variable {#writing-testcases}

`testcases` is an array of objects containing input and output values for the `solution` function! `input` and `output` refer to the input values<sup>sample input</sup> and output values<sup>sample output</sup> specified on sites like Baekjoon and Codeforces, and you should write them identically.

When you input the value corresponding to `input` in `testcases` to the `solution` function, it should return the value corresponding to `output`. `testcases` is optional and does not affect problem-solving build<sup>`build`</sup> even if not written. However, if written, you can use the `npm run run` or `npx bananass run` command to check if the `solution` function you wrote works correctly. Therefore, it is recommended to write `testcases` first before writing the problem solution to define the expected behavior of the `solution` function!

### Writing `solution` function {#writing-solution}

`solution` is a function for problem-solving. It should take `input` as an argument and return the correct answer to the problem corresponding to `output`.

`input` is always given as a string, and `output` should return one of the following types: string<sup>`string`</sup>, number<sup>`number`</sup>, or boolean<sup>`boolean`</sup>.

When the input value is complex, you need to parse the string `input` and convert it to a form that is convenient to use. For more information on this, please refer to the [Parsing Input Value](../learn/parsing-input-value.md) documentation!

### Exporting `testcases` and `solution` {#exporting-testcases-and-solution}

::: danger Please read carefully!

When exporting the `testcases` variable and `solution` function through `export default`<sup>ESM</sup> and `module.exports`<sup>CommonJS</sup>, etc., you must not use names other than `testcases` and `solution`!

This is a rule of the Bananass framework, and when exporting modules, you must only use the names `testcases` and `solution`.

:::

You can use the `build` and `run` commands of the Bananass framework normally only when you export the `testcases` variable and `solution` function through `export default` and `module.exports`, etc.

Please export `testcases` and `solution` as a single object as shown below!

```js
// ESM
export default { testcases, solution };

// CommonJS
module.exports = { testcases, solution };
```

## Quick Run {#quick-run}

::: info Please note!

If the `npx bananass` command is too long and inconvenient, you can use `b` instead of `bananass`! `npx b` is an abbreviation for `npx bananass`.

:::

Now, it's time to check if you wrote the problem-solving function `solution` correctly! Please enter one of the following commands in the terminal (CLI) to check if the `solution` function works correctly.

```sh
$ npm run run 1000
# or
$ npx bananass run 1000
# or
$ npx b run 1000
```

When it operates normally, a message like `✓ Bananass run completed successfully` will be displayed along with various console messages to check if the input and output values match!

## Quick Build {#quick-build}

When you check the results through the `run` command and the `solution` function works as expected, all preparations are complete! Now, please enter one of the following commands to build the problem-solving file.

```sh
$ npm run build 1000
# or
$ npx bananass build 1000
# or
$ npx b build 1000
```

When you run the command, a `1000.cjs` file will be created in the `.bananass` folder! Although the code is compressed and readability is reduced, it is a file that has been properly converted through the `build` command of the Bananass framework. If code like the following is generated, it has been successfully built!

```js [.bananass/1000.cjs]
/**
 * This file was generated using the Baekjoon Framework for JavaScript 'Bananass🍌'
 *
 * Bananass Homepage: https://bananass.lumir.page
 * Bananass GitHub Repository: https://github.com/lumirlumir/npm-bananass
 *
 * Released under the MIT License
 * Copyright © 2024-2025 루밀LuMir(lumirlumir)
 *
 * DO NOT DELETE THIS COMMENT
 */
(()=>{var t={24:t=>{"use strict";t.exports=require("node:fs")},534:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});const r={solution:function(t){const[e,o]=t.trim().split(" ").map((t=>Number(t)));return e+o},testcases:[{input:"1 2",output:"3"},{input:"3 4",output:"7"},{input:"5 6",output:"11"}]}}},e={};function o(r){var u=e[r];if(void 0!==u)return u.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};const{readFileSync:r}=o(24),u=o(534),{solution:n}=u?.default??u,i=r(0,"utf-8");console.log(n(i))})();
```

## Quick Submit {#quick-submit}

Now, finally, it's time to submit the problem-solving file! Please enter one of the following commands using [`open`](../learn/other-useful-cli-commands#open) in the terminal (CLI) to open the Baekjoon website.

```sh
npm run open 1000
# or
npx bananass open 1000
# or
npx b open 1000
```

Did the website open? Now, please copy the contents of the `.bananass/1000.cjs` file and paste it on the Baekjoon website and submit!

Did you pass? Congratulations! You have now learned the basic method of solving and submitting problems using the Bananass framework!

## Conclusion {#conclusion}

You are now basically prepared to use the Bananass framework. Learn more usage methods and various features of the Bananass framework through the [Learn](../learn/index.md) documentation!

Also, check out how other users approached problem-solving through [Problem Solutions](../solutions/index.md).:partying_face:
