"use client";
import React, { useEffect, useState } from 'react';
import { Container, Table, Form, Button, Row, Col } from 'react-bootstrap';
import { useSession } from "next-auth/react";
import { FaTimes } from 'react-icons/fa';

export const ProfileScreen = () => {

  return (
    <Container>
      <Row>
      <Col md={3}>
        <h2>User Profile</h2>

        {/* <Form onSubmit={submitHandler}> */}
        <Form>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              // value={confirmPassword}
              // onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
          {/* {loadingUpdateProfile && <Loader />} */}
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
          <Table striped hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

                <tr id>
                  <td>id</td>
                  <td>order.createdAt</td>
                  <td>order.totalPrice</td>
                  <td>
                    order.isPaid
                      <FaTimes style={{ color: 'red' }} />

                  </td>
                  <td>

                      <FaTimes style={{ color: 'red' }} />

                  </td>
                  <td>
                    {/* <LinkContainer to={`/order/${order._id}`}> */}

                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>

                  </td>
                </tr>

            </tbody>
          </Table>

      </Col>
      </Row>
    </Container>

  );


};
