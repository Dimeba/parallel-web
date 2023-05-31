import Image from 'next/image'
import Link from 'next/link'

// styles
import styles from '@/styles/Hero.module.scss'

const Hero = () => {
	return (
		<section id='hero' className={`${'containerCenter '}` + styles.hero}>
			<h1>
				We are <span>aligned with our clients</span> every step of the way
			</h1>

			<button className='button-blue'>Get In Touch</button>

			<p>
				Parallel CRE is an in-house commercial real estate debt advisory firm,
				focused on providing each client with a catered experience to achieve{' '}
				<span>COMPETITIVE FINANCING</span> for the <span>LOWEST COST</span>
			</p>

			<Link href='#' scroll={false} passHref>
				<Image
					src='arrow-down.svg'
					width={60}
					height={60}
					alt='Parallel Logo'
					priority={true}
				/>
			</Link>
		</section>
	)
}

export default Hero
