import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";





const FeedbackList = ({
   feedbackItems,
    isLoading,
     errorMessage,
    }: FeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
  <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
))}

    </ol>
  );
};

export default FeedbackList;
