'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

const Home = () => {
	const {push} = useRouter();

	useEffect(() => {
		push('/en');
	}, []);
	return <p>loading...</p>;
};

export default Home;
