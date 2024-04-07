import { createContext, useContext } from "react";
export type ModalContent = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MyModalContext = createContext<ModalContent>({
  show: false, // set a default value
  setShow: () => {},
});
export const useModalContext = () => useContext(MyModalContext);
