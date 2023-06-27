import Image from 'next/image'

// Font
import { ptSans } from './Fonts'

// Components
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<main className={ptSans.className}>
			<div className='background-symbol'>
				<Image
					src='symbol-background.svg'
					fill={true}
					style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.7 }}
					alt='background image'
				/>
			</div>
			<div className='blue-background'></div>
			{/* <Nav /> */}
			{children}
			{/* <Footer /> */}
		</main>
	)
}

export default Layout
