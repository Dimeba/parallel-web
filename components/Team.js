import Image from 'next/image'
import Link from 'next/link'

// components
import TeamMember from './TeamMember'
import { teamMembersList } from './TeamMembersList'

// styles
import styles from '@/styles/Team.module.scss'

const Team = () => {
	return (
		<section id='team' className={`${'containerCenter '}` + styles.team}>
			<h2>Meet Our Team</h2>
			<div className={styles.members}>
				{teamMembersList.map((member, index) => (
					<TeamMember
						key={index}
						name={member.name}
						title={member.title}
						tel={member.tel}
						mail={member.mail}
						photo={member.photo}
					/>
				))}
			</div>
		</section>
	)
}

export default Team
