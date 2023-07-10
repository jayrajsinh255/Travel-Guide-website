import "./TripStyles.css";

export default function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-img">
        <img alt="t_card_img" src={props.img} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
