// Font
import { ptSans } from './Fonts'

// Components
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<main className={ptSans.className}>
			<Nav />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
