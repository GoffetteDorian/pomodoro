/* becode/pomodoro
 *
 * /src/pomodoro.js - Pomodoro Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React, {useState, useEffect} from "react";

import {Container, Row, Card, Modal, Button} from "react-bootstrap";

import Timer from "./timer";
import Controls from "./controls";

let timerInterval = null;
let disableControls = false;
const defaultIncrementValue = 60;
const defaultTimerValue = {
    work: 1800,
    break: 600,
};

let savedTimerSettings = defaultTimerValue;

const Pomodoro = () => {
    const [timerValue, setTimerValue] = useState(defaultTimerValue);
    const [timerKey, setTimerKey] = useState("work");
    const [running, isRunning] = useState(false);
    const [modal, setModal] = useState(false);

    const startTimer = () => {
        disableControls = true;
        savedTimerSettings = timerValue;
        isRunning(true);
    };

    const pauseTimer = () => {
        disableControls = false;
        isRunning(false);
    };

    useEffect(() => {
        const countdown = () => {
            setTimerValue(timer => {
                const alteredTimer = {...timer};
                if (alteredTimer[timerKey] === 0) {
                    pauseTimer();
                    setModal(true);
                    return savedTimerSettings;
                }
                alteredTimer[timerKey] -= 1;
                return alteredTimer;
            });
        };
        if (running && timerInterval === null) {
            timerInterval = setInterval(countdown, 1000);
        } else if (!running) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, [timerValue, running]);

    const incTimerValue = () => {
        setTimerValue(timer => {
            const alteredTimer = {...timer};
            if (alteredTimer[timerKey] + defaultIncrementValue >= 86400) {
                alteredTimer[timerKey] = 0;
            }
            alteredTimer[timerKey] += defaultIncrementValue;
            return alteredTimer;
        });
    };

    const decTimerValue = () => {
        setTimerValue(timer => {
            const alteredTimer = {...timer};
            if (alteredTimer[timerKey] - defaultIncrementValue <= 0) {
                alteredTimer[timerKey] = 86400;
            }
            alteredTimer[timerKey] -= defaultIncrementValue;
            return alteredTimer;
        });
    };

    const resetTimerValue = () => {
        setTimerValue(savedTimerSettings);
    };

    const changeTimerKey = () => {
        setTimerKey(timerKey === "work" ? "break" : "work");
    };

    const onClose = () => {
        setModal(false);
        changeTimerKey();
    };

    return (
        <Container className={"my-3"}>
            <Modal show={modal} onClose={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {timerKey === "work"
                            ? "Work is done :)"
                            : "Break is done :)"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {timerKey === "work"
                        ? "Take a break!"
                        : "Get back to work!"}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"success"} onClick={onClose}>
                        {"Close"}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Card
                style={{
                    background: "#284169",
                    color: "#284169",
                    border: "none",
                }}>
                <Card.Header style={{background: "#4068A8", width: "100%"}}>
                    <Card.Title>
                        {timerKey === "work" ? "Work" : "Break"}
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row style={{display: "flex", justifyContent: "center"}}>
                        <Timer
                            timerValue={timerValue[timerKey]}
                            fullValue={savedTimerSettings[timerKey]}
                        />
                    </Row>
                    <Row>
                        <Controls
                            running={running}
                            startTimer={startTimer}
                            pauseTimer={pauseTimer}
                            incTimerValue={incTimerValue}
                            decTimerValue={decTimerValue}
                            resetTimerValue={resetTimerValue}
                            changeTimerKey={changeTimerKey}
                            disableControls={disableControls}
                        />
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Pomodoro;
