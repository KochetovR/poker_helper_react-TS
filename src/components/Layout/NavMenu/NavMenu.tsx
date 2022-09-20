import { NavLink } from "react-router-dom";
import CloseButton from "../../CloseButton";

import navMenuItem from '../../../data/navMenuItem.json';
import s from './NavMenu.module.scss';

interface Props {
    onClose(): void;
    rotateCloseButton: boolean;
    refa: any
}

const style = {marginBottom: 30, fontSize: 28, fontFamily: 'Bevan', border: 'none', outline: 'none', background: 'none'}

const NavMenu = ({ onClose, rotateCloseButton, refa }:Props) => {
    
    return (
        <nav ref={refa} className={`${s.nav}`}>
            {navMenuItem.map(({text, to}, index) => (
                <NavLink
                    key={text}
                    to={to}
                    onClick={onClose}
                    style={index === 2 ? { ...style, marginBottom: 0 } : style}
                    className={({isActive}) => isActive ? s.active : ''}
                >{text }</NavLink>
            ))}
            <CloseButton callback={onClose} rotateButton={rotateCloseButton}/>
        </nav>
    )
}

export default NavMenu;