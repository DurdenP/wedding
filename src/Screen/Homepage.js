import React from 'react';

import {Container} from "reactstrap";
import Screen from "./index";
import config from "../config";
export default function Homepage() {
    return (
        <Container className="app">
            <Screen.Header config={config} />
            <Screen.Profile config={config} />
            <Screen.Gallery config={config} />
            <Screen.Place config={config} />
            <Screen.Church config={config} />
            <Screen.Comment config={config} />
        </Container>
    )
}
