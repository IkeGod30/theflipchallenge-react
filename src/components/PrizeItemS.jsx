import vacation from "./assets/vacate.jpg";

export default function PrizeItem(props) {
  return (
    <div>
      <div>
        <figure className="disable">
          <img className="notReady" alt="cruise" src={vacation} />
        </figure>
        <figcaption
          data-bs-toggle="tooltip"
          title="Source: 'NA'"
          data-bs-placement="top"
        >
          Vacation in Ghana
        </figcaption>
      </div>
    </div>
  );
}
