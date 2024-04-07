import { createContext, useContext } from "react";
export type AddressContent = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
};
export const MyAddressContext = createContext<AddressContent>({
  address: "", // set a default value
  setAddress: () => {},
});
export const useAddressContext = () => useContext(MyAddressContext);
