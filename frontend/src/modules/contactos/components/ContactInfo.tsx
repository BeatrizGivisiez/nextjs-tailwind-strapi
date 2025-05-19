"use client";

import { Buildings, Phone, EnvelopeSimple } from "phosphor-react";
import { NewLocations } from "@/hooks/Locations/useLocations";

interface ContactInfoProps {
  locations: NewLocations[];
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ locations }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16">
      <h3 className="text-primary heading-4xl font-extrabold pb-10">
        Venha Visitar-nos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-800">
        {locations.map((loc, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-2 text-primary heading-lg uppercase leading-snug">
              <Buildings
                size={16}
                weight="bold"
                className="shrink-0 mt-[2px]"
              />
              <span>{loc.Title}</span>
            </div>
            <p className="whitespace-pre-line">{loc.Address}</p>
            <p className="flex items-center gap-2">
              <Phone
                size={14}
                weight="regular"
                className="text-gray-600 mt-[2px] shrink-0"
              />
              <a className="leading-snug" href={`tel:${loc.Phone}`}>{loc.Phone}</a>
            </p>
            <p className="flex items-center gap-2 break-all">
              <EnvelopeSimple
                size={14}
                weight="regular"
                className="text-gray-600 mt-[2px] shrink-0"
              />
              <a className="leading-snug" href={`mailto:${loc.Email}`}>{loc.Email}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
