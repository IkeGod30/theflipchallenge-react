import vacation from "./assets/vacate.jpg";

export default function PrizeItem(props) {
  return (
    <div>
      <div>
        <figure className="disable">
          <img className="notReady" alt={props.alt} src={props.image} />
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
