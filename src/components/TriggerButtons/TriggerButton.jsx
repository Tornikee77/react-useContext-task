import styles from "./TriggerButton.module.css";
import { MessageContext } from "../context/MessageProvider";
import { useContext } from "react";

const TriggerButton = ({ children }) => {
  const { setMessage, setError } = useContext(MessageContext);

  const handleSucsses = () => {
    setMessage("Succsesfull!");
  };
  const handleError = () => {
    setError("OOPS Error!");
  };
  return (
    <div>
      <button onClick={handleSucsses}>succses</button>
      <button onClick={handleError}>error</button>
    </div>
  );
};

export default TriggerButton;
