# Bexy (formerly JSBox)

A secure JavaScript sandbox for safely executing untrusted code in isolated environments.

[![npm version](https://img.shields.io/npm/v/bexy.svg)](https://www.npmjs.com/package/bexy)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)

## PyLama Ecosystem Navigation

| Project | Description | Links |
|---------|-------------|-------|
| **Bexy** | JavaScript sandbox for executing code | [GitHub](https://github.com/py-lama/jsbexy) · [NPM](https://www.npmjs.com/package/bexy) · [Docs](https://py-lama.github.io/jsbexy/) |
| **GetLLM** | LLM model management and code generation | [GitHub](https://github.com/py-lama/getllm) · [PyPI](https://pypi.org/project/getllm/) · [Docs](https://py-lama.github.io/getllm/) |
| **DevLama** | Python code generation with Ollama | [GitHub](https://github.com/py-lama/devlama) · [Docs](https://py-lama.github.io/devlama/) |
| **LogLama** | Centralized logging and environment management | [GitHub](https://github.com/py-lama/loglama) · [PyPI](https://pypi.org/project/loglama/) · [Docs](https://py-lama.github.io/loglama/) |
| **APILama** | API service for code generation | [GitHub](https://github.com/py-lama/apilama) · [Docs](https://py-lama.github.io/apilama/) |
| **BEXY** | Sandbox for executing generated code | [GitHub](https://github.com/py-lama/bexy) · [Docs](https://py-lama.github.io/bexy/) |
| **JSLama** | JavaScript code generation | [GitHub](https://github.com/py-lama/jslama) · [NPM](https://www.npmjs.com/package/jslama) · [Docs](https://py-lama.github.io/jslama/) |
| **SheLLama** | Shell command generation | [GitHub](https://github.com/py-lama/shellama) · [PyPI](https://pypi.org/project/shellama/) · [Docs](https://py-lama.github.io/shellama/) |
| **WebLama** | Web application generation | [GitHub](https://github.com/py-lama/weblama) · [Docs](https://py-lama.github.io/weblama/) |

## Author

**Tom Sapletta** — DevOps Engineer & Systems Architect

- 💻 15+ years in DevOps, Software Development, and Systems Architecture
- 🏢 Founder & CEO at Telemonit (Portigen - edge computing power solutions)
- 🌍 Based in Germany | Open to remote collaboration
- 📚 Passionate about edge computing, hypermodularization, and automated SDLC

[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/tom-sapletta-com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://linkedin.com/in/tom-sapletta-com)
[![ORCID](https://img.shields.io/badge/ORCID-A6CE39?logo=orcid&logoColor=white)](https://orcid.org/0009-0000-6327-2810)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=about.me&logoColor=white)](https://www.digitname.com/)

## Support This Project

If you find this project useful, please consider supporting it:

- [GitHub Sponsors](https://github.com/sponsors/tom-sapletta-com)
- [Open Collective](https://opencollective.com/tom-sapletta-com)
- [PayPal](https://www.paypal.me/softreck/10.00)
- [Donate via Softreck](https://donate.softreck.dev)

## Installation

```bash
npm install bexy
```

## Quick Start

### Command Line Usage

```bash
# Run a JavaScript file in the sandbox
bexy run script.js

# Start an interactive REPL in the sandbox
bexy repl

# Show version
bexy --version
```

### Programmatic Usage

```javascript
const { executeInSandbox } = require('bexy');

// Execute code in a secure sandbox
const result = await executeInSandbox('1 + 1');
console.log(result); // 2
```

## Features

- Secure code execution in isolated environments
- Support for both synchronous and asynchronous code
- Configurable resource limits (CPU, memory, execution time)
- Built-in REPL for interactive development
- Support for CommonJS and ES modules
- TypeScript type definitions included

## Testing

To run tests for JSBox using the PyLama ecosystem:

```bash
cd ../../tests
./run_all_tests.sh
# or for a tolerant run
./run_all_tests_tolerant.sh
```

Or, from the jsbox directory:

```bash
make test
```

## Project Management

Common Makefile commands:

- `make install` – Install dependencies
- `make lint` – Lint code
- `make test` – Run tests
- `make build` – Build project
- `make clean` – Clean build/deps
- `make format` – Format code
- `make start` – Start project (if supported)

## Example: Creating a Safe JavaScript Sandbox

```js
const JSBox = require('jsbox');

const userCode = '2 + 2';
const result = JSBox.evaluate(userCode);
console.log(result); // 4
```

---

JSBox is a JavaScript sandbox for safely executing code in isolated environments. It is part of the PyLama ecosystem and integrates with LogLama as the primary service for centralized logging and environment management.