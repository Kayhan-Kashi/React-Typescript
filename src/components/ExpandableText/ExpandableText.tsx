import { useState } from "react";

interface Props {
  children: string;
  onClickHandler?: () => void;
  minChar: number;
}

const ExpandableText = ({ children, onClickHandler, minChar }: Props) => {
  const getText = (lengthState: Boolean): string => {
    let text: string =
      lengthState === false ? children : children.substring(0, minChar);
    return text;
  };

  const [isTextShorten, setLengthState] = useState(false);

  const clickHandler = () => {
    if (onClickHandler) onClickHandler();
    setLengthState(!isTextShorten);
  };

  return (
    <>
      <div>
        {getText(isTextShorten)}
        <button onClick={clickHandler}>
          {isTextShorten ? "More" : "Less"}
        </button>
      </div>
    </>
  );
};

export default ExpandableText;
