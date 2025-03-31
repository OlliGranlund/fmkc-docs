// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
	site: 'https://olligranlund.github.io',
	base: '/fmkc-docs',
	integrations: [
		starlight({
			title: 'FMKC',
			customCss: [
				'./src/style.css',
			],
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			plugins: [
				catppuccin(),
			],
			sidebar: [
				{
					label: 'Meetups',
					autogenerate: { directory: 'meetups' }
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					]
				},
			],
		}),
	],
});
