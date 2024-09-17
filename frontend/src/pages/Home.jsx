import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8090/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="flex justify-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-400 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-400 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex items-center justify-center gap-x-3 my-5">
        <h1 className="text-3xl font-bold text-indigo-700">Books List</h1>
        <Link to={"/books/create"}>
          <MdOutlineAddBox className="text-sky-800 text-4xl"></MdOutlineAddBox>
        </Link>
      </div>

      {loading ? (
        <Spinner></Spinner>
      ) : showType === "table" ? (
        <>
          <h3 className="text-lg text-center text-slate-500 my-5">
            Available: {books.length}
          </h3>
          <BooksTable books={books}></BooksTable>
        </>
      ) : (
        <>
          <h3 className="text-lg text-center text-slate-500 my-5">
            Available: {books.length}
          </h3>
          <BooksCard books={books}></BooksCard>
        </>
      )}
    </div>
  );
};

export default Home;
