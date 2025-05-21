import { Link } from "react-router-dom";

const services = [
  { name: "In Tranh Canvas tại Hà Nội", href: "/danh-muc-in/in-tranh-canvas" },
  { name: "In Standee tại Hà Nội", href: "/danh-muc-in/in-standee" },
  { name: "In Poster tại Hà Nội", href: "/danh-muc-in/in-poster" },
  { name: "In Backdrop tại Hà Nội", href: "/danh-muc-in/in-backdrop" },
  { name: "In Cardvisit tại Hà Nội", href: "/danh-muc-in/in-cardvisit" },
  { name: "In Catalog tại Hà Nội", href: "/danh-muc-in/in-catalog" },
  { name: "In Giấy mời tại Hà Nội", href: "/danh-muc-in/in-giay-moi" },
  { name: "In Voucher tại Hà Nội", href: "/danh-muc-in/in-voucher" },
  { name: "In Phong bì tại Hà Nội", href: "/danh-muc-in/in-phong-bi" },
  { name: "In Sticker tại Hà Nội", href: "/danh-muc-in/in-sticker" },
  { name: "In tem bảo hành tại Hà Nội", href: "/danh-muc-in/in-tem-bao-hanh" },
];

function ServiceSidebar({ activeService }) {
  return (
    <div className="bg-white border rounded shadow-sm">
      <div className="bg-brand-red text-orange-700 py-3 px-4 font-semibold">
        DỊCH VỤ IN ẤN
      </div>
      <ul className="divide-y">
        {services.map((service) => (
          <li key={service.name}>
            <Link
              to={service.href}
              className={`block py-3 px-4 transition-colors hover:bg-gray-100 ${
                activeService === service.name ? "bg-gray-100 text-brand-red font-medium" : ""
              }`}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSidebar;
