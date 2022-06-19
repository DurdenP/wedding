import React from 'react';
import {
  Row,
} from 'reactstrap';

import Countdown from "../Component/Countdown";

export default function Profile(props) {
  return (
    <Row className="mt-3 mb-5" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Countdown />
    </Row>
  );
}
