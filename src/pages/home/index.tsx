import React from 'react';
import { Card, Container, Row, Col } from 'reactstrap';
import { useStore } from 'store';

export interface Props { }

const Home: React.FC<Props> = () => {

    const { state, dispatch } = useStore();
    console.log(state);
    return (
        <Container className="home">
            <Card>
                {state.drinks.map(drink => <Row style={{ padding: "0.5rem" }}>
                    <Col style={{ padding: "1rem" }} md="4">{drink.name}</Col>
                    <Col style={{ padding: "1rem" }}md="4">{drink.description}</Col>
                    <Col style={{ padding: "1rem" }} md="2">{drink.mg}</Col>
                    <Col style={{ padding: "1rem" }} md="1">
                        <div>
                            <input type="checkbox" />
                        </div>
                    </Col>
                </Row>)}
            </Card>
        </Container>
    )
}

export default Home
