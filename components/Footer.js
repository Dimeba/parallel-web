import Image from 'next/image'
import Link from 'next/link'

// styles
import styles from '@/styles/Footer.module.scss'
import { ptSansBold } from './Fonts'

const Footer = () => {
	return (
		<footer id={styles.footer} className='containerCenter'>
			<div className={styles.contactInfo}>
				<p>
					inforallelcre.com
					<br /> (917) 626-3406
					<br />
					<br /> 48 West 37th Street, 18th Floor
					<br /> New York, NY 10018
				</p>

				<Link href='/#hero' scroll={false} passHref>
					<Image
						src='symbol.svg'
						width={80}
						height={87}
						alt='Parallel Logo'
						priority={true}
					/>
				</Link>
			</div>
			<div className={styles.links}>
				<ul className={styles.menu}>
					<Link href='#' scroll={false} passHref>
						<li>About Us</li>
					</Link>
					<Link href='#' scroll={false} passHref>
						<li>Meet Our Team</li>
					</Link>
				</ul>

				<ul>
					<Link href='#' scroll={false} passHref>
						<li>Privacy Policy</li>
					</Link>
					<Link href='#' scroll={false} passHref>
						<li>Terms of Use</li>
					</Link>
					<li>Parallel CRE © Copyright 2023</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
