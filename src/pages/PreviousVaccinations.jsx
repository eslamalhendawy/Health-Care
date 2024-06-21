import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import chatbot from "../assets/ChatBot.svg";

const PreviousVaccinations = () => {
  const list = ["التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "التهاب الكبد"];
  return (
    <>
      <Navbar />
      <section className="bg-[#f6f6f6] minHeight">
        <div dir="rtl" className="mt-[100px] container mx-auto py-6 px-4 ">
          <h1 className="text-center font-semibold  text-2xl mt-12 mb-12">التطعيمات السابقة</h1>
          <div className="grid grid-cols-2  lg:grid-cols-4 gap-6">
            {list.map((item, index) => (
              <div className="bg-white p-4 cardShadow flex flex-row-reverse justify-between" key={index}>
                <span>21/3/2024</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
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

export default PreviousVaccinations;
