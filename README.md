# ⌨️ Homepage for the Finnish Mechanical Keyboarc Community (FMKC) - fmkc.fi

The purpose of this site is to host information about the Finnish Mechanical Keyboard Community and be a open-source archive for the community. It'll at least contain information about past and upcoming events, but could also host other information eg. about community projects or perhaps guides, maybe even a list of resources/products that are more targeted towards the Finnish community.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── discord/
│   │   │   ├── meetups/
│   │   │   ├── projects/
│   │   │   ├── ...
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

For future reference, this site was originally created with Node v23, so if you are doing changes to the lockfile, please use that or any later version.

## 👀 Want to contribute?

Editing content is as simple as editing the `.mdx` files in `src/content/docs/`, and if you want to create new pages, just create new `.mdx` files in the same directory. Please use the other pages and example-pages as reference. We are accepting PRs and issues on a low treshold. If you have any ideas on how to improve the site, feel free to open an issue or a PR!

## 🏆 Contributors

- [OlliGranlund](https://olli.works)
- [winskil](https://github.com/winskil)
- [wivim](https://github.com/wivim)
- And maybe you? 👀 A successfull PR gives you a spot here!
