import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradients-grey":
					"linear-gradient(133deg, rgba(218, 221, 226, 0.80) 0%, rgba(218, 221, 226, 0.60) 100%)",
				"gradients-white":
					" linear-gradient(142deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.40) 100%)",
			},
    },
  },
  plugins: [],
}
export default config
