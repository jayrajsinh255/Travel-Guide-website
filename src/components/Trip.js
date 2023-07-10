import TripData from "./TripData";
import "./TripStyles.css";
import Img1 from "../assets/5.jpg";
import Img2 from "../assets/6.jpg";
import Img3 from "../assets/8.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Discover more using following links</p>
      <div className="tripcards">
        <TripData
          heading="Trip in Indonesia"
          text="Vestibulum eleifend ultricies mi, ac fermentum justo ultrices in. Phasellus rutrum elit at est volutpat, eget blandit justo cursus"
          img={Img1}
        />
        <TripData
          heading="Trip in India"
          text="Vestibulum eleifend ultricies mi, ac fermentum justo ultrices in. Phasellus rutrum elit at est volutpat, eget blandit justo cursus"
          img={Img2}
        />
        <TripData
          heading="Trip in France"
          text="Vestibulum eleifend ultricies mi, ac fermentum justo ultrices in. Phasellus rutrum elit at est volutpat, eget blandit justo cursus"
          img={Img3}
        />
      </div>
    </div>
  );
}
export default Trip;
