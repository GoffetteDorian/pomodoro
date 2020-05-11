/* becode/pomodoro
 *
 * /src/timer.js - Timer Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React from "react";
import PropTypes from "prop-types";

// import {Row, Col} from "react-bootstrap";

const Timer = props => {
    const {timerValue} = props;

    const doubleDigit = value => (value < 10 ? "0" : "") + value;
    const format = time => {
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = Math.floor(time % 60);
        return `${doubleDigit(h)}:${doubleDigit(m)}:${doubleDigit(s)}`;
    };
    return <div>{format(timerValue)}</div>;
};

Timer.propTypes = {
    timerValue: PropTypes.number.isRequired,
};

export default Timer;
