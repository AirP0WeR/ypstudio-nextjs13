'use client'


import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

export default function Page() {
  return (
    <Container>
      <Row>
      <Col md={8}>
        <h1>Корзина</h1>

            Корзина пуста

      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Подитог
                вещей
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
              >
                Заказать
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      </Row>
    </Container>

  );
}
