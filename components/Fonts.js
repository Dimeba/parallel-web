import { PT_Sans } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

export const ptSans = PT_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap'
})
export const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap'
})
