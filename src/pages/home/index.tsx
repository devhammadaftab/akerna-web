import React from 'react';
import { Card, Container, Row, Col } from 'reactstrap';
import { useStore } from 'store';

export interface Props { }

const Home: React.FC<Props> = () => {

    const { state, dispatch } = useStore();

    return (
        <Container className="home">
            <Card>
                {state.drinks.map(drink => <Row>
                    <Col md="4">{drink.name}</Col>
                    <Col md="4">{drink.description}</Col>
                    <Col md="2">{drink.mg}</Col>
                    <Col md="2">
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
