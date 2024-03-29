"use client";
import { NavDropdown, Button } from 'react-bootstrap';
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { deleteProduct } from '@/components/serverComponents/deleteProduct'
// import { addProduct } from '@/components/serverComponents/addProduct'
import { React, useTransition, useState } from 'react'
import logHelper from '@/utils/logHelper';
import { deleteUser } from "@/components/serverComponents/deleteUser"
import {addToCartTest} from '@/utils/cartUtils';

export const AuthButton = () => {
  return (
    <Button onClick={() => signIn()}>Войти</Button>
  );
};

export const AuthAdminButton = () => {
  return (
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="/profile">Профиль</NavDropdown.Item>
    <NavDropdown.Item href="/admin/productlist">Товары</NavDropdown.Item>
    <NavDropdown.Item href="/admin/orderlist">Заказы</NavDropdown.Item>
    <NavDropdown.Item href="/admin/userlist">Пользователи</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item onClick={() => signOut()}>
    Выйти
    </NavDropdown.Item>
  </NavDropdown>
  );
};

export const UserButton = () => {
  return (
    <NavDropdown title="Имя пользователя + фото" id="basic-nav-dropdown">
    <NavDropdown.Item href="/profile">Профиль</NavDropdown.Item>
    <NavDropdown.Item onClick={() => signOut()}>
        Выйти
    </NavDropdown.Item>
    </NavDropdown>
  );
};


// Tepm buttons
export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Войти
    </button>
  );
};


export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Выйти
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Профиль</Link>;
};

export const DeleteProductButton = (props) => {
  let [pending, startTransition] = useTransition()
  return (
      <button type="button" disabled={pending} onClick={() => startTransition(() => deleteProduct(props.id))}>
        <FaTrash />
        <h6>{props.id}</h6>
      </button>
  )
};


export const EditProductButton = (props) => {
  return (
    <Link href={`/admin/product/${props.id}`}>
      <button variant='light' type="button" className='btn mx-2'>
          <FaEdit />
          <h6>{props.id}</h6>
      </button>
     </Link>
  )
};


export const DeleteUserButton = (props) => {
  let [pending, startTransition] = useTransition()
  return (
      <button type="button" className='btn btn-danger' disabled={pending} onClick={() => startTransition(() => deleteUser(props.id))}>
        <FaTrash />
        <h6>{props.id}</h6>
      </button>
  )
};

export const EditUserButton = (props) => {
  return (
    <Link href={`/admin/user/${props.id}`}>
      <button variant='light' type="button" className='btn mx-2'>
          <FaEdit />
          <h6>{props.id}</h6>
      </button>
     </Link>
  )
};


export const AddToCart = (props) => {
  return (
    <Link href={`/cart`}>
      <button type="button" className='btn mx-2' onClick={() => addToCartTest(props)}>
          <h6>В корзину</h6>
      </button>
    </Link>
  )
};