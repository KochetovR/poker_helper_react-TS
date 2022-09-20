import { useState, useEffect } from 'react'

import s from './BvbAction.module.scss';

interface Props {
    chooseAction(e:string): void;
    action: string;
    bvbAction: string | null;
};

export default function BvbAction({ action, chooseAction, bvbAction }:Props) {
    const [active, setActive] = useState(false);

    const actionClass = action.replace(' ', '_')

    useEffect(() => {
        if (bvbAction === actionClass) {
            setActive(true)
            return
        }
        setActive(false)
    },[bvbAction, actionClass])

    

    const handleClickOnAction = () => {
        setActive(!active)
        chooseAction(actionClass)
    }

    
    return (
        <button
            type="button"
            onClick={handleClickOnAction}
            className={`${s.actionButton} ${s[actionClass]} ${active ? s.active : ''}`}
        >{action}</button>
    )
};