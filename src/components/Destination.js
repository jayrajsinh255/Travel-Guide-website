import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
import Img1 from "../assets/4.jpg";
import Img2 from "../assets/6.jpg";
import Img3 from "../assets/1.jpg";
import Img4 from "../assets/9.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        heading="Mount Fuji"
        text="Mount Fuji, located in Japan, is an iconic and majestic symbol of natural beauty. Standing at 3,776 meters (12,389 feet) tall, it is Japan's highest peak. With its perfectly symmetrical cone shape and snow-capped summit, Mount Fuji is a sight to behold. It attracts visitors from around the world who come to witness its breathtaking vistas, hike its trails, and capture its beauty in photographs. A visit to Mount Fuji offers a serene and awe-inspiring experience in the presence of this legendary volcanic mountain."
        img1={Img1}
        img2={Img2}
      />

      <DestinationData
        heading="Rome colussum"
        text="Mount Fuji, located in Japan, is an iconic and majestic symbol of natural beauty. Standing at 3,776 meters (12,389 feet) tall, it is Japan's highest peak. With its perfectly symmetrical cone shape and snow-capped summit, Mount Fuji is a sight to behold. It attracts visitors from around the world who come to witness its breathtaking vistas, hike its trails, and capture its beauty in photographs. A visit to Mount Fuji offers a serene and awe-inspiring experience in the presence of this legendary volcanic mountain."
        img1={Img3}
        img2={Img4}
        reverse={true}
      />
    </div>
  );
};
export default Destination;
