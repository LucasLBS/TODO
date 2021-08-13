import Image from 'next/image';
import styles from './rounded-button.module.scss';
export default function RoundedButton(props: any) {
	return (

		<button className={styles.notificationButton}>
			<Image
				src='/notification.svg'
				alt='Botão de notificação.'
				height={25}
				width={25}
				objectFit='cover'
			>
			</Image>
		</button>

	)
}