import "./solitare_card.css";
import Context from "./Context.js";
import { useContext } from "react";

function CardBack() {
  const cardCtxt = useContext(Context);
  console.log(cardCtxt);

  function handleFlip(e) {
    e.target.className += " anime";
    setTimeout(() => {
      cardCtxt.visibilityOfCards();
    }, 500);
  }

  return (
    <div className="back-card" onClick={handleFlip}>
      <img
        src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg"
        alt=""
      />
    </div>
  );
}

export default CardBack;
