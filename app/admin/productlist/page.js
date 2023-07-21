'use client'
import { Table, Button, Row, Col, Container } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';


export default function Page() {
  return (
    <Container>
      <Row className='align-items-center'>
        <Col>
          <h1>Товары</h1>
        </Col>
        <Col className='text-end'>
          <Button className='my-3'>
            <FaPlus /> Создать товар
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>product._id</td>
            <td>product.name</td>
            <td>$product.price</td>
            <td>product.category</td>
            <td>product.brand</td>
            <td>
              <Container>
                <Button variant='light' className='btn-sm mx-2'>
                  <FaEdit />
                </Button>
              </Container>
              <Button
                variant='danger'
                className='btn-sm'
              >
                <FaTrash />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}