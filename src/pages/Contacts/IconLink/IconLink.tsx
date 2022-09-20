import s from './IconLink.module.scss';

interface Props {
    link: string;
    Icon: any;
}

export default function IconLink({link, Icon}:Props) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={s.link}
        >
            <Icon size={'60%'} color={'#ffffff'} />
        </a>
    )
}