import { PiBaby } from "react-icons/pi";

export default function Baby({ style }) {
  return (
    <div className="baby-box-wrapper" style={style}>
      <div className="baby">
        <PiBaby />
      </div>
      <div> Baby </div>
    </div>
  );
}
