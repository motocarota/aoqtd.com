import {Anchor} from '@mantine/core';
import style from '../styles/Footer.module.css';

const Footer = () => (
	<div className={style.footer}>
		<small>Copyright ©2003-2023 <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>Simone Poggi</Anchor><br/>All Rights Reserved</small>
	</div>
);

export default Footer;
