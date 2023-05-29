// Font
import { ptSans } from './Fonts'

// Components
import Nav from './Nav'

const Layout = ({ children }) => {
	return (
		<main className={ptSans.className}>
			<Nav />
			{children}
		</main>
	)
}

export default Layout
