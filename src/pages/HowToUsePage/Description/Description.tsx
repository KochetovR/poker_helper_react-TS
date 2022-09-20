import { GiCheckMark } from 'react-icons/gi';
import PropTypes from "prop-types";

import s from './Description.module.scss';

interface Props {
    title: string;
    description: string;
}

const Description = ({ title, description }:Props) => {
    return (
        <>
            <p className={s.title}>
                <GiCheckMark color='#ffffff' size={18} />
                <b>{title}</b>
            </p>
            <p className={s.description}>{ description}</p>
        </>
    )
}

Description.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Description;