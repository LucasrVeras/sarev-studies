import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';


export default function Stopwatch(){
	return(
		<div className={style.cronometro}>
			<p className={style.titulo}>Choose a card and start the timer</p>
			<div className={style.relogioWrapper}>
				<Clock />
			</div>
			<Button>
				Start!
			</Button>
		</div>
	);
}