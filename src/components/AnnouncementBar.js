import React from "react";

function AnnouncementBar() {
  return (
    <div className="announcement-bar bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md">
      <div className="container">
        <div className="announcement-bar__content flex flex-col md:flex-row items-center justify-between py-2 md:py-3 gap-2 md:gap-0">
          <div className="announcement-bar__left hidden md:block">
            <p className="text-xs font-medium text-white tracking-wide">
              In màu khổ lớn giá rẻ tại in Tiến Thành
            </p>
          </div>
          <div className="announcement-bar__right flex flex-wrap justify-center items-center gap-3 md:gap-5">
            <div className="flex items-center gap-1.5">
              <svg
                className="text-white w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                />
              </svg>
              <p className="text-[11px] md:text-xs text-white">
                Số nhà 2-70, ngõ 70 Lưu Hữu Phước, Hà Nội
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <svg
                className="text-white w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-[11px] md:text-xs text-white">T2 - T7 / 8:00 AM - 07:00 PM</p>
            </div>
            <a href="tel:0976379636" className="flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-all font-semibold">
              <svg
                className="text-white w-4 h-4 animate-pulse"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <p className="text-[11px] md:text-xs text-white">0976.379.636 - 0924.594.222</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
