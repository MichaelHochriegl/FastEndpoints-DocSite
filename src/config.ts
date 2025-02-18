import type { NavbarConfig } from '@svelteness/kit-docs';

type Contributor = {
	name: string;
	username: string;
	image: string;
	website?: string;
};

type Config = {
	siteUrl: string;
	seo: {
		title: string;
		description: string;
		keywords: string[];
	};
	contributors: Contributor[];
	openGraph: {
		title: string;
		url: string;
		siteName: string;
		type: string;
		description: string;
		locale: string;
	};
	github: string;
	discord: string;
	algolia: {
		apiKey: string;
		appId: string;
	};
};

export const config = Object.freeze<Config>({
	siteUrl: 'https://fast-endpoints.com/',
	seo: {
		title: 'FastEndpoints',
		description:
			'A light-weight REST Api framework for ASP.Net 6 that implements REPR (Request-Endpoint-Response) Pattern.',
		keywords: ['fastendpoints', '.net', '.net6', 'csharp', 'dotnet', 'web', 'backend']
	},
	openGraph: {
		title: 'FastEndpoints',
		url: 'https://fast-endpoints.com',
		siteName: 'FastEndpoints',
		type: 'website',
		description:
			'A light-weight REST Api framework for ASP.Net 6 that implements REPR (Request-Endpoint-Response) Pattern',
		locale: 'en'
	},
	contributors: [],
	github: 'https://github.com/dj-nitehawk/FastEndpoints',
	discord: 'https://discord.com/invite/yQZ4uvfF2E',
	algolia: {
		apiKey: '599cec31baffa4868cae4e79f180729b',
		appId: 'R2IYF7ETH7'
	}
});

// Navigation
export const navbar: NavbarConfig = {
	links: [
		{ title: 'Documentation', slug: '/docs', match: /\/docs/ },
		{ title: 'Benchmarks', slug: '/benchmarks', match: /\/benchmarks/ },
		{
			title: 'Tutorial',
			slug: 'https://dev.to/djnitehawk/building-rest-apis-in-net-6-the-easy-way-3h0d'
		},
		{
			title: 'API Reference',
			slug: 'http://api-ref.fast-endpoints.com'
		},
		{ title: 'Donate', slug: 'https://www.paypal.com/donate/?hosted_button_id=AU3SCQX9FXYCS' }
	]
};
