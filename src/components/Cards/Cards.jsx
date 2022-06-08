import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="Cards-card">
      <div className="Card-img-container">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="Cards-card-info">
        <h2 className="Cards-card-title">{props.title}</h2>
        <a
          href={props.link}
          alt="image not available"
          className="Cards-card-link"
        >
          Watch Now
        </a>
      </div>
    </div>
  );
};

export default Cards;
