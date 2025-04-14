import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TFeedbackItem } from "../../lib/types";
import { useFeedbackItems } from "../../lib/hooks";


type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
}

type TFeedbackItemContext = {
  isLoading: boolean;
  filteredFeedbackItems : TFeedbackItem[];
  errorMessage: string;
  companyList: string[];
  
  handleAddToList: (text: string) => void;
  handleSelectCompany : (company:string) => void;
};

export const FeedbackItemContext = createContext<TFeedbackItemContext | null>(null);

const FeedbackItemsContextProvider = ({ children }:FeedbackItemsContextProviderProps ) => {
   useFeedbackItems();
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );
  
  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleAddToList = async (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: company,
      badgeLetter: company.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <FeedbackItemContext.Provider
      value={{
        filteredFeedbackItems,
        handleSelectCompany,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
      }}
    >
      {children}
    </FeedbackItemContext.Provider>
  );
};

export default FeedbackItemsContextProvider;


