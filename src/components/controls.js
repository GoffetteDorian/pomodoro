/* becode/pomodoro
 *
 * /src/controls.js - Controls Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";

const Controls = props => {
    const {
        running,
        startTimer,
        pauseTimer,
        incTimerValue,
        decTimerValue,
        resetTimerValue,
        changeTimerKey,
        disableControls,
    } = props;

    const styles = {
        button: {
            position: "absolute",
            width: "80px",
            background: "#B7948F",
            border: "solid 2px #A85C51",
            color: "#A85C51",
        },
    };

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 10,
                width: "100%",
                height: "100%",
                textAlign: "center",
            }}>
            <Button
                style={{
                    ...styles.button,
                    top: "50%",
                    right: "15%",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"+"}
                onClick={incTimerValue}
                disabled={disableControls}
            />
            <Button
                style={{
                    ...styles.button,
                    bottom: "20%",
                    left: "47%",
                    width: "68px",
                }}
                onClick={!running ? startTimer : pauseTimer}>
                {!running ? <span>{"►"}</span> : <span>{"▌▌"}</span>}
            </Button>
            <Button
                style={{
                    ...styles.button,
                    top: "20%",
                    left: "22.5%",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"Reset"}
                onClick={resetTimerValue}
            />
            <Button
                style={{
                    ...styles.button,
                    top: "50%",
                    left: "15%",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"-"}
                onClick={decTimerValue}
                disabled={disableControls}
            />
            <Button
                style={{
                    ...styles.button,
                    top: "20%",
                    right: "22.5%",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"Mode"}
                onClick={changeTimerKey}
                disabled={disableControls}
            />
        </div>
    );
};

Controls.propTypes = {
    running: PropTypes.bool.isRequired,
    startTimer: PropTypes.func.isRequired,
    pauseTimer: PropTypes.func.isRequired,
    incTimerValue: PropTypes.func.isRequired,
    decTimerValue: PropTypes.func.isRequired,
    resetTimerValue: PropTypes.func.isRequired,
    changeTimerKey: PropTypes.func.isRequired,
    disableControls: PropTypes.bool,
};

export default Controls;
