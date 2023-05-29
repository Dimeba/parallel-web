import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// styles
import styles from '@/styles/Nav.module.scss'

const Header = () => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver()

	return (
		<nav ref={targetRef}>
			<header
				className={isIntersecting ? styles.headerTop : styles.headerScroll}
			>
				<div className={styles.nav}>
					<Link href='#' scroll={false} passHref>
						<Image src='logo.svg' width={166} height={50} alt='Parallel Logo' />
					</Link>

					<ul>
						<Link href='#' scroll={false} passHref>
							<li>About Us</li>
						</Link>
						<Link href='#' scroll={false} passHref>
							<li>Meet Our Team</li>
						</Link>
					</ul>
				</div>
			</header>
		</nav>
	)
}

export default Header
