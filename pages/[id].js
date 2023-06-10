import { useRouter } from 'next/router'
import { teamMembersList } from '../components/TeamMembersList'
import Image from 'next/image'

// styles
import styles from '@/styles/Team.module.scss'

const TeamMember = () => {
	const router = useRouter()
	const { id } = router.query

	const member = teamMembersList.find(member => member.id === id)

	if (!id) {
		return <div>Loading...</div>
	}

	if (!member) {
		return <div>Not found</div>
	}

	return (
		<section
			id='team-member'
			className={`${'containerCenter '}` + styles.teamMember}
		>
			<div className={styles.memberPhoto}>
				<Image
					src={member.photo}
					fill={true}
					style={{ objectFit: 'contain' }}
					alt='Team member photo'
					loading='lazy'
				/>
			</div>
			<div className={styles.bio}>
				<h3>{member.name}</h3>
				<p>{member.title}</p>
				<br />
				<p>{member.bio}</p>
				<div>
					<br />
					<p>Tel : {member.tel}</p>
					<p>{member.mail}</p>
					<br />
				</div>
			</div>
		</section>
	)
}

export default TeamMember
