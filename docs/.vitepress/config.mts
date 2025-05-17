import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Use VS Code",
	description: "Use VS Code.",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Guide", link: "/guide/introduction/what-is-use-vscode" },
		],

		sidebar: [
			{
				text: "Introduction",
				items: [
					{
						text: "What is Use VS Code ?",
						link: "/guide/introduction/what-is-use-vscode",
					},
					{
						text: "Getting Started",
						link: "/guide/introduction/getting-started",
					},
				],
			},
			{
				text: "Languages",
				collapsed: false,
				items: [
					{
						text: "Node.js",
						link: "/guide/languages/nodejs",
					},
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/gugustinette/use-vscode" },
		],
	},
});
