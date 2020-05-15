/* becode/pomodoro
 *
 * /src/timer.js - Timer Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React from "react";
import PropTypes from "prop-types";

const radius = 300;

const styles = {
    wrap: {
        width: radius * 2,
        height: radius * 2,
        position: "relative",
        top: 0,
        left: 0,
        background: "#8C726D",

        borderRadius: radius,
        border: "2px solid #A85C51",
        overflow: "hidden",
    },
    filler: {
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: "#B7948F",
    },
    circle: {
        position: "absolute",
        left: radius * 0.1,
        top: radius * 0.1,
        width: radius * 1.8,
        height: radius * 1.8,
        borderRadius: radius / 0.9,
        border: "2px solid #A85C51",
        backgroundColor: "#284169",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    timer: {
        fontSize: "50px",
        color: "#A85C51",
    },
};

const Timer = props => {
    const {timerValue, fullValue} = props;

    const doubleDigit = value => (value < 10 ? "0" : "") + value;
    const format = time => {
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = Math.floor(time % 60);
        return `${doubleDigit(h)}:${doubleDigit(m)}:${doubleDigit(s)}`;
    };

    const percentage = (fulltime, left) => 100 - (left / fulltime) * 100;

    return (
        <div style={styles.wrap}>
            <div
                style={{
                    ...styles.filler,

                    transform: `translateY(${percentage(
                        fullValue,
                        timerValue,
                    )}%)`,
                }}
            />
            <div style={{...styles.circle}}>
                <div style={{...styles.timer}}>{format(timerValue)}</div>
            </div>
        </div>
    );
};

Timer.propTypes = {
    timerValue: PropTypes.number.isRequired,
    fullValue: PropTypes.number.isRequired,
};

export default Timer;
