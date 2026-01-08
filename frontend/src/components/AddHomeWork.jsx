import { MoveLeft } from "lucide-react";
import { MdOutlineFileUpload } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Icon from "../assets/upload.png";

const AddHomeWork = () => {
  return (
    <div className=" bg-white/90 flex flex-col space-y-4">
      {/* ===== Header ===== */}
      <div className="flex flex-row items-center justify-between bg-white px-4 py-4 rounded-t-2xl lg:border-b-[1px] lg:border-gray-200">
        <div className="flex flex-row items-start justify-start space-x-2">
          <MoveLeft className="flex lg:hidden" />
          <h1 className="text-lg font-semibold text-gray-800">Add Homework</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col p-8 items-center justify-center w-full space-y-4">
          <div className="w-full lg:w-1/2 rounded-2xl border-2 border-dashed border-violet-400 flex flex-col items-center justify-center mx-auto bg-white p-4 space-y-8  ">
            <img className="w-20" src={Icon} alt="Upload" />
            <h2>Drag & drop your file here</h2>
            <button className="flex flex-row space-x-2 text-md  bg-violet-600 text-white px-8 py-3 rounded-full">
              <MdOutlineFileUpload />
              <span className="uppercase text-xs font-lexend">
                Click to upload your file
              </span>
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <fieldset className=" p-4 border rounded-2xl ">
              <legend className="font-semibold">Subject</legend>
              <input
                className="w-full p-4 rounded-xl border focus:outline-none"
                placeholder="Please Write the subject here"
                type="text"
              />
            </fieldset>
          </div>
          <div className="w-full lg:w-1/2">
            <fieldset className=" p-4 border rounded-2xl ">
              <legend className="font-semibold">About Homework</legend>
              <textarea
                className="w-full focus:outline-none "
                rows="5"
                cols="33"
                placeholder="Write something..."
              ></textarea>
            </fieldset>
          </div>
          <button className="px-20 font-sans text-lg py-3 bg-violet-600 text-white rounded-full">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHomeWork;
