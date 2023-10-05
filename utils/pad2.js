
function pad2(num) {
	const n = parseInt(num, 10);
	return (n < 10)
		? `0${n}`
		: `${n}`;
}

export default pad2;
