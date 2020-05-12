/* becode/pomodoro
 *
 * /src/app.js - main entry point
 *
 * coded by Goffette Dorian
 * started on the 11/05/2020
 */

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import RootComponent from "./components/root";
import Pomodoro from "./components/pomodoro";

ReactDOM.render(<Pomodoro />, document.querySelector("#app"));
