import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// Components
import Hamburger from './Hamburger'

// styles
import styles from '@/styles/Nav.module.scss'

const Header = () => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver()

	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false)
	const [menuClass, setMenuClass] = useState(styles.menuBtnClosed)
	const [hiddenMenuClass, setHiddenMenuClas] = useState(styles.hidden)

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styles.menuBtnOpen)
			setMenuOpen(true)
			setHiddenMenuClas('')
		} else {
			setMenuClass(styles.menuBtnClosed)
			setMenuOpen(false)
			setHiddenMenuClas(styles.hidden)
		}
	}

	const closeMenu = () => {
		setMenuClass(styles.menuBtnClosed)
		setMenuOpen(false)
		setHiddenMenuClas(styles.hidden)
	}

	return (
		<nav ref={targetRef}>
			<header
				className={isIntersecting ? styles.headerTop : styles.headerScroll}
			>
				<div className={styles.nav}>
					<Link href='/#hero' scroll={false} passHref>
						<Image
							src='logo.svg'
							width={166}
							height={50}
							alt='Parallel Logo'
							priority={true}
						/>
					</Link>

					<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

					<ul className={hiddenMenuClass}>
						<Link href='#' scroll={false} passHref>
							<li onClick={() => closeMenu()}>About Us</li>
						</Link>
						<Link href='#' scroll={false} passHref>
							<li onClick={() => closeMenu()}>Meet Our Team</li>
						</Link>
					</ul>
				</div>
			</header>
		</nav>
	)
}

export default Header
