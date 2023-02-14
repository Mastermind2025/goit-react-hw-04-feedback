import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


const FeedbackOptions = ({options, onLeaveFeedback}) => {
    
    return (
        <ul className={css.Feedback__container}>
            {options.map(option => (
                <li key={option} className={css.Feedback__item}>
                    <button
                        type="button"
                        name={option}
                        className={css.Feedback__button}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    )  
  
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}