import preloader from '../../../assets/images/preloader1.png';
import s from './Preloader.module.css';

const Preloader = props => {
	return (<div className={s.preloaderBox}>
		<img src={preloader} className={s.preloaderImg} />
	</div>);
};

export default Preloader;