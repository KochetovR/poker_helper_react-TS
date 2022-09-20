import { createPortal } from 'react-dom';
import CloseButton from "../../../../components/CloseButton";

import s from './ResultPopup.module.scss';
import IMAGES from '../../../../data/imageResult/index';

interface Props {
    onClose(): void;
    srcImg: any;
};

const modalRoot: any= document.querySelector('#root-modal');

export default function ResultPopup({ onClose, srcImg }:Props) {
    
    const handleBackdropClick = (e:any) => {
        if (e.currentTarget === e.target) {
          onClose();
        }
    };
    // const srcResultImage = IMAGES[srcImg as keyof typeof IMAGES]
    return createPortal(
        <div className={s.popupBackdrop} onClick={handleBackdropClick}>
            <CloseButton callback={onClose} />
            {/* @ts-ignore */}
            <img src={IMAGES[srcImg]} alt="result" className={s.lightbox__image} />
        </div>,
        modalRoot,
    )
}