import s from './Title.module.scss';

interface Props {
    title: string;
}

const Title = ({ title }:Props)  => <p className={s.title}>{ title}</p> 

export default Title;