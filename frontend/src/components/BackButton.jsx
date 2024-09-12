import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to={"/"}>
      <div className="border border-green-800 text-green-800 px-4 py-1 rounded-lg w-fit hover:border-white hover:bg-green-800 hover:text-white transition-colors">
        <BsArrowLeft className="text-3xl"></BsArrowLeft>
      </div>
    </Link>
  );
};

export default BackButton;
