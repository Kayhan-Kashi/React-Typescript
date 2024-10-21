import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <div className={styles.container}>
        <FaHeart color="#ff6b81" size={20} onClick={toggle} />
      </div>
    );
  return (
    <div className={styles.container}>
      <FaRegHeart color="#ff6b81" size={20} onClick={toggle} />
    </div>
  );
};

export default Like;
