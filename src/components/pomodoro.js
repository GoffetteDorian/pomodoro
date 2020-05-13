/* becode/pomodoro
 *
 * /src/pomodoro.js - Pomodoro Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React, {useState, useEffect} from "react";

import {Container, Row, Col, Card} from "react-bootstrap";

import Timer from "./timer";
import Controls from "./controls";

let timerInterval = null;
let disableControls = false;
const defaultIncrementValue = 60;
const defaultTimerValue = {
    work: 10,
    break: 600,
};

const Pomodoro = () => {
    const [timerValue, setTimerValue] = useState(defaultTimerValue);
    const [timerKey, setTimerKey] = useState("work");
    const [running, isRunning] = useState(false);

    const startTimer = () => {
        disableControls = true;
        isRunning(true);
    };

    const pauseTimer = () => {
        disableControls = false;
        isRunning(false);
    };

    useEffect(() => {
        console.log(timerValue);

        const countdown = () => {
            setTimerValue(timer => {
                const alteredTimer = {...timer};
                if (alteredTimer[timerKey] === 0) {
                    pauseTimer();
                    return defaultTimerValue;
                }
                alteredTimer[timerKey] -= 1;
                return alteredTimer;
            });
            console.log(timerInterval);
        };
        if (running && timerInterval === null) {
            timerInterval = setInterval(countdown, 1000);
        } else if (!running) {
            clearInterval(timerInterval);
            console.log(timerInterval);
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
        setTimerValue(defaultTimerValue);
    };

    const changeTimerKey = () => {
        setTimerKey(timerKey === "work" ? "break" : "work");
    };

    return (
        <Container className={"my-3"}>
            {/* <Row>
                <Col> */}
            <Card>
                <Card.Header>
                    <Card.Title>{"Timer"}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Timer timerValue={timerValue[timerKey]} />
                        </Col>
                        <Col>
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
                        </Col>
                    </Row>
                </Card.Body>
                {/* <Card.Footer></Card.Footer> */}
            </Card>
            {/* </Col>
            </Row>*/}
        </Container>
    );
};

export default Pomodoro;
