// // /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   distDir: 'build',
//   images: {
// 	domains: ["http://localhost:1337"],
//   },
// }

module.exports = {
	reactStrictMode: true,
	distDir: 'build',
	images: {
	  domains: ["localhost:1337"],
	  unoptimized: true
	},
	env: {
    	BX24: process.env.BX24
  	},

	async redirects() {
		return [
		  {
			source: '/redirect-okb',
			destination: 'https://bki-okb.ru/',
			permanent: true
		  },
		  {
			source: '/redirect-nbki',
			destination: 'https://nbki.ru/',
			permanent: true
		  }
		];
	  }
  }
