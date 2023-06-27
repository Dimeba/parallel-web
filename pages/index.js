import Head from 'next/head'

// components
import Layout from '@/components/Layout'

// sections
import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Transactions from '@/components/Transactions'

export default function Home() {
	return (
		<>
			<Head>
				<title>Parallel CRE</title>
				<meta
					name='description'
					content='Parallel CRE is an in-house commercial real estate debt advisory firm, focused on providing each client with a catered experience to achieve COMPETITIVE FINANCING for the LOWEST COST'
				/>
				<meta
					name='keywords'
					content='Real Estate, Capital Services, New York City, Competitive Financing, In-house Service, Lowest Cost, Large lender network, Experienced advisors, Financing focus, No commissions'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.svg' />
			</Head>

			<Hero />
			<About />
			{/* <Transactions /> */}
			{/* <Team /> */}
		</>
	)
}
