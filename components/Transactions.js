import Image from 'next/image'

// components
import Transaction from './Transaction'

// styles
import styles from '@/styles/Transactions.module.scss'

const Transactions = () => {
	return (
		<section id='transactions' className={styles.transactions}>
			<div className='containerCenter'>
				<h2>Featured Transactions</h2>
			</div>

			<div className={styles.transactionsContainer}>
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
				<Transaction />
			</div>
		</section>
	)
}

export default Transactions
