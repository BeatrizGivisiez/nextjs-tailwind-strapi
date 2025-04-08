"use client";

export const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-10 uppercase">
        Entre em Contacto Connosco
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Map */}
        <div className="w-full h-64 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.095159258481!2d-9.15975391724226!3d38.78685903820371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19335b579b5107%3A0x1d5d8f072787d322!2sCEDEMA%20-%20Associa%C3%A7%C3%A3o%20de%20Pais%20e%20Amigos%20dos%20Deficientes%20Mentais%20Adultos!5e0!3m2!1sen!2spt!4v1743513651354!5m2!1sen!2spt&zoom=disable"
            width="100%"
            height="450"
            style={{
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          />
        </div>

        {/* Right: Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome *"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Apelido"
              className="input input-bordered w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Email *"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Assunto"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Mensagem *"
            required
            className="textarea textarea-bordered w-full h-32"
          />
          <div className="flex justify-end pt-4">
            <button type="submit" className="btn btn-primary btn-md">
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
