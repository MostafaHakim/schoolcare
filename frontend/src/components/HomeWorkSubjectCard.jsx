import { Link } from "react-router-dom";

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
      className="flex flex-row lg:flex-col space-x-4 lg:space-y-4 p-2 lg:p-4 border border-blue-100 rounded-xl"
    >
      <img className="w-1/3 lg:w-full rounded-xl" src={image} alt="" />
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl">{subject}</h2>
        <span className="text-sm text-gray-700">{teacher}</span>
        <p className="text-xs text-gray-500">{formatDateToDDMMMYY(date)}</p>
      </div>
    </Link>
  );
};

export default HomeWorkSubjectCard;
