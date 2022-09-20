// @ts-ignore
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import Title from "../../components/Title";
import Description from "./Description";

import s from './HowToUsePage.module.scss';

import situationsItemData from '../../data/situationsItemData.json'

const subTitle:string = 'This application will tell you how to play in a certain situation. First, choose a situation that interests you. Then, indicate your seat at the table. If necessary, indicate the positions of the opponents one by one. Select your stack and click "calculate". You will see a heatmap with hands marked in different colors and legends about what those colors mean.'

const HowToUsePage = () => {
    return (
        <>
            <Title title="How to use" />
            <div className={s.descriptionBlock}>
                <p className={s.subTitle}>{ subTitle}</p>
                {situationsItemData.map(({ title, description }) => (
                    <Description key={title} title={title} description={ description}/>
                ))}
            </div>
            <ScrollUpButton
                EasingType="linear"
                StopPosition={10}
                ShowAtPosition={50}
                style={{zIndex: 20, border: '3px solid #918252', background: 'transparent', fill: 'rgba(219, 175, 61, 0.8) '}}
            />
        </>
        
    )
}

export default HowToUsePage;