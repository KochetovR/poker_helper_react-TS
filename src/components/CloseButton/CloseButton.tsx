import { CgClose } from 'react-icons/cg';
import s from './CloseButton.module.scss';

interface Props {
    callback(): void;
    rotateButton?: boolean;
}

export default function CloseButton({callback, rotateButton}:Props) {
    return (
        <button
        type="button"
        className={`${s.closeButton} ${rotateButton ? `${s.rotateButton}` : ''}`}
        onClick={callback}
        >
            <CgClose size='50' color='#fff'/>
        </button>
    )
}