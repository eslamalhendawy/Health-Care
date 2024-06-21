import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import AddHistoryModal from "../components/AddHistoryModal";

const Slider = ({ data }) => {
  const role = localStorage.getItem("role");

  return (
    <div>
      <Swiper
        rtl="true"
        className="mb-6"
        slidesPerGroup={1}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide className="mb-6" key={index}>
            <div className={`bg-[${item.bgColor}] p-4 rounded-lg border-2 border-[#28CC9E]`}>
              <h4 className={`text-center bg-[${item.headerBg}] w-fit mx-auto py-2 px-3 rounded-2xl text-[${item.headerColor}] font-medium mb-4`}>{item.name}</h4>
              <p className="text-center mb-6">الملاحظات</p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {item.medicine.map((med, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <div className="bg-black size-[10px] rounded-full" />
                    <p className="text-center">{med}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span>{item.doctor}</span>
                <span>{item.date}</span>
              </div>
            </div>
            <div className="hidden bg-[#37C8BF4D]" />
          </SwiperSlide>
        ))}
        {role === "admin" && (
          <SwiperSlide className="mb-6">
            <div className="bg-[#E6E6E6] h-[308px] rounded-lg flex justify-center items-center">
              <AddHistoryModal />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
