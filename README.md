# Moonlight

[![Contributions](https://img.shields.io/badge/Contributions-welcome-blue.svg?style=flat-square)](./CODE_OF_CONDUCT.md)
[![GitHub contributors](https://img.shields.io/github/contributors/feelantera/moonlight?style=flat-square)](https://github.com/feelantera/moonlight/graphs/contributors)
[![License](https://img.shields.io/github/license/feelantera/moonlight?style=flat-square)][choosealicense]
[![GitHub Sponsors](https://img.shields.io/static/v1?color=26B643&label=Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat-square)](https://github.com/sponsors/feelantera)

<hr>

This repository contains skeleton project using [moonrepo](https://moonrepo.dev/) and popular JavaScript tooling.

```sh
degit feelantera/moonlight my-new-project
```

> Don't forget to replace `my-new-project` with your project name.

## Quick Start

This repo configured with ESLint, Jest, Prettier, TypeScript, and Tailwind CSS as moon tasks.

To begin, we suggest installing moon globally, read the documentation [here](https://moonrepo.dev/docs/install).

Once installed, run the following commands for common tasks:

- `moon check --all` - Run _all_ tasks (below).
- `moon run :build` - Build all projects.
- `moon run :lint` - Lint code in all projects.
- `moon run :test` - Run tests in all projects.
- `moon run :format` - Format code in all projects.
- `moon run :typecheck` - Type check code in all projects.

Tasks can also be focused to individual projects. The list of projects can be found in `.moon/workspace.yml`.

- `moon check <project>`
- `moon run <project>:<task>`
- `moon run <project>:dev` - For applications, starts the development server.

### Generate Package

This command used for generate package from template:

```sh
moon generate next-app ./apps/website -- --name '@myorg/website' --private
```

## Contributing

Thank you for considering contributing to this project! If you wish to help, you can learn more about how you can contribute to this project
starting by sending us a message via email to: [contact@feel.co.id][contactmailto].

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
[contactmailto]: mailto:contact@feel.co.id

---

<sub>🤫 Psst! If you like our work you can support us via [GitHub sponsors](https://github.com/sponsors/feelantera).
