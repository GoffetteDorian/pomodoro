/* becode/pomodoro
 *
 * /src/pomodoro.js - Pomodoro Component
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React, {useState} from "react";

import {Container, Row, Col, Card} from "react-bootstrap";

import Timer from "./timer";
import Controls from "./controls";

const defaultTimerValue = {
    work: 1800,
    break: 600,
};

const Pomodoro = () => {
    const [timerValue, setTimerValue] = useState(defaultTimerValue.work);

    const incTimerValue = () => {
        setTimerValue(timerValue + 60);
    };

    const decTimerValue = () => {
        setTimerValue(timerValue - 60);
    };

    const resetTimerValue = () => {
        setTimerValue(defaultTimerValue.work);
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
                            <Timer timerValue={timerValue} />
                        </Col>
                        <Col>
                            <Controls
                                incTimerValue={incTimerValue}
                                decTimerValue={decTimerValue}
                                resetTimerValue={resetTimerValue}
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
