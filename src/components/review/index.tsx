import { IoIosStar } from "react-icons/io";
import { IReview } from "../../utils/data";
import { LIKE, MESSAGE, UNLIKE } from "../theme/themeIcons";

const ReviewCard = ({ props }: { props: IReview }) => {
  return (
    <div className="gap-2 border-solid border-b-[2px] pb-4 border-[#D9D9D9]">
      <div className="h-[2rem] w-[100%] flex items-center gap-2 ">
        <img
          className="h-[1.8rem] w-[1.8rem] rounded-[50%]"
          src="/Image/user.png"
          alt="user"
        />
        <p className="text-[14px] text-[#1E1E1E]">{props.user}</p>
        {props.isAdmin && (
          <p className="text-[14px] text-[#1E1E1E] font-[700]">(Admin)</p>
        )}
        <p className="text-[14px] text-[#1E1E1E99]">5 months ago</p>
        <div className="flex-grow text-right text-[14px] text-[#1E1E1E] flex items-center">
          <span className="w-[100%] flex items-center justify-end">
            <IoIosStar style={{ color: "#FABB07" }} />
            4.0
          </span>
        </div>
      </div>
      <p className="text-[#18181B] text-[14px]">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are several grocery stores and
        Supermarkets.
      </p>
      <div className="text-[#0D2159] text-[14px] flex items-center gap-6">
        <span className="h-[1.5rem] flex items-center cursor-pointer hover:opacity-[0.9]">
          <LIKE />
          {props.like}
        </span>
        <span className=" h-[1.5rem] flex items-center cursor-pointer hover:opacity-[0.9]">
          <UNLIKE />
          {props.dislike}
        </span>{" "}
        <span className="flex items-center cursor-pointer hover:opacity-[0.9]">
          <MESSAGE />
          {props.comments}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
