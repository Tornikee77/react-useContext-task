// import styles from "./Notification.module.css";
import { MessageContext } from "../context/MessageProvider";
import { useContext } from "react";
const Notification = () => {
  const { message, error } = useContext(MessageContext);

  return (
    <div>
      <p>{message}</p>
      <p>{error}</p>
    </div>
  );
};
export default Notification;
