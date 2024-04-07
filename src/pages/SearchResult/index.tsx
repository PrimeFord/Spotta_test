import { reviewTags, reviews } from "../../utils/data";
import ReviewCard from "../../components/review";
import ModalContainer from "../../layouts/ModalContainer";
import { useModalContext } from "../../components/Context/modal";
import { useAddressContext } from "../../components/Context/address";
import Ratings from "../../components/Rating";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const SearchAddress = () => {
  const { show, setShow } = useModalContext();
  const { address } = useAddressContext();
  const [hide, setHide] = useState(false);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const handleHide = (e: any) => {
    if (e.target.id === "drop") {
      setHide(false);
    }
  };
  return (
    <div className="pt-[22rem] lg:pt-[12rem] pb-2 flex flex-col-reverse lg:flex-row gap-8 lg:gap-[4rem]">
      <div className="w-[100%] lg:w-[70%] gap-2 flex flex-col">
        {reviews.map((el) => (
          <ReviewCard props={el} />
        ))}
      </div>
      <div className="w-[100%] lg:w-[40%] h-[100%] grid grid-cols-2 gap-4 ">
        <img
          className="rounded-[10px] cursor-pointer hover:opacity-[0.9]"
          src="/Image/place1.png"
          alt="place_holder"
        />
        <img
          className="rounded-[10px] cursor-pointer hover:opacity-[0.9]"
          src="/Image/place2.png"
          alt="place_holder"
        />
        <img
          className="rounded-[10px] cursor-pointer hover:opacity-[0.9]"
          src="/Image/place3.png"
          alt="place_holder"
        />
        <img
          className="rounded-[10px] cursor-pointer hover:opacity-[0.9]"
          src="/Image/place4.png"
          alt="place_holder"
        />
      </div>
      <ModalContainer isVisible={show} onClose={() => setShow(false)}>
        {!done ? (
          <div id="drop" onClick={handleHide}>
            <p className="text-[1rem] lg:text-[1.2rem] font-[400] text-center mb-2">
              Review Location
            </p>
            <p className="text-[1rem] mb-2 lg:text-[1.2rem] font-[500]">
              {address || "Bonny and Clyde Street, Ajao Estate, Lagos."}
            </p>
            <form
              action=""
              //  onSubmit={() => {}}
            >
              <label htmlFor="amenities" className="relative">
                <div className="w-[100%] h-[2.8rem] rounded-[8px] flex flex-row-reverse items-center bg-[#F3F7FE] border-[1px] border-solid border-[#D4DCF1] px-3">
                  <span className="pr-3">
                    <BiChevronDown
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "#0D2159",
                      }}
                      onClick={() => {
                        setHide(!hide);
                      }}
                    />
                  </span>
                  <input
                    className="w-[100%] bg-[#F3F7FE] placeholder:text-[#484851] outline-0 border-0"
                    required
                    type="text"
                    name="search"
                    placeholder="Select Amenities"
                    autoComplete="off"
                    onClick={() => {
                      setHide(!hide);
                    }}
                    id="search"
                  />
                </div>
                <div
                  className={` ${
                    hide ? "grid" : "hidden"
                  } h-[15rem] lg:h-[10rem] w-full lg:w-[100%] absolute bg-[#F3F7FE] p-1 grid grid-cols-3 lg:grid-cols-5 border-[1px] border-solid border-[#D4DCF1] rounded-[8px]`}
                >
                  {reviewTags.map((e, i) => (
                    <label
                      key={i}
                      htmlFor={e}
                      className="text-[0.7rem] lg:text-[0.8rem] font-[400] flex items-center gap-2 text-[#484851]"
                    >
                      <input
                        id={e}
                        name={e}
                        value={e}
                        type="checkbox"
                        className="h-4 w-4 rounded bg-[#F3F7FE] border-[#D4DCF1] "
                      />
                      {e}
                    </label>
                  ))}
                </div>
              </label>

              <label htmlFor="review" className="flex flex-col gap-2 mt-4">
                <p className="text-[0.85rem] lg:text-[0.9rem] font-[400]">
                  Rate Location
                </p>
                <Ratings />
              </label>

              <label htmlFor="review" className="flex flex-col gap-2 mt-4">
                <p className="text-[0.85rem] lg:text-[0.9rem] font-[400]">
                  Write Review
                </p>
                <textarea
                  required
                  id="about"
                  name="about"
                  rows={4}
                  className="block w-full mt-0 rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-0 sm:text-sm sm:leading-6"
                  value={input}
                  onChange={(e) => {
                    e.preventDefault();
                    setInput(e.target.value);
                  }}
                  placeholder="Write your review here"
                />
              </label>

              <label
                htmlFor="candidates"
                className="text-[0.85rem] lg:text-[0.9rem] font-[400] mt-4 flex items-center gap-2 text-[#484851]"
              >
                <input
                  id="isAnonymous"
                  name="anonymous"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 "
                />
                Post as Anonymous
              </label>
              <div className="flex gap-6 mt-4">
                <button
                  type="button"
                  disabled={input !== "" ? false : true}
                  className="bg-[#3366FF] disabled:bg-[#3366ff50] w-[38rem] text-[#fff] hover:bg-[#3366FF95] text-[0.9rem] rounded-[8px] p-2"
                  onClick={() => setDone(true)}
                >
                  SUBMIT
                </button>
                <button
                  className="border-[#3366FF] w-[38rem] text-[#3366FF] hover:bg-[#5378F620] border-solid border-[1px] text-[0.9rem] p-2 rounded-[8px]"
                  onClick={() => setShow(false)}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div
            id="drop"
            className=" text-center flex mt-5 flex-col items-center "
            onClick={handleHide}
          >
            <p className="text-[1rem] lg:text-[1.2rem] font-[400] text-center mb-2">
              Review Location
            </p>
            <p className="text-[1rem] mb-2 lg:text-[1.2rem] font-[500]">
              Review has been sucessfully sent!
            </p>
            <IoCheckmarkDoneCircleOutline
              style={{
                height: "10rem",
                width: "10rem",
                color: "#3366FF",
                textAlign: "center",
              }}
            />
            <button
              type="button"
              className="bg-[#3366FF] w-full text-[#fff] hover:bg-[#3366FF95] text-[0.9rem] mt-2 rounded-[8px] p-2"
              onClick={() => {
                setDone(false);
                setShow(false);
              }}
            >
              Done
            </button>
          </div>
        )}
      </ModalContainer>
    </div>
  );
};

export default SearchAddress;
