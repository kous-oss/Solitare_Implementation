import React, { useState } from "react";
import "./solitare_card.css";
import CardBack from "./CardBack.js";
import Context from "./Context.js";
import SolitareCard from "./SolitareCard";

function SolitareContainer(props) {
  const [cardId, setCardId] = useState();

  const [showCards, setShowCards] = useState(false);

  const changeCardVisibility = () => {
    //console.log(showCards);
    if (!showCards) {
      setShowCards((s) => !s);
    }
    setCardId(
      Math.floor((Math.random() * 100) % 2) +
        " " +
        Math.floor((Math.random() * 100) % 13)
    );
  };

  return (
    <Context.Provider value={{ visibilityOfCards: changeCardVisibility }}>
      <div className="solitare-container">
        <div className="card_empty">
          <div style={{ display: "flex" }}>
            <CardBack />
            <div>
              {showCards && (
                <SolitareCard className="marginRight" cardId={cardId} />
              )}
            </div>
          </div>
          <div className="empty-card-container">
            <div className="empty-card"></div>
            <div className="empty-card"></div>
            <div className="empty-card"></div>
            <div className="empty-card"></div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default SolitareContainer;
