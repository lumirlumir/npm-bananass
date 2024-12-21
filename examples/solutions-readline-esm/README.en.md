# `examples-solutions-readline-esm`

<kbd>[한국어](README.md)</kbd> | <kbd>English</kbd>

This example is a Baekjoon problem-solving example using the `readline` module in an ESM environment, intended to verify the ***lack of support*** for ESM modules in the Baekjoon Node.js environment.

By following the [Getting Started](#getting-started) section below, you can run the example and confirm that the file works correctly in your local environment. However, if you submit the file to Baekjoon, you will encounter a 'Runtime Error (Syntax Error)' in the Baekjoon Node.js environment. This error occurs because Baekjoon does not support ESM modules, indicating that you must use CJS modules for Baekjoon problem-solving.

> [!IMPORTANT]
>
> This example no longer adds problem-solving examples. To add problem-solving examples, refer to the `examples/solutions-bananass` directory using the Bananass framework.

## Getting Started

You can run the example by choosing one of the following two methods.

### Run from the Root

You can start the example by running the following commands from the root directory:

```sh
npm run start:1000 -w examples/solutions-readline-esm # Problem 1000
```

### Navigate to the Directory and Run

Navigate to the `examples/solutions-readline` directory and then run the following commands to start the example:

```sh
cd examples/solutions-readline-esm

npm run start:1000 # Problem 1000
```

Once the example is running, you can input the Baekjoon example in the terminal, press <kbd>Enter</kbd>, and then press <kbd>Ctrl</kbd>+<kbd>c</kbd> or <kbd>Command</kbd>+<kbd>c</kbd> to see the example output.
