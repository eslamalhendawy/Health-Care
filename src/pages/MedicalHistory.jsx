import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "./Slider";

import chatbot from "../assets/ChatBot.svg";

const chronic = [
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#28CC9E4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
];

const diagnosis = [
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#FFFFFF", headerBg: "#28CC9E4D", headerColor: "#000000" },
];

const surgery = [
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
  { name: "مرض السكري", medicine: ["دواء 1", "دواء 2", "دواء 3", "دواء 1", "دواء 2", "دواء 3"], doctor: "د. محمد علي", date: "2021-10-10", bgColor: "#37C8BF4D", headerBg: "#FFFFFF", headerColor: "#196B69" },
];

const MedicalHistory = () => {
  return (
    <>
      <Navbar />
      <section dir="rtl" className="bg-[#f6f6f6] minHeight">
        <div className="mt-[100px] container mx-auto py-6 px-4">
          <h3 className="mt-[50px] mb-12 text-center font-semibold text-lg">الامراض المزمنة</h3>
          <Slider data={chronic} className="mb-12" />
          <h3 className="mt-[50px] mb-12 text-center font-semibold text-lg">التشخيصات الطبية</h3>
          <Slider data={diagnosis} className="mb-12" />
          <h3 className="mt-[50px] mb-12 text-center font-semibold text-lg">العمليات الجراحية</h3>
          <Slider data={surgery} className="mb-12" />
        </div>
      </section>
      <div className="fixed bottom-[100px] left-[100px] z-50 py-3  bg-[#196B69] w-[82px] h-[82px] flex items-center justify-center rounded-full">
        <Link to="/ChatBot">
          <img src={chatbot} className="  " alt="chatbot" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default MedicalHistory;
