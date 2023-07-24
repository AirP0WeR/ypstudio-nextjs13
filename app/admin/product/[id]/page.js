

export default async function Page({ params }) {

  return (
    <div className="container">
      <h1>hello</h1>
      <h1>{params.id}</h1>
    </div>


  );
}
