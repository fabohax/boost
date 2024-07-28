const ContactForm = () => {
  
    return (
      <form className="mt-12" action="/api/contact" method="post">
        <div className="form">
          <input
            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            autocomplete="off"
          />
          <input
            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            autocomplete="off"
          />
          <textarea
            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            name="message"
            placeholder="Tu mensaje"
            rows="4"
            required
          ></textarea>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    );
  };
  
  export default ContactForm;
  