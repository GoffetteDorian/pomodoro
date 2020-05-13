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

const radius = 250;

// const circleStyle = {
//     width: radius * 2,
//     height: radius * 2,
//     backgroundColor: "grey",
//     borderRadius: radius,
// };

// const halfCircle1Style = {
//     width: radius,
//     height: radius * 2,
//     backgroundColor: "red",
//     borderRadius: radius,
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//     transform: `rotate(-10deg)`,
//     transformOrigin: "100%",
// };
// const halfCircle2Style = {
//     position: "absolute",

//     width: radius,
//     height: radius * 2,
//     backgroundColor: "blue",
//     borderRadius: radius,
//     borderTopLeftRadius: 0,
//     borderBottomLeftRadius: 0,
//     transform: `rotate(50deg)`,
//     transformOrigin: "100%",
// };

// const timerStyle = {
//     position: "relative",
// };

const styles = {
    wrap: {
        width: radius * 2,
        height: radius * 2,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "yellow",
        borderRadius: radius,
        overflow: "hidden",
    },
    filler: {
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        top: 0,
        left: 0,
    },
    circle: {
        position: "absolute",
        left: radius * 0.1,
        top: radius * 0.1,
        width: radius * 1.8,
        height: radius * 1.8,
        borderRadius: radius / 0.9,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    timer: {
        fontSize: "50px",
        color: "black",
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

    const percentage = (fulltime, left) => (left / fulltime) * 100;

    return (
        <div style={styles.wrap}>
            <div
                style={{
                    ...styles.filler,
                    zIndex: 1,
                    backgroundColor: "blue",
                    transform: `translateY(${
                        100 - percentage(fullValue, timerValue)
                    }%)`,
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
};

export default Timer;
