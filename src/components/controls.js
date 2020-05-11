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
    const {incTimerValue, decTimerValue, resetTimerValue} = props;
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
                variant={"outline-success"}
                as={"input"}
                type={"button"}
                defaultValue={"Play"}
            />
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
        </div>
    );
};

export default Controls;
