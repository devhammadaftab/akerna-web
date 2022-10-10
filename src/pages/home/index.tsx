import React from 'react';
import { Card, Container, Row, Col, CardHeader } from 'reactstrap';
import { useStore } from 'store';
import { setConsumedDrink, setInTaken } from 'store/actions';

export interface Props { }

const Home: React.FC<Props> = () => {

    const { state, dispatch } = useStore();

    const onDrink = (id: number, mg: number) => {
        dispatch(setConsumedDrink(id));
        dispatch(setInTaken(mg));
    }

    return (
        <Container className="home">
            <Card>
                <CardHeader>
                    <Row>
                        <Col md="10"></Col>
                        <Col md="2">{state.intaken}</Col>
                    </Row>
                </CardHeader>
                {state.drinks.map(drink => {
                    let limitReached = state.user.caffieneLimit && (state.user.caffieneLimit <= (state.intaken + drink.mg));
                    return <Row style={{ padding: "0.5rem" }}>
                        <Col style={{ padding: "1rem" }} md="4">{drink.name}</Col>
                        <Col style={{ padding: "1rem" }} md="4">{drink.description}</Col>
                        <Col style={{ padding: "1rem" }} md="2">{drink.mg}</Col>
                        <Col style={{ padding: "1rem" }} md="1">
                            <div>
                                <input disabled={limitReached || drink.consumed} onClick={() => onDrink(drink.id, drink.mg)} type="checkbox" />
                            </div>
                        </Col>
                    </Row>
                })}
            </Card>
        </Container>
    )
}

export default Home
