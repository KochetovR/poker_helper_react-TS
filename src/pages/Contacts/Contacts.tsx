import { MdPhoneInTalk } from 'react-icons/md';
import { SiLinkedin, SiGmail } from 'react-icons/si';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import Title from '../../components/Title';
import IconLink from './IconLink';

import s from './Contacts.module.scss';

const linksData  = [
    {
        link: "https://www.linkedin.com/in/roman-kochetov-98a8721b9/",
        Icon: SiLinkedin
    },
    {
        link: "https://github.com/KochetovR",
        Icon: FaGithubSquare
    },
    {
        link: "https://www.instagram.com/roman.kochetov.10/",
        Icon: BsInstagram
    },
    {
        link: "https://www.facebook.com/roman.kochetov.10",
        Icon: BsFacebook
    },
    {
        link: "mailto:k04erg0@gmail.com",
        Icon: SiGmail
    },
    {
        link: "tel:+380663716961",
        Icon: MdPhoneInTalk
    }
];

const Contacts = () => {
    return (
        <>
            <Title title='Contacts' />
            
            <div className={s.linksBlock}>
                {linksData.map(({ link, Icon }) => (
                    <IconLink key={link} link={link} Icon={Icon} />
                ))}
            </div>
        </>
    )
}

export default Contacts;