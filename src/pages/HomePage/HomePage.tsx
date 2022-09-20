import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import SituationItem from './SituationItem';
import InfoPopup from './InfoPopup';
import Title from '../../components/Title';
import Table from './Table';

import situationsItemData from '../../data/situationsItemData.json'

import s from './HomePage.module.scss'

const HomePage = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [descriptionInfo, setDescriptionInfo] = useState('');
    const [openTable, setOpenTable] = useState(false);
    const [situationIndex, setSituationIndex] = useState(0)
    const [rotateCloseButton, setRotateCloseButton] = useState(false);

    const nodeRef = useRef(null)

    const isClickInfoModal = (index:any) => {
        setIsInfoModalOpen(true)
        setDescriptionInfo(situationsItemData[index].description)
    }
    const isCloseInfoModal = () => {
        setIsInfoModalOpen(false)
        setDescriptionInfo('')
    }
    const isClickOnTable = (index:any) => {
        setOpenTable(true);
        setRotateCloseButton(false);
        setSituationIndex(index)
    }
    const isCloseTable = () => {
        setOpenTable(false);
        setRotateCloseButton(true);
    }
    return (
        <div className={s.container}>
            <Title title='Choose a situation'/>
            
            <div
                className={s.itemsWrapper}>
                {situationsItemData.map( ({title, type}, index) => (
                    <SituationItem
                        key={title}
                        title={title}
                        // type={type}
                        isClickOnTable={isClickOnTable}
                        isClickInfoModal={isClickInfoModal}
                        index={index}
                    />
                    )
                )}
            </div>

            <CSSTransition
                nodeRef={nodeRef}
                in={openTable}
                timeout={500}
                classNames={{
                    enterActive: `${s.visible}`,
                    enterDone: `${s.visible}`,
                    exitActive: `${s.hidden}`,
                }}
                mountOnEnter
                unmountOnExit
            >
                <Table refa={nodeRef} onClose={isCloseTable} rotateCloseButton={rotateCloseButton} situationIndex={situationIndex}/>
            </CSSTransition>

            {isInfoModalOpen && (
                <InfoPopup onClose={isCloseInfoModal} description={descriptionInfo }/>
            )}
        </div>
    )
}

export default HomePage;