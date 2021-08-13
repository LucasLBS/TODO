import classNames from 'classnames/bind';
import Styles from './badge.module.scss';
let cx = classNames.bind(Styles);
export default function Badge(props: any) {
	const { count, type } = props;
	const badgeClass = cx({ 'badge': true, 'tdCerto': true });
	return (
		// <div className={Styles.badge}>{count}</div>

		<div className={badgeClass}>9+</div>
	)
}