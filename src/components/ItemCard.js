import React from "react";

// component
import Button from "./Button";

function ItemCard({ image, link, title }) {
  return (
    <div className="item-card group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="item-card__head relative overflow-hidden aspect-[4/3]">
        <div className="item-card__image h-full w-full">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            alt={title}
            loading="lazy"
          />
          {/* Glassmorphism overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="item-card__button w-full px-6 absolute left-0 bottom-6 translate-y-[20px] z-10 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <Button
            text="Xem chi tiết"
            link={link}
            size="md"
            styleClass="1"
            width="w-full"
          />
        </div>
      </div>
      <div className="item-card__title p-5 text-base text-gray-800 uppercase text-center font-bold tracking-wide group-hover:text-orange-600 transition-colors duration-300">
        {title}
      </div>
    </div>
  );
}

export default ItemCard;
