import { createPortal } from 'react-dom';
import MainButton from '../../../components/MainButton';

import s from './InfoPopup.module.scss';

interface Props {
    onClose(): void;
    description: string;
}

const modalRoot: any  = document.querySelector('#root-modal');

const InfoPopup = ({ onClose, description }:Props) => {
    const handleBackdropClick = (e:any) => {
        if (e.currentTarget === e.target) {
          onClose();
        }
    };
    return createPortal(
        <div className={s.popupBackdrop} onClick={handleBackdropClick}>
            <div className={s.popupContent}>
                <p className={s.description}>{description}</p>
                <MainButton onClick={onClose} text='Good' />
            </div>
        </div>,
        modalRoot,
    )
}

export default InfoPopup;