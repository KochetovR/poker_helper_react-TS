import { useEffect, useState } from "react";

import TitleChoosePosition from "./TitleChoosePosition";
import PositionButton from "./PositionButton";
import RoleSelectButton from "./RoleSelectButton";
import BvbAction from "./BvbAction";
import StackSizeInput from "./StackSizeInput";
import MainButton from "../../../components/MainButton";
import CloseButton from "../../../components/CloseButton";
import ResultPopup from "./ResultPopup";

import tableData from '../../../data/tableButtons.json';
import situationsItemData from '../../../data/situationsItemData.json';

import s from './Table.module.scss';

interface Props {
    onClose(): void;
    situationIndex: number;
    rotateCloseButton: boolean;
    refa: any;
};

const initialStackSize = (index:number) => situationsItemData[index].stack[0];
const initialHeroPosition = (index: number) => index === 3 ? 'bb' : null;
const initialActiveRole = (index: number) => index === 3 ? 'better' : "hero"


const Table = ({ onClose, situationIndex, rotateCloseButton, refa }:Props) => {
    const [srcImg, setSrcImg]: any | string = useState('');
    const [activeRole, setActiveRole] = useState(() => initialActiveRole(situationIndex));
    const [heroPosition, setHeroPosition] = useState(() => initialHeroPosition(situationIndex));
    const [betterPosition, setBetterPosition] = useState(null);
    const [callerPosition, setCallerPosition] = useState(null);
    const [bvbAction, setBvbAction] = useState(null);
    const [stackSize, setStackSize] = useState(() => initialStackSize(situationIndex));
    const [disabledCalculateButton, setDisabledCalculateButton] = useState(true)
    const [isResultModalOpen, setIsResultModalOpen] = useState(false);

    const typeSituation = situationsItemData[situationIndex].type;

    useEffect(() => {
        if (!srcImg) {
            return
        }
        const validSrcImg: string = srcImg.includes('null')
        validSrcImg ? setDisabledCalculateButton(true) : setDisabledCalculateButton(false)
    }, [srcImg])

    useEffect(() => {
        if (!heroPosition) {
            setBvbAction(null)
        }
    }, [heroPosition])

    useEffect(() => {
        switch (typeSituation) {
            case 'bb':
                setSrcImg(`${typeSituation}_${stackSize}_${betterPosition}`);
                break;
            case 'vs3bet':
                setSrcImg(`${typeSituation}_${stackSize}_${heroPosition}_${betterPosition}`);
                break;
            case 'vsOpen':
                setSrcImg(`${typeSituation}_${stackSize}_${heroPosition}_${betterPosition}`);
                break;
            case 'sqz':
                setSrcImg(`${typeSituation}_${stackSize}_${heroPosition}_${betterPosition}_${callerPosition}`);
                break;
            case 'bvb':
                setSrcImg(`${typeSituation}_${stackSize}_${heroPosition}_${bvbAction}`);
                break;
            
            default: return setSrcImg(`${typeSituation}_${stackSize}_${heroPosition}`);
        }
    }, [typeSituation, stackSize, srcImg, heroPosition, betterPosition, callerPosition, bvbAction]);

    const clickSelectPosition = (position:any) => {
        switch (activeRole) { 
            case 'hero':
                setHeroPosition(position)
                break;
            case 'better':
                setBetterPosition(position)
                break;
            case 'caller':
                setCallerPosition(position)
                break;
            default: return;
        }
    };

    const handleChangeRole = (role:string) => {
        setActiveRole(role)
    };

    const changeBvbAction = (action:any) => {
        setBvbAction(action)
    }

    const changeStackSize = (e: any) => {
        setStackSize(e)
    };

    const isClickCalculate = () => {
        setIsResultModalOpen(true)
    };
    
    const isCloseResultModal = () => {
        setIsResultModalOpen(false)
        setSrcImg(null)
    };
    
    interface BvB_action {
    title: string;
    description: string;
    type: string;
    stack: string[];
    players: string[];
    BB_action?: any;
    SB_action?: any;
    }

    const stack = situationsItemData[situationIndex].stack;
    const players = situationsItemData[situationIndex].players;
    const bvb_action:BvB_action  = situationsItemData[situationIndex]
    return (
        <div ref={refa} className={s.tableWrapper}>
            <CloseButton callback={onClose} rotateButton={rotateCloseButton} />

            <TitleChoosePosition activeRole={activeRole} />

            <div className={s.table}>
                <div className={s.borderTable}></div>
                {tableData.map(({ position, top, left, disabled, autoActive }) => (
                    <PositionButton
                        key={position}
                        position={position}
                        top={top}
                        left={left}
                        disabled={disabled}
                        autoActive={autoActive}
                        type={typeSituation}
                        clickSelectPosition={clickSelectPosition}
                        activeRole={activeRole}
                        heroPosition={heroPosition}
                        betterPosition={betterPosition}
                        callerPosition={callerPosition}
                    />
                ))}
                
                <div className={s.roleButtonsWrapper}>
                    {players.map(player => (
                        <RoleSelectButton key={player} role={player} onClick={handleChangeRole} activeRole={activeRole} />
                    ))}
                </div>
                {typeSituation === 'bvb' && heroPosition === 'bb' && <div className={s.actionWrapper}>
                    {bvb_action.BB_action.map((action:any) => (
                        <BvbAction key={action} bvbAction={bvbAction} action={action} chooseAction={changeBvbAction} />
                        ))}
                </div>}
                {typeSituation === 'bvb' && heroPosition === 'sb' && <div className={s.actionWrapper}>
                    {bvb_action.SB_action.map((action:any) => (
                        <BvbAction key={action} bvbAction={bvbAction} action={action} chooseAction={changeBvbAction} />
                        ))}
                </div>}
            </div>

            <StackSizeInput stack={stack} changeStack={changeStackSize} />

            <MainButton text="Calculate" width={200} height={50} fontSize={16} onClick={isClickCalculate} disabled={disabledCalculateButton} />
            
            {isResultModalOpen && (
                <ResultPopup onClose={isCloseResultModal} srcImg={srcImg} />
            )}
        </div>
    )
};

export default Table;