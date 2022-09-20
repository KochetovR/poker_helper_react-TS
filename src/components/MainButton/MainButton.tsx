
import s from './MainButton.module.scss';

interface Props {
    text: string;
    onClick(): void;
    width?: number;
    height?: number;
    fontSize?: number;
    disabled?: boolean;

};

export default function MainButton({ text, onClick, width, height, fontSize, disabled }:Props) {

    return (
        <button
            disabled={disabled}
            type='button'
            onClick={onClick}
            className={`${s.button} ${disabled ? `${s.disabled}` : ''}`}
            style={{width: width, height: height, fontSize: fontSize}}
        >{text}</button>
    )
}