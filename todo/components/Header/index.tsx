import styles from './header.module.scss';
export default function Header(props: any) {
	const headerProps = props;
	return (
		<header className={styles.header}>
			<button type='button' className={styles.header__logo}>Logo</button>

		</header>
	)
}