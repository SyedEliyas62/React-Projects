import { useContext, useState } from "react";
import { FeedbackItemContext } from "../components/contexts/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

export function  useFeedbackItemsContext() {
    const context =  useContext(FeedbackItemContext);
       if(!context){
        throw new Error(
          "FeedbackItemsContext is not defined in FeedbackList component"
        );
      }
      return context;
  }

  export function useFeedbackItems = { 
      const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem>([]);
      const [isLoading, setIsLoading] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
      
    useEffect(() => {

    const fetchFeedbacksItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (Error) {
        setErrorMessage("Something went wrong.Please try again later.");
      }
      setIsLoading(false);
    };
    fetchFeedbacksItems();
  }, []);
}