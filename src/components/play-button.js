/* becode/pomodoro
 *
 * /src/playButton.js - Play Button Component
 *
 * coded by Goffette Dorian
 * started on the 12/05/2020
 */

import React from "react";

import {Button} from "react-bootstrap";

const PlayButton = props => {
    const {running, startTimer} = props;
    if (!running) {
        return (
            <Button
                variant={"outline-success"}
                as={"input"}
                type={"button"}
                defaultValue={"Play"}
                onClick={startTimer}
            />
        );
    }
    return (
        <Button
            variant={"outline-warning"}
            as={"input"}
            type={"button"}
            defaultValue={"Pause"}
        />
    );
};

export default PlayButton;
