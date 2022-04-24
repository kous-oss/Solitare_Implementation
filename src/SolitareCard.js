import React from "react";
import "./solitare_card.css";

function SolitareContainer(props) {
  let symbol;
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

  return (
    <div className="solitare-container">
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header">10️</div>
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

      <div className="solitare-card" style={{ color: props.color || "red" }}>
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
      <div className="solitare-card" style={{ color: props.color || "red" }}>
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
      <div className="solitare-card" style={{ color: props.color || "red" }}>
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
      <div className="solitare-card" style={{ color: props.color || "red" }}>
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
      <div className="solitare-card" style={{ color: props.color || "red" }}>
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

      <div className="solitare-card" style={{ color: props.color || "red" }}>
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
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header card-3-header">3</div>
        <div className="solitare-content">
          <div>{symbol}</div>

          <div>{symbol}</div>

          <div>{symbol}</div>
        </div>
        <div className="footer card-3-footer">3</div>
      </div>
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header card-2-header">2</div>
        <div>{symbol}</div>

        <div>{symbol}</div>
        <div className="footer card-2-footer">2</div>
      </div>
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header card-A-header">A</div>
        <div>{symbol}</div>

        <div className="footer card-A-footer">A</div>
      </div>
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header card-A-header">K</div>
        <div>KING</div>

        <div className="footer card-A-footer">K</div>
      </div>
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header card-A-header">Q</div>
        <div>QUEEN</div>

        <div className="footer card-A-footer">Q</div>
      </div>
      <div className="solitare-card" style={{ color: props.color || "red" }}>
        <div className="header card-A-header">J</div>
        <div>JACK</div>

        <div className="footer card-A-footer">J</div>
      </div>
    </div>
  );
}

export default SolitareContainer;
