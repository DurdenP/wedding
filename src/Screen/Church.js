import React from 'react';
import {
  Row, Col,
} from 'reactstrap';

import { ChurchMap } from '../Component';

export default function Church(props) {
  const {
    name,
  } = props.config.wedding.church;
  return (
      <div>
        <Row>
          <Col>
            <Row className="pt-3">
              <Col>
                <h3>{name}</h3>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col>
                <ChurchMap />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

  );
}
