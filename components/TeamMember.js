import Image from 'next/image'
import Link from 'next/link'

// styles
import styles from '@/styles/Team.module.scss'

const TeamMember = props => {
	return (
		<div className={styles.member}>
			<div className={styles.memberPhoto}>
				<Image
					src={props.photo}
					fill={true}
					sizes='17.25rem'
					style={{ objectFit: 'contain' }}
					alt='Team member photo'
					loading='lazy'
					priority={false}
				/>
			</div>
			<div>
				<h4>{props.name}</h4>
				<p>{props.title}</p>
				<br />
				<p>Tel : {props.tel}</p>
				<p>{props.mail}</p>
				<br />
				<Link href={`/${props.name.toLowerCase()}`}>
					<p>Read Bio</p>
				</Link>
			</div>
		</div>
	)
}

export default TeamMember
