import contacts from "/public/images/contacts/contacts.jpg";

export default function Page() {
  return (
    <div className="container">
      <div
        className="row justify-content-center contactsContainer"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), url(${contacts.src})`,
          backgroundPosition: "center",
        }}
      >
        <div
          className="col-sm-6 border bg-white"
          style={{ marginTop: "10%", marginBottom: "10%", padding: "5%" }}
        >
          <form method="post" id="contacts" action="{{ route('sendinfo') }}">
            <div className="mb-3">
              <label for="name" className="form-label">
                Имя
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Ваше имя"
              />
            </div>

            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label for="message" className="form-label">
                Сообщение
              </label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button
              className="btn btn-secondary"
              style={{ backgroundColor: "#929497" }}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
