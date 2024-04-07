import { reviews } from "../../utils/data";
import ReviewCard from "../../components/review";
import ModalContainer from "../../layouts/ModalContainer";
import { useModalContext } from "../../components/Context/modal";
import { useAddressContext } from "../../components/Context/address";
// import { IoIosStar } from "react-icons/io";
import Ratings from "../../components/Rating";

const SearchAddress = () => {
  const { show, setShow } = useModalContext();
  const { address } = useAddressContext();

  // const address = localStorage.getItem("addressState");

  return (
    <div className="pt-[20rem] lg:pt-[11rem] pb-2 flex flex-col-reverse lg:flex-row gap-8 lg:gap-[4rem]">
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
        <p className="text-[1rem] lg:text-[1.2rem] font-[400] text-center mb-2">
          Review Location
        </p>
        <p className="text-[1rem] lg:text-[1.2rem] font-[500]">
          {address || "Bonny and Clyde Street, Ajao Estate, Lagos."}
        </p>
        <label htmlFor="amenities">
          <select
            name="amenities"
            className="w-[100%] h-[2.4rem] rounded-[8px] flex items-center bg-[#F3F7FE] border-[1px] focus:outline-none border-solid border-[#D4DCF1] px-3 mt-3"
            id="amenities"
          >
            <option value="null" className="w-[60%] placeholder:text-gray-400">
              -Select Amenities-
            </option>
          </select>
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
            id="about"
            name="about"
            rows={4}
            className="block w-full mt-0 rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-0 sm:text-sm sm:leading-6"
            placeholder="Write your review here"
          />
        </label>

        <label
          htmlFor="candidates"
          className="text-[0.85rem] lg:text-[0.9rem] font-[400] mt-4 flex items-center gap-2 text-[#484851]"
        >
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 "
          />
          Post as Anonymous
        </label>
        <div className="flex gap-6 mt-4">
          <button
            className="bg-[#3366FF]  w-full text-[#fff] hover:bg-[#3366FF95] text-[0.9rem] rounded-[8px] p-2"
            onClick={() => setShow(true)}
          >
            SUBMIT
          </button>
          <button
            className="border-[#3366FF] w-full text-[#3366FF] hover:bg-[#5378F620] border-solid border-[1px] text-[0.9rem] p-2 rounded-[8px]"
            onClick={() => setShow(true)}
          >
            CANCEL
          </button>
        </div>
      </ModalContainer>
    </div>
  );
};

export default SearchAddress;
