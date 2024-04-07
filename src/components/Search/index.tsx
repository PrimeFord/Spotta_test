import { CiSearch } from "react-icons/ci";

const SearchField = () => {
  return (
    <div className="bg-[#fff] w-[100%] rounded-[8px]">
      <form
        action=""
        onSubmit={() => {
          // navigate("/search");
          // setAddress(input);
        }}
      >
        <div className="w-[100%] lg:w-[36rem] h-[2.5rem] rounded-[8px] flex items-center bg-[#fff] border-[1px] border-solid border-[#D4DCF1] px-3">
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
            className="w-[100%] bg-[#fff] placeholder:text-[#484851] outline-0 border-0"
            required
            type="text"
            name="search"
            placeholder="Enter Address"
            // value={}
            // onChange={(e) => {
            //   // setInput(e.target.value);
            // }}
            id="search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchField;
