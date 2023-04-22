import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from 'react-bootstrap/ListGroup';

function Status_Layout(color:string, title: String, expand: JSX.Element) {
    const [open, setOpen] = useState(false);
    return (
        <ListGroup.Item>
            <Container>
                    <Row>
                        <Col xs lg="1">
                            <div className={"mb-3"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="38px">
                                    <circle cx="16" cy="18" r="16" fill={color}/>
                                </svg>
                            </div>

                        </Col>
                        <Col md>
                            <div id="example-collapse-text">
                                <h2>{title}</h2>
                            </div>
                        </Col>
                        <Col xs lg="1">
                            <Button variant="secondary" onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                {Boolean(open) && <p>۸</p>}
                                {Boolean(!open) && <p>۷</p>}
                            </Button>
                        </Col>
                    </Row>

                    <Collapse in={open}>
                        <Row>
                            <Col md>
                                <div id="example-collapse-text">
                                    {expand}
                                </div>
                            </Col>
                        </Row>
                    </Collapse>
            </Container>
        </ListGroup.Item>
    );
}

export default Status_Layout;