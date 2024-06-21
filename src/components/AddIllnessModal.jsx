import { useState } from "react";

import Modal from "@mui/material/Modal";

const AddIllnessModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  return (
    <>
      <button onClick={() => setOpen(true)} className="bg-[#E6E6E6] hover:bg-[#a8a5a5] duration-200 outline-none text-white flex justify-center items-center h-[180px] text-8xl cursor-pointer">
        <i className="fa-solid fa-plus"></i>
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="bg-white p-6 sm:p-12 border-[1.5px] border-[#28CC9E] rounded-xl w-[300px] sm:w-[450px] lg:w-[750px]">
            <div className="text-right mb-12 flex flex-row-reverse items-center">
              <i className="fa-solid fa-x text-xl cursor-pointer" onClick={() => setOpen(false)}></i>
              <h4 className="font-semibold text-xl grow text-center">اضافة المرض</h4>
            </div>
            <div className="flex justify-end text-right mb-8">
              <input type="text" className="text-right border-[#28CC9E] focus:outline-none min-w-[350px] rounded-lg" placeholder="اسم المرض" />
            </div>
            <div className="flex justify-end text-right mb-8">
              <textarea name="" id="" className="text-right border-[#28CC9E] outline-none w-full h-[300px] rounded-lg resize-none" placeholder="اضف ملاحظة"></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#28CC9E] text-lg py-2 w-[60%] rounded-lg">اضف</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddIllnessModal;
