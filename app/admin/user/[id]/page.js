import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import User from '@/models/userModel';
import connectDB from '@/config/db';
import logHelper from '@/utils/logHelper';

import { revalidatePath } from 'next/cache';


export default async function Page({ params }) {
  connectDB();

  async function update(data) {
    'use server'
    const user = await User.findById(params.id);
    user.name = data.get('name');
    user.email = data.get('email')
    const updatedUser = await user.save();
    revalidatePath(`/admin/user/{${params.id}}`)

  }

  const user = await User.findById(params.id);
    logHelper(user.email)
  return (
    <div className="container">
      <form action={update}>
        <legend>Изменить пользователя</legend>
        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input name="name" type="string" className="form-control" placeholder="Название" defaultValue={`${user.name}`}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input name="email" type="email" className="form-control" placeholder="email" defaultValue={`${user.email}`}></input>
        </div>
        <button type="submit" value="Создать">
          <FaTrash /> Сохранить
        </button>
      </form>
    </div>
  );
}
