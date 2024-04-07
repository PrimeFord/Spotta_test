import { ReactNode } from "react";
import Navbar from "../../components/Navbar";

interface IMainContainer {
  children: ReactNode;
}
const MainContainer = ({ children }: IMainContainer) => {
  return (
    <div className="w-[100%]">
      <Navbar />
      <div className="px-[1.5rem] lg:px-[5rem]">{children}</div>
    </div>
  );
};

export default MainContainer;
