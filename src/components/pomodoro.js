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

const defaultIncrementValue = 60;
const defaultTimerValue = {
    work: 1800,
    break: 600,
};

const Pomodoro = () => {
    const [timerValue, setTimerValue] = useState(defaultTimerValue);
    const [timerKey, setTimerKey] = useState("work");

    useEffect(() => {
        console.log(timerValue);
    }, [timerValue]);

    const startTimer = () => {
        console.log("start");
    };

    const incTimerValue = () => {
        setTimerValue(timer => {
            const alteredTimer = {...timer};
            // const key = Object.keys(alteredTimer)[timerKey];
            alteredTimer[timerKey] += defaultIncrementValue;
            return alteredTimer;
        });
    };

    const decTimerValue = () => {
        setTimerValue(timer => {
            const alteredTimer = {...timer};
            // const key = Object.keys(alteredTimer)[timerKey];
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
                                running={false}
                                startTimer={startTimer}
                                incTimerValue={incTimerValue}
                                decTimerValue={decTimerValue}
                                resetTimerValue={resetTimerValue}
                                changeTimerKey={changeTimerKey}
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
