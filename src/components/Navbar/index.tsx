// import { LOGO } from "../theme/themeIcons";

import { Link, useLocation } from "react-router-dom";
import { useAddressContext } from "../Context/address";
import SearchField from "../Search";
import { GrBookmark } from "react-icons/gr";
import { SlShare } from "react-icons/sl";
import { searchTags } from "../../utils/data";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useModalContext } from "../Context/modal";

const Navbar = () => {
  const { address } = useAddressContext();
  const { setShow } = useModalContext();
  // const navigate = useNavigate();

  // const address = localStorage.getItem("addressState");
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <nav
      className={` ${
        !isHomePage ? "bg-[#F2F6FD]" : "bg-white"
      }  fixed w-[100%] h-fit z-20 py-[1rem] px-[1.5rem] lg:px-[5rem]`}
    >
      <div className="flex justify-between items-center ">
        <div className="flex items-center font-clash">
          <Link className="flex items-center" to="/">
            <span className=" tracking-[0.5rem] font-[900]">SPOTTA</span>
            <span className="h-[1rem] w-[1.4rem] text-[0.6rem] p-[0.15rem] rounded-[4px] text-center text-[#fff] bg-[#5378F6]">
              NG
            </span>
          </Link>
        </div>
        {/* <LOGO /> */}
        {!isHomePage && (
          <div className="hidden lg:flex">
            <SearchField />
          </div>
        )}
        <div className="flex gap-2 font-[400] items-center">
          <p>Welcome!</p>
          <div className="h-[2.5rem] w-[2.5rem] hover:scale-[1.05] cursor-pointer">
            <img
              className=" rounded-[50%]"
              src="/Image/profile.png"
              alt="profile"
            />
          </div>
        </div>
      </div>

      {!isHomePage && (
        <div>
          <div className="pt-4 lg:hidden flex">
            <SearchField />
          </div>
          <div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="mb-2 mt-3">
                <p className="text-[1rem] lg:text-[1.2rem] font-[500]">
                  {address || "Bonny and Clyde Street, Ajao Estate, Lagos."}
                </p>
                <p className="text-[0.8rem] lg:text-[1rem] font-[600]">
                  “450”
                  <span className="font-normal ">
                    {"  "}Reviews (People are raving about the selected
                    location)
                  </span>
                </p>
              </div>
              <div className="flex justify-between lg:justify-end flex-grow items-center gap-3">
                <button
                  className="bg-[#3366FF] text-[#fff] hover:bg-[#3366FF95] text-[0.8rem] py-3 px-5 rounded-[8px]"
                  onClick={() => setShow(true)}
                >
                  LEAVE A REVIEW
                </button>
                <button className="border-[#3366FF] hover:bg-[#5378F620] border-solid border-[1px] p-3 rounded-[8px]">
                  <GrBookmark style={{ color: "#3366FF" }} />
                </button>
                <button className="border-[#3366FF] hover:bg-[#5378F620] border-solid border-[1px] p-3 rounded-[8px]">
                  <SlShare style={{ color: "#3366FF" }} />
                </button>
              </div>
            </div>
            <div className="overflow-x-scroll lg:overflow-hidden w-[100%] mt-2 lg:mt-0 gap-3 lg:gap-0 flex justify-between items-center pb-1">
              {searchTags.map((e, i) => (
                <div
                  key={i}
                  className="border-[#1E1E1E50] text-center w-[5rem] lg:w-auto text-[#1E1E1E] text-[0.75rem] bg-white hover:bg-[#F1F1F1] border-solid rounded-[6px] border-[1px] py-[2px] px-2"
                >
                  {e}
                </div>
              ))}
              <div className=" h-6 w-6 flex items-center justify-center text-[#1E1E1E] bg-white text-[0.75rem] hover:bg-[#F1F1F1] rounded-[50%] ">
                <MdOutlineArrowForwardIos style={{ color: "1E1E1E" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
