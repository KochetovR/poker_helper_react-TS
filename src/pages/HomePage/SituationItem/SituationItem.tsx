import s from './SituationItem.module.scss'

interface Props {
    title: string;
    isClickOnTable(index:number): void;
    isClickInfoModal(index:number): void;
    index: number;
}

function SituationItem({ title, isClickOnTable, isClickInfoModal, index }:Props) {
    return (
        <div className={s.buttonWrapper}>
            <button
                type='button'
                className={s.accentWrapper}
                onClick={() => isClickOnTable(index)}
            >
                <span className={s.title}>{title}</span>
            </button>
            <button
                type='button'
                className={s.questionButton}
                onClick={() => isClickInfoModal(index)}
            >
                <span className={s.question}>?</span>
            </button>
        </div>
    )
}

export default SituationItem;