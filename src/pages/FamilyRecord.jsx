import { Link } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import chatbot from "../assets/ChatBot.svg";
import image from "../assets/familyRecord.svg";
import heart from "../assets/heart.png";

const list = [
  { title: "Diabetes Melitus مرض السكري", comment: "نصائح لحمايتك من مرض السكري", text: "تأكد من الحفاظ على وزن صحي ومتوازن من خلال ممارسة الرياضة بانتظام وتناول طعام صحي ومتوازن.قلل من استهلاك السكريات والدهون المشبعة في النظام الغذائي، وزود بالفواكه والخضروات و الحبوب الكاملة. قم بفحص مستوى السكر في الدم بانتظام و اتبع توصيات الطبيب بخصوص الفحوصات والاختبارات اللازمة." },
  { title: "Diabetes Melitus مرض السكري", comment: "نصائح لحمايتك من مرض السكري", text: "تأكد من الحفاظ على وزن صحي ومتوازن من خلال ممارسة الرياضة بانتظام وتناول طعام صحي ومتوازن.قلل من استهلاك السكريات والدهون المشبعة في النظام الغذائي، وزود بالفواكه والخضروات و الحبوب الكاملة. قم بفحص مستوى السكر في الدم بانتظام و اتبع توصيات الطبيب بخصوص الفحوصات والاختبارات اللازمة." },
];

const FamilyRecord = () => {
  const role = localStorage.getItem("role");
  return (
    <>
      <Navbar />
      <section className="bg-[#f6f6f6] minHeight">
        <div className="mt-[100px] container mx-auto py-6 px-4 flex gap-12">
          <div className="pt-12 basis-1/3">
            <img src={image} alt="" />
          </div>
          <div className="pt-12 basis-2/3 flex flex-col gap-6">
            {list.map((item, index) => (
              <Accordion key={index} className="group">
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                  <p className="text-right ml-auto font-semibold text-xl">{item.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="mb-4 flex items-center justify-end gap-2">
                    <img className="size-[35px]" src={heart} alt="" />
                    <p className="text-right text-[#2CB438] font-semibold text-xl">{item.comment}</p>
                  </div>
                  <p className="text-right ml-auto text-[#000000BF] text-lg">{item.text}</p>
                </AccordionDetails>
              </Accordion>
            ))}
            {role === "admin" && (
              <div className="bg-[#E6E6E6] text-white flex justify-center items-center h-[180px] text-8xl cursor-pointer">
                <i className="fa-solid fa-plus"></i>
              </div>
            )}
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

export default FamilyRecord;
