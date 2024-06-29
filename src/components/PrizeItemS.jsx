import vacation from "./assets/vacate.jpg";

export default function PrizeItem(props) {
  const onPrizeImageClick = () => {
    props.onClick(props.framesrc);
  };
  return (
    <div onClick={onPrizeImageClick}>
      <div>
        <figure className="disable">
          <img
            className="notReady"
            // style={{ width: 300}}
            alt={props.alt}
            src={props.image}
          />
        </figure>
        <figcaption
          data-bs-toggle="tooltip"
          title={props.title}
          data-bs-placement="top"
        >
          {props.description}
        </figcaption>
      </div>
    </div>
  );
}
