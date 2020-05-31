import React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';//css for reactstrap

import { Row, Col, Card, Button } from 'antd';
import 'antd/dist/antd.css';//css for antd

function Orders() {

  return (
    <Row>
        <Col span={22} offset={2}>
            <Row justify="space-between">

                <Col span={7}>
                    <h4 style={{textAlign:'center'}}>Commandes Non Payer</h4>
                    <Card title="Commande RT54gd (Hamed)" bordered={false} style={{backgroundColor:'#fffbe6', marginBottom:'5%'}}>
                        <p>Sur place</p>
                        <p>Total : 24.99€</p>
                        <p>Details de la commande :</p>
                        <ListGroup>
                            <ListGroupItem>Cheese Burger</ListGroupItem>
                            <ListGroupItem>
                                <p>Menu Double cheese</p>
                                <p>Coca-cola Zero</p>
                                <p>Mayonnaise</p>
                            </ListGroupItem>
                            <ListGroupItem>Signature Burger</ListGroupItem>
                        </ListGroup>
                        <Button type="link" block style={{backgroundColor:'#06d6a0', color:'white', marginTop:'5%'}}>Payer</Button>
                    </Card>
                    <Card title="Commande RT54gd (Hamed)" bordered={false} style={{backgroundColor:'#fffbe6', marginBottom:'5%'}}>
                        <p>Sur place</p>
                        <p>Total : 24.99€</p>
                        <p>Details de la commande :</p>
                        <ListGroup>
                            <ListGroupItem>Cheese Burger</ListGroupItem>
                            <ListGroupItem>Signature Burger</ListGroupItem>
                        </ListGroup>
                        <Button type="link" block style={{backgroundColor:'#06d6a0', color:'white', marginTop:'5%'}}>Payer</Button>
                    </Card>
                </Col>

                <Col span={7}>
                    <h4 style={{textAlign:'center'}}>Commandes Payer</h4>
                    <Card title="Commande RT54gd (Hamed)" bordered={false} style={{backgroundColor:'#f6ffed', marginBottom:'5%'}}>
                    <p>Sur place</p>
                        <p>Total : 24.99€</p>
                        <p>Details de la commande :</p>
                        <ListGroup>
                            <ListGroupItem>
                                <p>Menu Double cheese</p>
                                <p>Coca-cola Zero</p>
                                <p>Mayonnaise</p>
                            </ListGroupItem>
                        </ListGroup>
                        <Button type="link" block style={{backgroundColor:'#06d6a0', color:'white', marginTop:'5%'}}>Prete</Button>
                    </Card>
                </Col>

                <Col span={7}>
                    <h4 style={{textAlign:'center'}}>Commandes Pretes</h4>
                    <Card title="Commande RT54gd (Hamed)" bordered={false} style={{backgroundColor:'#e6f7ff', marginBottom:'5%'}}>
                    <p>Sur place</p>
                        <p>Total : 24.99€</p>
                        <p>Details de la commande :</p>
                        <ListGroup>
                            <ListGroupItem>
                                <p>Menu Double cheese</p>
                                <p>Coca-cola Zero</p>
                                <p>Mayonnaise</p>
                            </ListGroupItem>
                            <ListGroupItem>Signature Burger</ListGroupItem>
                        </ListGroup>
                        <Button type="link" block style={{backgroundColor:'#06d6a0', color:'white', marginTop:'5%'}}>Livré</Button>
                    </Card>
                    <Card title="Commande RT54gd (Hamed)" bordered={false} style={{backgroundColor:'#e6f7ff', marginBottom:'5%'}}>
                    <p>Sur place</p>
                        <p>Total : 24.99€</p>
                        <p>Details de la commande :</p>
                        <ListGroup>
                            <ListGroupItem>Cheese Burger</ListGroupItem>
                            <ListGroupItem>Signature Burger</ListGroupItem>
                        </ListGroup>
                        <Button type="link" block style={{backgroundColor:'#06d6a0', color:'white', marginTop:'5%'}}>Livré</Button>
                    </Card>
                </Col>

            </Row>
        </Col>
    </Row>
  );
}

export default Orders;
