import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAddressContext } from "../../components/Context/address";
import { useState } from "react";

const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { setAddress } = useAddressContext();
  console.log(input);
  return (
    <div className="w-[100%] h-fit pt-[4rem] lg:pt-0 flex flex-col justify-center lg:flex-row ">
      <div className="w-[100%] lg:w-[50%] text-[#1e1e1e] flex flex-col justify-center gap-[1.5rem] lg:gap-4">
        <p className="w-[100%] lg:w-[32rem] font-[700] text-[3.5rem] lg:text-[4rem] leading-[4rem] lg:leading-[4.5rem]">
          Find a place you will love to live!
        </p>
        <p className="w-[100%] lg:w-[32rem] font-[400] text-[1.2rem] leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.8rem]">
          See through the lenses of people who have lived or visited the
          neighbourhood you might have in mind.
        </p>
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              setAddress(input);
              navigate("/search");
            }}
          >
            <div className="w-[100%] lg:w-[36rem] h-[2.8rem] rounded-[8px] flex items-center bg-[#F3F7FE] border-[1px] border-solid border-[#D4DCF1] px-3">
              <span className="pr-3">
                <CiSearch
                  style={{
                    height: "1.5rem",
                    width: "1.5rem",
                    color: "#0D2159",
                  }}
                />
              </span>
              <input
                className="w-[100%] bg-[#F3F7FE] placeholder:text-[#484851] outline-0 border-0"
                required
                type="text"
                name="search"
                placeholder="Enter Address"
                value={input}
                onChange={(e) => {
                  e.preventDefault();
                  setInput(e.target.value);
                }}
                id="search"
              />
            </div>
            <button className="bg-[#3366FF] mt-6 lg:mt-4 text-[#fff] text-[0.8rem] py-3 px-5 rounded-[8px]">
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div className=" lg:w-[50%] h-[100%]  lg:flex justify-center">
        <img
          className="h-[100%] lg:w-[50%]"
          src="/Image/Herobg.png"
          alt="hero-bg"
        />
      </div>
    </div>
  );
};

export default HomePage;
