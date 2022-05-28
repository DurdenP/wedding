import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import AvenueMap from "../Component/ChurchMap";

export default function Avenue(props) {
  const {
    name
  } = props.config.wedding.place;
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
                <AvenueMap />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

  );
}
