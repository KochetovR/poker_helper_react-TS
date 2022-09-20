import { useEffect, useState } from "react";

import s from './PositionButton.module.scss';

interface Props {
  position: string;
  top: number;
  left: number;
  type: string;
  autoActive: string | any;
  activeRole: string;
  disabled: any;
  clickSelectPosition(x: any): void;
  heroPosition: string | null;
  betterPosition: string | null;
    callerPosition: string | null;
};

const initialWhoClickInMeState = (active:string, type:string) => active === type ? 'hero' : null;
const initialActiveState = (active:string, type:string) => active === type ? true : false;

export default function PositionButton({position, top, left, type, autoActive, activeRole, disabled, clickSelectPosition, heroPosition, betterPosition, callerPosition}:Props) {
  const [whoClickInMe, setWhoClickInMe] = useState(() => initialWhoClickInMeState(autoActive,type));
  const [active, setActive] = useState(() => initialActiveState(autoActive, type));
  const [disabledButton, setDisabledButton] = useState(false)
  
  useEffect(() => {
    switch (activeRole) {
      case 'hero':
        if (whoClickInMe && heroPosition && position !== heroPosition && whoClickInMe === activeRole) {
          setWhoClickInMe(null)
          setActive(false)
        }
        break
      case 'better':
        if (whoClickInMe && betterPosition && position !== betterPosition && whoClickInMe === activeRole) {
          setWhoClickInMe(null)
          setActive(false)
        }
        break
      case 'caller':
        if (whoClickInMe && callerPosition && position !== callerPosition && whoClickInMe === activeRole) {
          setWhoClickInMe(null)
          setActive(false)
        }
        break
      default: return;
    }
  }, [whoClickInMe, heroPosition, position, activeRole, betterPosition, callerPosition])

  useEffect(() => {
      if (disabled[type]?.[activeRole]) {
        return setDisabledButton(disabled[type][activeRole])
    }
    
    if (disabled[type]?.hasOwnProperty('activeHero') && activeRole === 'better' && disabled[type].activeHero[activeRole].includes(heroPosition)) {
      return setDisabledButton(true)
    }
    if (disabled[type]?.hasOwnProperty('activeHero') && activeRole === 'caller' && disabled[type].activeHero[activeRole]?.includes(heroPosition)) {
      return setDisabledButton(true)
    }
    if (disabled[type]?.hasOwnProperty('activeBetter') && activeRole === 'caller' && disabled[type].activeBetter[activeRole]?.includes(betterPosition)) {
      return setDisabledButton(true)
    }
    return setDisabledButton(false)
  },[disabled, type, activeRole, heroPosition, position, betterPosition])

  const isHandleClickInME = () => {
    if (whoClickInMe && whoClickInMe !== activeRole) {
      return
    }
    setActive(!active)

    if (whoClickInMe) {
      setWhoClickInMe(null)
      clickSelectPosition(null)
      return
    }
    clickSelectPosition(position)
    setWhoClickInMe(activeRole)
  }

  return (
    <button
      type="button"
      onClick={isHandleClickInME}
      disabled={disabledButton}
      className={`${s.positionButton} ${whoClickInMe ? `${s[whoClickInMe]}` : ''} ${active ? s.active : ''}  ${ disabledButton && !whoClickInMe ? `${s.disabled}` : ''}`}
      style={{top: top, left: left}}
    >{position.toUpperCase()}</button>
  )
}
