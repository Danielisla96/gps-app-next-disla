export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "WavesByte",
	description: "WavesByte Website",
	navItems: [
	{
	  label: "Home",
	  href: "/",
	},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "MapId",
      href: "/map_id",
    },
    {
      label: "Register",
      href: "/register",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "MapId",
			href: "/map_id",
		},
		{
			label: "Register",
			href: "/register",
		}
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
