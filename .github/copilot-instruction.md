# GitHub Copilot Instructions for npm-bananass

## Project Overview

**Bananass** is a JavaScript/TypeScript framework designed for solving algorithm problems on competitive programming platforms like Baekjoon and Codeforces. The framework simplifies the development experience by handling input/output operations, supporting modern JavaScript syntax (ES2025), TypeScript, external libraries, and providing a clean API similar to platforms like Programmers.

### Core Mission

- Eliminate boilerplate code for competitive programming in Node.js
- Support modern JavaScript/TypeScript features beyond platform limitations
- Provide a simple, intuitive API focused on the `solution` function
- Enable usage of external libraries and custom modules

## Repository Structure

This is a **monorepo** managed with **npm workspaces**:

```txt
npm-bananass/
├── packages/                    # Core packages
│   ├── bananass/               # Main framework package
│   ├── bananass-utils-console/ # Console utilities
│   ├── create-bananass/        # Project scaffolding tool
│   ├── eslint-config-bananass/ # ESLint configuration
│   └── prettier-config-bananass/ # Prettier configuration
├── examples/                   # Example solutions
│   ├── solutions-bananass-cjs/ # CommonJS examples
│   ├── solutions-bananass-cts/ # CommonJS TypeScript examples
│   ├── solutions-bananass-mjs/ # ES modules examples
│   └── solutions-bananass-mts/ # ES modules TypeScript examples
├── tests/                      # Test suites
│   ├── e2e/                   # End-to-end tests
│   └── integration/           # Integration tests
└── websites/                   # Documentation sites
    ├── vitepress/             # Main documentation (VitePress)
    └── eslint-config-bananass/ # ESLint config documentation
```

## Technology Stack

### Core Technologies

- **Node.js**: ^20.19.0 || ^22.13.0 || >=24.0.0
- **Package Manager**: npm 10.9.2+ with workspaces
- **Module Systems**: ES Modules (ESM) and CommonJS
- **TypeScript**: For type definitions and TypeScript support
- **Webpack**: For bundling solutions with Babel transformations
- **Babel**: For transpiling modern JavaScript to platform-compatible code

### Build & Development Tools

- **Testing**: Node.js native test runner (`node --test`)
- **Linting**: ESLint 9.x with flat config
- **Formatting**: Prettier
- **Markdown**: markdownlint, textlint
- **Git Hooks**: Husky with lint-staged
- **CI/CD**: GitHub Actions
- **Documentation**: VitePress

### Key Dependencies

- **@babel/core**: Code transformation
- **webpack**: Module bundling
- **commander**: CLI framework
- **zod**: Schema validation
- **jiti**: Runtime TypeScript/ESM loader
- **defu**: Object merging utility

## Development Guidelines

### Language & Documentation Rules

**CRITICAL**: Follow these rules strictly:

1. **All code and internal comments MUST be in English** (excluding `**/*.md` files)
1. **Markdown documentation MUST exist in both Korean (`.md`) and English (`.en.md`)** versions
1. **Exceptions**: `LICENSE.md` and `CHANGELOG.md` do not require dual-language versions

### Code Style

- **ES Modules**: Use `import`/`export` syntax by default in the main codebase
- **Semicolons**: Do not use semicolons (configured in Prettier)
- **Quotes**: Use single quotes for strings
- **Trailing Commas**: Use trailing commas for multi-line structures
- **Line Length**: Prefer 80-100 characters per line

### File Naming Conventions

- Source files: `kebab-case.js`, `kebab-case.ts`
- Test files: `*.test.js`, `*.test.ts` (co-located with source)
- CLI commands: `bananass-<command>.js` (e.g., `bananass-run.js`)
- Configuration: `*.config.mjs` for configs at root

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```txt
<type>[optional scope]: <description>

Types: feat, fix, build, chore, ci, docs, perf, refactor, revert, style, test
```

**Scopes**: Use package names from the monorepo (e.g., `feat(bananass): add new command`)

## Architecture & Patterns

### Core Framework Architecture

The `bananass` package is organized into:

1. **CLI Layer** (`src/cli/`): Command-line interface definitions using Commander.js
1. **Commands Layer** (`src/commands/`): Business logic for each CLI command
1. **Core Layer** (`src/core/`): Shared utilities, types, and constants
1. **Babel Plugins** (`src/babel-plugins/`): Custom transformations for modern JS features

### Key Concepts

- **Solution Function**: Users export a `solution(input)` function that receives input as a string and returns the result
- **Webpack Bundling**: Solutions are bundled with dependencies and transpiled for target platforms
- **Test Runner**: Built-in test runner executes test cases against the solution
- **Configuration**: `bananass.config.js` for customizing behavior (webpack, babel, etc.)

### Module Resolution

- Use ESM (`import`/`export`) in the main codebase
- Support both ESM and CommonJS in generated bundles
- Handle TypeScript via Babel plugin (`@babel/plugin-transform-typescript`)

## Testing Guidelines

### Test Structure

- **Unit Tests**: Co-located with source files (e.g., `command.js` → `command.test.js`)
- **Integration Tests**: In `tests/integration/`
- **E2E Tests**: In `tests/e2e/`
- **Example Tests**: Each example directory has its own test suite

### Running Tests

```sh
npm test                    # Run all tests
npm run test:pkg:b          # Test bananass package only
npm run test:ex:sb-mjs      # Test ESM JavaScript examples
npm run test:t:e2e          # Run e2e tests
npm run coverage            # Generate coverage report
```

### Test Framework

- Use Node.js native test runner with `--experimental-test-module-mocks`
- Use `describe()`, `it()`, `test()` for test organization
- Mock modules with `mock.module()` when needed
- Prefer integration tests over heavy mocking

### Test Patterns

```js
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

describe('feature name', () => {
  it('should do something specific', () => {
    const result = someFunction()
    assert.strictEqual(result, expected)
  })
})
```

## Building & Bundling

### Build Process

```sh
npm run build               # Build all packages
npm run build:pkg:b         # Build bananass package only
npm run dev                 # Start development server (VitePress docs)
```

### Build Output

- TypeScript compiled to `build/` directory
- Type definitions (`.d.ts`) generated for all packages
- `LICENSE.md` and `README.md` copied to each package

## Linting & Formatting

### Running Linters

```sh
npm run lint                # Run all linters
npm run lint:eslint         # ESLint only
npm run lint:prettier       # Prettier check only
npm run lint:markdownlint   # Markdown linting
npm run fix                 # Auto-fix all issues
```

### ESLint Configuration

- Uses flat config format (`eslint.config.mjs`)
- Custom config package: `eslint-config-bananass`
- Plugin: `eslint-plugin-mark` for markdown validation
- Supports JavaScript, TypeScript, JSON, JSON5, JSONC

### Prettier Configuration

- Custom config package: `prettier-config-bananass`
- Enforces consistent formatting across the monorepo
- Integrated with lint-staged for pre-commit hooks

## Common Development Tasks

### Adding a New CLI Command

1. Create command directory: `packages/bananass/src/commands/bananass-<name>/`
1. Add business logic: `<name>.js`
1. Add tests: `<name>.test.js`
1. Export from: `index.js`
1. Register CLI handler: `packages/bananass/src/cli/bananass-<name>.js`
1. Add to main CLI: `packages/bananass/src/cli/index.js`

### Adding a New Package

1. Create directory under `packages/`
1. Add `package.json` with proper exports
1. Update workspace scripts in root `package.json`
1. Add to `.github/workflows/` if needed

### Working with Examples

- Examples demonstrate framework usage
- Each example has its own `package.json`
- Examples are workspaces and can be run individually
- Use examples for testing real-world scenarios

## CI/CD & Automation

### GitHub Actions Workflows

- **lint.yml**: Run all linters
- **test.yml**: Run test suite
- **test-cross-platform.yml**: Test on multiple OS
- **pull-request.yml**: Validate PR titles (Conventional Commits)
- **version-monorepo.yml**: Version management
- **publish.yml**: Publish packages to npm
- **release.yml**: Create GitHub releases

### Pre-commit Hooks

- Husky runs lint-staged on commit
- Automatically formats staged files
- Runs relevant linters based on file types

## Documentation

### Structure

- **Korean**: `websites/vitepress/ko/`
- **English**: `websites/vitepress/en/`
- **API Docs**: Generated from TypeScript definitions
- **Examples**: Inline examples in documentation

### Writing Documentation

- Use VitePress markdown features
- Include code examples for all features
- Maintain bilingual versions
- Follow markdown linting rules

## Best Practices

### When Contributing

1. **Read existing code**: Understand patterns before adding new code
1. **Keep it minimal**: Framework should be lightweight and focused
1. **Test thoroughly**: Add tests for new features
1. **Document changes**: Update docs if behavior changes
1. **Follow conventions**: Match existing code style and structure

### Performance Considerations

- Framework is used in competitive programming (speed matters)
- Minimize bundle size for solutions
- Use efficient algorithms for file I/O
- Cache when possible (webpack builds, etc.)

### Error Handling

- Provide clear, actionable error messages
- Use `console.error()` for errors (via `bananass-utils-console`)
- Validate user input early (use Zod schemas)
- Fail fast with meaningful messages

### Backwards Compatibility

- Follow semantic versioning strictly
- Deprecate before removing features
- Maintain compatibility with supported Node.js versions
- Document breaking changes clearly

## Common Patterns to Use

### CLI Commands

```js
import { Command } from 'commander'
import { consoleLog } from 'bananass-utils-console'

export function createCommand() {
  return new Command('command-name')
    .description('Command description')
    .action(async () => {
      // Command implementation
      consoleLog.success('Success message')
    })
}
```

### Configuration Loading

```js
import { loadConfig } from '../core/conf/config-loader.js'

const config = await loadConfig(options)
```

### File System Operations

```js
import { readFile, writeFile } from '../core/fs/operations.js'

const content = await readFile(path)
await writeFile(path, content)
```

## Troubleshooting

### Common Issues

1. **Build failures**: Ensure TypeScript compiles without errors
1. **Test failures**: Check if tests are properly isolated
1. **Lint errors**: Run `npm run fix` to auto-fix
1. **Workspace issues**: Run `npm install` from root

### Debug Mode

- Use `DEBUG=bananass:*` environment variable for verbose logging
- Add `console.log()` statements temporarily for debugging
- Use Node.js debugger: `node --inspect`

## Additional Resources

- [Project Website](https://bananass.lumir.page)
- [Contributing Guide](../CONTRIBUTING.en.md)
- [Code of Conduct](https://github.com/lumirlumir/.github/blob/main/CODE_OF_CONDUCT.md)
- [npm Package](https://www.npmjs.com/package/bananass)
- [GitHub Repository](https://github.com/lumirlumir/npm-bananass)

---

**Note**: This instruction file is designed to help GitHub Copilot provide better code suggestions. When in doubt, refer to existing code patterns in the repository.
