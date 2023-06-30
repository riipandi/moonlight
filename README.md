# Moonlight

[![Contributions](https://img.shields.io/badge/Contributions-welcome-blue.svg?style=flat-square)](./CODE_OF_CONDUCT.md)
[![GitHub contributors](https://img.shields.io/github/contributors/riipandi/moonlight?style=flat-square)](https://github.com/riipandi/moonlight/graphs/contributors)
[![License](https://img.shields.io/github/license/riipandi/moonlight?style=flat-square)][choosealicense]
[![GitHub Sponsors](https://img.shields.io/static/v1?color=26B643&label=Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat-square)](https://github.com/sponsors/riipandi)

<hr>

This repository contains skeleton project using [moonrepo](https://moonrepo.dev/) and popular JavaScript tooling.

## Quick Start

This repo configured with ESLint, Jest, Prettier, TypeScript, and Tailwind CSS as moon tasks.
To begin, we suggest installing moon globally, read the documentation [here](https://moonrepo.dev/docs/install).
Then, follow these steps:

1. Clone this repository: `npx degit riipandi/moonlight my-new-project`
2. Install required toolchain: `moon setup`

Don't forget to replace `my-new-project` with your project name.

### Moon commands

Once installed, run the following commands for common tasks:

| Command                     | Description                      |
| --------------------------- | -------------------------------- |
| `moon check --all`          | Run all tasks                    |
| `moon run :build`           | Build all projects               |
| `moon run :lint`            | Lint code in all projects        |
| `moon run :test`            | Run tests in all projects        |
| `moon run :format`          | Format code in all projects      |
| `moon run :typecheck`       | Type check code in all projects  |
| `moon run <project>:<task>` | Run specific task by project     |
| `moon check <project>`      | Run check for individual project |

Refer to the [moon tasks documentation](https://moonrepo.dev/docs/run-task) for more details.

### Generate Package

This command used for generate package from template:

```sh
moon generate next-app ./apps/website -- --name '@myorg/website' --private
```

## Contributing

Thank you for considering contributing to this project! If you wish to help, you can learn more about how you can contribute to this project
starting by sending us a message via email to: [aris@duck.com][contactmailto].

## Thanks to...

In general, we'd like to thank every single one who open-sources their source code for their effort to contribute
something to the open-source community. Your work means the world! 🌍 ❤️

## Useful Links

- [Moonrepo documentation](https://moonrepo.dev/docs)
- [Moonrepo examples repo](https://github.com/moonrepo/examples)

## License

This project is open-sourced software licensed under the [MIT][choosealicense].

Copyrights in this project are retained by their contributors.

See the [license file](./LICENSE) for more information.

[choosealicense]: https://choosealicense.com/licenses/mit/
[contactmailto]: mailto:aris@duck.com

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).
