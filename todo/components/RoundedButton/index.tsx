import Image from 'next/image';
import React from 'react';
import Badge from '../Badge';
import styles from './rounded-button.module.scss';
export default function RoundedButton(props: any) {
	return (

		<button className={styles.notificationButton}>
			<Badge></Badge>
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