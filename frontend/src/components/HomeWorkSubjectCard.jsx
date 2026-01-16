import { Link } from "react-router-dom";
import Homeworkicon from "../assets/homeworkicon.png";
const HomeWorkSubjectCard = ({ image, subject, teacher, date, _id }) => {
  function formatDateToDDMMMYY(date) {
    const options = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };

    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );
    return formattedDate.replace(/\//g, "-");
  }

  return (
    <Link
      to={`${_id}`}
      className="flex flex-row  items-center lg:items-start p-2 lg:flex-col lg:space-y-2  lg:p-4 border border-gray-100 rounded-xl space-x-2"
    >
      <div className="p-2 border border-gray-100 rounded-lg">
        <img className="hidden lg:block w-full rounded-xl" src={image} alt="" />
        <img
          className="lg:hidden w-[51px] h-[51px] "
          src={Homeworkicon}
          alt=""
        />
      </div>
      <div className="flex flex-col lg:space-y-1">
        <h2 className="text-[14px] lg:text-2xl">{subject}</h2>
        <span className="text-[12px] lg:text-sm text-gray-700">{teacher}</span>
        <p className="text-[12px] text-gray-500">{formatDateToDDMMMYY(date)}</p>
      </div>
    </Link>
  );
};

export default HomeWorkSubjectCard;
