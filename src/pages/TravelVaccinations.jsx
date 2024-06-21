import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import chatbot from "../assets/ChatBot.svg";

const templist = [
  { name: "الكويت", types: ["التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ"] },
  { name: "مصر", types: ["التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ"] },
  { name: "السعودية", types: ["التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ"] },
  { name: "المغرب", types: ["التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ"] },
  { name: "الامارات", types: ["التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ", "التهاب الكبد أ"] },
];

const TravelVaccinations = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(templist);

  useEffect(() => {
    console.log(query);
    const filteredList = templist.filter((item) => item.name.includes(query));
    setList(filteredList);
  }, [query]);

  return (
    <>
      <Navbar />
      <section className="bg-[#f6f6f6] minHeight">
        <div dir="rtl" className="mt-[100px] container mx-auto py-6 px-4">
          <h1 className="text-center font-semibold  text-2xl mt-12 mb-6">تطعيمات السفر</h1>
          <div className="flex justify-center mb-12">
            <input onChange={(e) => setQuery(e.target.value)} className="text-right border-[#28CC9E] focus:outline-none min-w-[350px] rounded-lg" type="text" placeholder="ابحث" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[70px]">
            {list.map((item, index) => (
              <div className="bg-[#28CC9E4D] p-6 rounded-xl" key={index}>
                <h4 className="text-center mb-4 text-xl font-semibold">{item.name}</h4>
                {item.types.map((type, index) => (
                  <div className="p-4 flex flex-row-reverse justify-between" key={index}>
                    <div className="bg-[#196B69] size-[35px] rounded-full flex justify-center items-center text-white">
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <span>{type}</span>
                  </div>
                ))}
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

export default TravelVaccinations;
