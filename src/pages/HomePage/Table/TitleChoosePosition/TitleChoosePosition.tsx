import s from './TitleChoosePosition.module.scss';
interface Props {
    activeRole: string
};
export default function TitleChoosePosition({ activeRole }:Props) {
    return (
        <>
            {activeRole === 'hero' && (<p className={s.title}>Choose youre position</p>)}

            {activeRole === 'better' && (<p className={s.title}>Choose better position</p>)}

            {activeRole === 'caller' && (<p className={s.title}>Choose caller position</p>)}
        </>
    )
}