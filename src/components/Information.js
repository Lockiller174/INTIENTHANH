import React from "react";

//COMPONENT
import ContactForm from "../components/ContactForm";

function Information() {
  return (
    <div className="information">
      <h3 className="text-lg text-orange-700 uppercase">In Tiến Thành</h3>
      <div className="pt-4">
        <p className="text-base text-gray-500 pb-2">
          Địa chỉ: 90 Trần Thái Tông, Cầu Giấy, Hà Nội
        </p>
        <p className="text-base text-gray-500 pb-2">Điện thoại: 0976.379.636 - 0924.594.222</p>
        <p className="text-base text-gray-500 pb-2">
          Email: intienthanh6868@gmail.com
        </p>
        <p className="text-base text-gray-500 pb-2">
          Làm việc: T2 - T7 / 8:00 AM - 07:00 PM
        </p>
      </div>
      <div className="pt-4">
        <h3 className="text-orange-700 text-lg uppercase pb-1">
          Vui lòng để lại thông tin của bạn
        </h3>
        <p className="text-base text-gray-500 pb-4">
          Chúng tôi sẽ liên hệ lại với bạn ngay khi có thể.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Information;
