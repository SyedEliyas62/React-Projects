
import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";


const ButtonGroup = () => {
const markAllAsComplete = useItemStore(state =>state.markAllAsComplete);
const markAsInComplete = useItemStore(state =>state.markAsInComplete);
const resetToInitial= useItemStore(state =>state.resetToInitial);
const  removeAllItems = useItemStore(state =>state. removeAllItems);



  const secondaryButton = [
    {
      text: " Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: " Remove all items",
      onClick: removeAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButton.map(({ text, onClick }) => (
        <Button key={text} buttontype="secondary" onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
