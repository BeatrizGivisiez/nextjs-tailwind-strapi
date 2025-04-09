"use client";

import { Buildings, Phone, EnvelopeSimple } from "phosphor-react";

export const ContactInfo = () => {
  const locations = [
    {
      title: "SEDE",
      address: "Rua Varela Silva, Lote 8 – Loja A\n1750-403 Lisboa",
      phone: "+351 218 149 314",
      email: "comunicacao@cedema.org.pt",
    },
    {
      title: "CAO “VIDA VIVA”",
      address: "Rua Varela Silva, lote 6 e 7, Loja A\n1750-403 Lisboa",
      phone: "+351 217 552 760",
      email: "caci.ameixoeira@cedema.org.pt",
    },
    {
      title: "LAR “VIDA VIVA”",
      address: "Rua Fernanda Alves, lote 3, r/c dto\n1750-391 Lisboa",
      phone: "+351 214 044 320",
      email: "cedema.lar@cedema.org.pt",
    },
    {
      title: "EQUIPAMENTO SOCIAL “TELHADINHO”",
      address:
        "Rua das Fontainhas, lote 26 – Bairro das Fontainhas\n1685-691 Famões",
      phone: "+351 219 346 060",
      email: "telhadinho@cedema.org.pt",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16">
      <h3 className="text-primary heading-4xl font-extrabold pb-10">
        Venha Visitar-nos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-800">
        {locations.map((loc, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-start gap-2 text-primary heading-lg uppercase leading-snug">
              <Buildings
                size={16}
                weight="bold"
                className="shrink-0 mt-[2px]"
              />
              <span>{loc.title}</span>
            </div>
            <p className="whitespace-pre-line">{loc.address}</p>
            <p className="flex items-start gap-2">
              <Phone
                size={14}
                weight="regular"
                className="text-gray-600 mt-[2px] shrink-0"
              />
              <span className="leading-snug">{loc.phone}</span>
            </p>

            <p className="flex items-start gap-2 break-all">
              <EnvelopeSimple
                size={14}
                weight="regular"
                className="text-gray-600 mt-[2px] shrink-0"
              />
              <span className="leading-snug">{loc.email}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
