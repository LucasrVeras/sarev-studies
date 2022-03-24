import style from './Clock.module.scss';

export default function Clock() {
	return(
		<>
			<span className={style.numberClock}>0</span>
			<span className={style.numberClock}>0</span>
			<span className={style.watchDivision}>:</span>
			<span className={style.numberClock}>0</span>
			<span className={style.numberClock}>0</span>
		</>
	);
}