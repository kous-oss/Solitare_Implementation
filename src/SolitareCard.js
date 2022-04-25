import React from "react";

function SolitareCard(props) {
  let symbol;
  let res = props.cardId.split(" ");
  // console.log(res);
  let cardId = res[1];
  let color1 = res[0];
  console.log("Hey" + cardId + " " + color1);
  if (props.symbol === "heart") {
    symbol = (
      <span role="img" aria-label="heart">
        ️♥︎
      </span>
    );
  } else if (props.symbol === "spade") {
    symbol = (
      <span role="img" aria-label="spade">
        ♠︎
      </span>
    );
  } else if (props.symbol === "flower") {
    symbol = (
      <span role="img" aria-label="flower">
        ♣︎
      </span>
    );
  } else {
    symbol = (
      <span role="img" aria-label="diamond">
        ♦︎
      </span>
    );
  }

  if (cardId == 10) {
    return (
      <div
        className="solitare-card"
        key="10"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header">10</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>{symbol}</div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>{symbol}</div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer">10</div>
      </div>
    );
  } else if (cardId == 9) {
    return (
      <div
        className="solitare-card"
        key="9"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-9-header">9</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>{symbol}</div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer card-9-footer">9</div>
      </div>
    );
  } else if (cardId == 8) {
    return (
      <div
        className="solitare-card"
        key="8"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-8-header">️8</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer card-8-footer">8</div>
      </div>
    );
  } else if (cardId == 7) {
    return (
      <div
        draggable={true}
        className="solitare-card"
        key="7"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-7-header">7</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>{symbol}</div>
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer card-7-footer">7</div>
      </div>
    );
  } else if (cardId == 6) {
    return (
      <div
        className="solitare-card"
        key="6"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-6-header">6</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>

          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer card-6-footer">6</div>
      </div>
    );
  } else if (cardId == 5) {
    return (
      <div
        className="solitare-card"
        key="5"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-5-header">5</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
          <div>{symbol}</div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer card-5-footer">5</div>
      </div>
    );
  } else if (cardId == 4) {
    return (
      <div
        className="solitare-card"
        key="4"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-4-header">4</div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="solitare-content">
          <div>
            {symbol}
            {symbol}
          </div>
        </div>
        <div className="footer card-4-footer">4</div>
      </div>
    );
  } else if (cardId == 3) {
    return (
      <div
        className="solitare-card"
        key="3"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-3-header">3</div>
        <div className="solitare-content">
          <div>{symbol}</div>

          <div>{symbol}</div>

          <div>{symbol}</div>
        </div>
        <div className="footer card-3-footer">3</div>
      </div>
    );
  } else if (cardId == 2) {
    return (
      <div
        className="solitare-card"
        key="2"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-2-header">2</div>
        <div>{symbol}</div>

        <div>{symbol}</div>
        <div className="footer card-2-footer">2</div>
      </div>
    );
  } else if (cardId == 1) {
    return (
      <div
        className="solitare-card"
        key="1"
        style={{ color: color1 === 0 ? "red" : "black" }}
      >
        <div className="header card-A-header">A</div>
        <div>{symbol}</div>

        <div className="footer card-A-footer">A</div>
      </div>
    );
  } else if (cardId == 11) {
    return (
      <div
        className="solitare-card"
        key="11"
        style={{ color: color1 === 0 ? "red" : "black" }}
      >
        <div className="header card-A-header">K{symbol}</div>
        <div>KING</div>

        <div className="footer card-A-footer">K{symbol}</div>
      </div>
    );
  } else if (cardId == 12) {
    return (
      <div
        className="solitare-card"
        key="12"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-A-header">Q{symbol}</div>
        <div>QUEEN</div>

        <div className="footer card-A-footer">Q{symbol}</div>
      </div>
    );
  } else {
    return (
      <div
        className="solitare-card"
        key="13"
        style={{ color: color1 == 0 ? "red" : "black" }}
      >
        <div className="header card-A-header">J{symbol}</div>
        <div>JACK</div>

        <div className="footer card-A-footer">J{symbol}</div>
      </div>
    );
  }
}

export default SolitareCard;
