// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
	site: 'https://fmkc.fi',
	base: '',
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
					label: 'Discord',
					slug: 'discord'
				},
				{
					label: 'Meetups',
					autogenerate: { directory: 'meetups' }
				},
				{
					label: 'Projects',
					collapsed: true,
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'Guides',
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					]
				},
			],
			components: {
				Head: './src/components/CustomHead.astro',
			},
		}),
	],
});
