import Image from 'next/image'
import Link from 'next/link'

// styles
import styles from '@/styles/Hero.module.scss'

const ComingSoon = () => {
	return (
		<section id='hero' className={`${'containerCenter '}` + styles.hero}>
			<Image
				src='logo.svg'
				width={249}
				height={75}
				alt='Parallel Logo'
				priority={true}
			/>
			<h1>Coming Soon</h1>
			<Link href='mailto:info@parallelcre.com'>
				<button className='button-blue'>Get In Touch</button>
			</Link>
		</section>
	)
}

export default ComingSoon
