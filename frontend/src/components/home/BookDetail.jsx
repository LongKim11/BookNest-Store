import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookDetail = ({ item, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed bg-opacity-60 bg-black top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        ></AiOutlineClose>
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {item.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{item._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl"></PiBookOpenTextLight>
          <h2 className="my-1">{item.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl"></BiUserCircle>
          <h2 className="my-1">{item.author}</h2>
        </div>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aperiam
          labore qui pariatur soluta laudantium veniam exercitationem magnam
          sequi blanditiis atque quaerat magni, explicabo, neque asperiores
          perspiciatis necessitatibus fugiat. Numquam? Consequuntur deleniti
          delectus earum illum aliquam quidem voluptate nobis, labore aspernatur
          sit, laudantium perspiciatis quia voluptates deserunt cum ab aut enim
          fuga doloribus minima corrupti. Corporis, aliquam. Tempora, voluptas.
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
