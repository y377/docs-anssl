// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.anssl.cn',
	// base: '/doc/',

	integrations: [
		starlight({
			title: 'anssl',
			lastUpdated: true,

			logo: {
				src: './src/assets/logo.png',
			},
			favicon: '/favicon.ico',

			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: {
					label: 'English',
					lang: 'en-US',
				},
			},

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/https-cert/website' }],
			sidebar: [
				{
					label: '入门',
					translations: { 'en-US': 'Getting Started' },
					items: [
						{
							label: '概览',
							translations: { 'en-US': 'Overview' },
							slug: 'starteds/overview',
						},
						{
							label: '快速开始',
							translations: { 'en-US': 'Quickstart' },
							slug: 'starteds/started',
						},
						{
							label: '证书基础知识',
							translations: { 'en-US': 'Certificate Basics' },
							slug: 'starteds/certificate-basics',
						},
					],
				},
				{
					label: '指南',
					translations: { 'en-US': 'Guides' },
					items: [
						{
							label: '仪表板',
							translations: { 'en-US': 'Dashboard' },
							slug: 'guides/dashboard',
						},
						{
							label: '证书管理',
							translations: { 'en-US': 'Certificate Management' },
							slug: 'guides/certificate-management',
						},
						{
							label: '域名监控',
							translations: { 'en-US': 'Domain Monitoring' },
							slug: 'guides/monitor',
						},
						{
							label: '自动部署',
							translations: { 'en-US': 'Automated Deployment' },
							slug: 'guides/deploy',
						},
						{
							label: '本地证书',
							translations: { 'en-US': 'Self-signed Certificates' },
							items: [
								{
									label: 'CA 根证书使用说明',
									translations: { 'en-US': 'CA Root Certificate Guide' },
									slug: 'guides/selfcert/ca',
								},
								{
									label: '证书生成',
									translations: { 'en-US': 'Certificate Generation' },
									slug: 'guides/selfcert/cert',
								},
							],
						},
						{
							label: '设置',
							translations: { 'en-US': 'Settings' },
							items: [
								{
									label: '个人资料设置',
									translations: { 'en-US': 'Profile Settings' },
									slug: 'guides/settings/profile',
								},
								{
									label: '通知设置',
									translations: { 'en-US': 'Notification Settings' },
									slug: 'guides/settings/notification',
								},
							],
						},
						{
							label: '工具',
							translations: { 'en-US': 'Tools' },
							items: [
								{
									label: 'WHOIS 查询',
									translations: { 'en-US': 'WHOIS Lookup' },
									slug: 'guides/tools/whois',
								},
								{
									label: 'CSR 生成',
									translations: { 'en-US': 'CSR Generator' },
									slug: 'guides/tools/csr',
								},
								{
									label: 'DNS 查询',
									translations: { 'en-US': 'DNS Query' },
									slug: 'guides/tools/dns-query',
								},
								{
									label: '证书转换',
									translations: { 'en-US': 'Certificate Converter' },
									slug: 'guides/tools/cert-convert',
								},
								{
									label: 'SSL/TLS 证书检查',
									translations: { 'en-US': 'SSL/TLS Certificate Check' },
									slug: 'guides/tools/ssl-check',
								},
							]
						},
					],
				},
				{
					label: 'FAQ',
					translations: { 'en-US': 'FAQ' },
					items: [
						{
							label: '常见问题',
							translations: { 'en-US': 'Frequently Asked Questions' },
							slug: 'faq/faq',
						},
					],
				},
			],
		}),
	],

	devToolbar: { enabled: false },
});
