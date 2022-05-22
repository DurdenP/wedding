import React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  Row,
  Col,
} from 'reactstrap';

export default function Gallery(props) {
  const { image } = props.config;
  return (
      <div>
          <Row className="mb-5">
              <Col>
                  <h4>Foto</h4>
              </Col>
          </Row>
          <Row className="mb-5">
              <Col>
                  <ImageGallery items={image.gallery} />
              </Col>
          </Row>
      </div>

  );
}
