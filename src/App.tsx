import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Form} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

import MyNavbar from "./components/navbar";
import Status_Layout from "./components/status_layout"
import Container from "react-bootstrap/Container";


function App() {
    return (
        <div className="App">
            <Form>
                <MyNavbar/>
                <Container>
                    <Card className={"mb-5"}>
                        <ListGroup>
                            {Status_Layout("red", "abc", <p>fsdyxgcvhjk</p>)}
                            {Status_Layout("red", "abc", <p>fsdyxgcvhjk</p>)}
                            {Status_Layout("red", "abc", <p>fsdyxgcvhjk</p>)}
                            {Status_Layout("green", "abc", <p>fsdyxgcvhjk</p>)}
                            {Status_Layout("red", "abc", <p>fsdyxgcvhjk</p>)}
                            {Status_Layout("red", "abc", <p>fsdyxgcvhjk</p>)}

                        </ListGroup>
                    </Card>
                </Container>
            </Form>
        </div>
    );
}

export default App;
