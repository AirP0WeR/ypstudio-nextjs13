import Link from "next/link";


export default async function Page() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
        <Link href='/admin/productlist' className='btn btn-light my-3'>
          Go Back
        </Link>
        </div>
        <div className="col-9">
          {/* // форма */}
        <form>
          <legend>Изменить товар</legend>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Название</label>
            <input type="test" className="form-control" id="exampleInputEmail1" placeholder="Картошка"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Цена</label>
            <input type="number" className="form-control" id="exampleInputEmail1"  placeholder="0"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Изображение</label>
            <input type="file" className="form-control" id="exampleInputEmail1"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Бренд</label>
            <input type="test" className="form-control" id="exampleInputEmail1" placeholder="Бренд"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Количество в наличии</label>
            <input type="number" className="form-control" id="exampleInputEmail1" placeholder="Количество в наличии"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Категоря</label>
            <input type="test" className="form-control" id="exampleInputEmail1" placeholder="Бренд"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Описание</label>
            <input type="test" className="form-control" id="exampleInputEmail1" placeholder="Описание"></input>
          </div>
          <button>Сохранить</button>
        </form>
        </div>
      </div>
    </div>
  );
}