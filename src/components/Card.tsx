import { Restaurant } from "../hooks/useSearch";

export type CardProps = {
  restaurant: Restaurant;
};

export default function card({ restaurant }: CardProps) {
  return (
    <div className="cell medium-6 large-4 small-12">
      <div className="card" style={{ width: "80%", margin: "20px auto" }}>
        <div className="card-divider">{restaurant.name}</div>
        <img alt="some thing wrong" src={restaurant.imageURL} />
        <div className="card-section">
          <h4>My card heading</h4>
          <p>
            It has an easy to override visual style, and is appropriately
            subdued.
          </p>
        </div>
      </div>
    </div>
  );
}
