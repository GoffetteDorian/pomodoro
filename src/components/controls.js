/* becode/pomodoro
 *
 * /src/controls.js - Controls Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React from "react";

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
                    position: "absolute",
                    top: "50%",
                    right: "15%",
                    width: "80px",
                    background: "#4068A8",
                    border: "none",
                    color: "#284169",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"+"}
                onClick={incTimerValue}
                disabled={disableControls}
            />
            <Button
                style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "47%",
                    width: "68px",
                    border: "solid 2px #4068A8",
                    color: "#4068A8",
                }}
                variant={"outline"}
                onClick={!running ? startTimer : pauseTimer}>
                {!running ? <span>{"►"}</span> : <span>{"▌▌"}</span>}
            </Button>
            <Button
                style={{
                    position: "absolute",
                    top: "20%",
                    left: "22.5%",
                    width: "80px",
                    background: "#4068A8",
                    border: "none",
                    color: "#284169",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"Reset"}
                onClick={resetTimerValue}
            />
            <Button
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "15%",
                    width: "80px",
                    background: "#4068A8",
                    border: "none",
                    color: "#284169",
                }}
                as={"input"}
                type={"button"}
                defaultValue={"-"}
                onClick={decTimerValue}
                disabled={disableControls}
            />
            <Button
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "22.5%",
                    width: "80px",
                    background: "#4068A8",
                    border: "none",
                    color: "#284169",
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

export default Controls;
