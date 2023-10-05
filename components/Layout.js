import Top from './Top';
import Footer from './Footer';
import style from '@/styles/Layout.module.css';

export default function Layout({children}) {
	return (
		<div className={style.app_content}>
			<Top />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
