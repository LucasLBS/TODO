import RoundedButton from '../RoundedButton';
import styles from './header.module.scss';
export default function Header(props: any) {
	const headerProps = props;
	return (
		<header className={styles.header}>
			<RoundedButton></RoundedButton>
		</header>
	)
}