import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "UserItemsContext must be used within a ItemsContextProvider"
    );
  }
  return context;
}
