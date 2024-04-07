import { IoMdClose } from "react-icons/io";

interface IModalContainer {
  children: any;
  isVisible: boolean;
  onClose: any;
}
const ModalContainer = ({ children, isVisible, onClose }: IModalContainer) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="w-[100vw] h-[100vh] fixed overflow-scroll inset-0 bg-[#1D3045] bg-opacity-50 backdrop-blur-sm z-50 flex overflow-x-hidden justify-center lg:items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <IoMdClose
        onClick={() => {
          onClose();
        }}
        style={{
          color: "#fff",
          fontSize: "1.5rem",
          position: "absolute",
          top: "5rem",
          right: "1rem",
        }}
      />
      <div className="h-fit mt-[7rem] lg:mt-0 p-[1rem] lg:p-[2rem] w-[90%] lg:w-[50%] bg-white rounded-[0.5rem]">
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
