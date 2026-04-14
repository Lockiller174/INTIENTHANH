import React from "react";

function ContactForm() {
  return (
    <div className="contact-form">
      {/* Form Submit - Gửi email trực tiếp mà không cần EmailJS */}
      <form action="https://formsubmit.co/intienthanh6868@gmail.com" method="POST" className="contact-form__form bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gửi tin nhắn cho chúng tôi</h3>
        
        {/* Cấu hình ẩn cho FormSubmit */}
        <input type="hidden" name="_subject" value="[Website] Có liên hệ mới từ khách hàng!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <div className="contact-form__item pb-4">
          <label htmlFor="fullname" className="block mb-2 text-sm font-semibold text-gray-600">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="Họ_và_tên"
            id="fullname"
            className="border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-sm"
            placeholder="Nhập họ và tên của bạn"
            required
          />
        </div>
        
        <div className="contact-form__item pb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-600">
            Địa chỉ email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            className="border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-sm"
            placeholder="Nhập địa chỉ email của bạn"
            required
          />
        </div>
        
        <div className="contact-form__item pb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-600">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="Số_điện_thoại"
            id="phone"
            className="border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-sm"
            placeholder="Nhập số điện thoại của bạn"
            required
          />
        </div>
        
        <div className="contact-form__item pb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-600">
            Nội dung <span className="text-red-500">*</span>
          </label>
          <textarea
            name="Nội_dung"
            id="message"
            rows="4"
            className="border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all shadow-sm resize-none"
            placeholder="Nhập nội dung tin nhắn hoặc yêu cầu báo giá của bạn"
            required
          ></textarea>
        </div>
        
        <div className="contact-form__button pt-2">
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Gửi yêu cầu ngay
          </button>
          <p className="text-xs text-center text-gray-400 mt-4">Thông tin của bạn được bảo mật hoàn toàn.</p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
