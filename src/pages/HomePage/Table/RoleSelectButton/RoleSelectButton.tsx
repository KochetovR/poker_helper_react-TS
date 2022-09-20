import { useEffect, useState } from "react";

import s from './RoleSelectButton.module.scss';


interface Props {
    onClick(e:string): void;
    role: string;
    activeRole: string;
}

const initialActiveState = (role:string) => role === 'hero' ? true : false;

export default function RoleSelectButton({ onClick, role, activeRole }:Props) {
    const [active, setActive] = useState(initialActiveState(role));

    useEffect(() => {
        if (role === activeRole) {
            setActive(true)
            return
        }
        setActive(false)
    },[activeRole, role])

    const handleClick = () => {
        onClick(role)
    }
    
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${s.button} ${s[role]} ${active ? s.active : ''}`}
        >
            {role}
        </button>
    )
}
