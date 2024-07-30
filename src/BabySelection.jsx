import Baby from "./Baby";
import { RiArrowGoBackLine } from "react-icons/ri";
export default function BabySelection() {
  const iconStyle = {
    transform: "none",
    cursor: "default",
  };

  return (
    <>
      <div className="baby-component-wrapper">
        <div className="go-back-arrow">
          <RiArrowGoBackLine />
        </div>

        <Baby style={iconStyle} />
        <div className="gender-selection-wrapper">
          <div className="gender-selector girl">Girl</div>
          <div className="gender-selector gender-neutral"> Gender Neutral</div>
          <div className="gender-selector boy">Boy </div>
        </div>
      </div>
    </>
  );
}
