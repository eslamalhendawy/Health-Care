import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import chatbot from "../assets/ChatBot.svg";

const templist = ["التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "التهاب الكبد", "الحصبة"];

const DoctorVaccines = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(templist);

  useEffect(() => {
    const filteredList = templist.filter((item) => item.includes(query));
    setList(filteredList);
  }, [query]);
  return (
    <>
      <Navbar />
      <section className="bg-[#f6f6f6] minHeight">
        <div dir="rtl" className="mt-[100px] container mx-auto py-6 px-4 ">
          <h1 className="text-center font-semibold  text-2xl mt-12 mb-6">التطعيمات</h1>
          <div className="flex justify-center mb-12">
            <input onChange={(e) => setQuery(e.target.value)} className="text-right border-[#28CC9E] focus:outline-none min-w-[350px] rounded-lg" type="text" placeholder="ابحث" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[70px]">
            {list.map((item, index) => (
              <div className="bg-white p-6 rounded-xl flex flex-row items-center justify-between" key={index}>
                <h4 className="text-center text-xl font-semibold">{item}</h4>
                <input type="checkbox" name="" id="" />
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
  )
}

export default DoctorVaccines