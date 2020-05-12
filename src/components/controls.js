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
    } = props;

    return (
        <div className={"btn-group-vertical"}>
            <Button
                variant={"success"}
                as={"input"}
                type={"button"}
                defaultValue={"+"}
                onClick={incTimerValue}
            />
            <Button
                variant={!running ? "outline-success" : "outline-warning"}
                onClick={!running ? startTimer : pauseTimer}>
                {!running ? "Play" : "Pause"}
            </Button>
            <Button
                variant={"outline-warning"}
                as={"input"}
                type={"button"}
                defaultValue={"Reset"}
                onClick={resetTimerValue}
            />
            <Button
                variant={"danger"}
                as={"input"}
                type={"button"}
                defaultValue={"-"}
                onClick={decTimerValue}
            />
            <Button
                variant={"secondary"}
                as={"input"}
                type={"button"}
                defaultValue={"mode"}
                onClick={changeTimerKey}
            />
        </div>
    );
};

export default Controls;
