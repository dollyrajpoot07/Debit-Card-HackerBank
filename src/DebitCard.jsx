import React, { useState } from "react";
import cards from "../public/cards.json";
import "./DebitCard.css";

const DebitCard = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [isDecrypted, setIsDecrypted] = useState(false);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    setIsDecrypted(false); // Always encrypted when new card is selected
  };

  const handleCardBodyClick = () => {
    if (selectedCardIndex !== null) {
      setIsDecrypted((prev) => !prev);
    }
  };

  const formatCardNumber = (number, showFull) => {
    if (showFull) return number.match(/.{1,4}/g).join(" ");
    const visible = number.slice(0, 4);
    const masked = "X".repeat(number.length - 4);
    return (visible + masked).match(/.{1,4}/g).join(" ");
  };

  const encryptName = (name, showFull) => {
    if (showFull) return name;
    return name
      .split(" ")
      .map(() => "XXXX")
      .join(" ");
  };

  const selectedCard =
    selectedCardIndex !== null ? cards[selectedCardIndex] : null;

  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "500px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div
            className="debit-card-body"
            data-testid="debit-card-body"
            onClick={handleCardBodyClick}
          >
            {selectedCard ? (
              <>
                <div
                  className="debit-card-bank"
                  data-testid="debit-card-bank-name"
                >
                  {selectedCard.bank}
                </div>
                <div className="debit-card-no" data-testid="debit-card-no">
                  {formatCardNumber(selectedCard.number, isDecrypted)}
                </div>
                <br />
                <div
                  style={{ height: "45px", backgroundColor: "black" }}
                  className="debit-card-stripe"
                ></div>
                <p>
                  <span
                    className="debit-card-holder-name"
                    data-testid="debit-card-holder-name"
                  >
                    {encryptName(selectedCard.name, isDecrypted)}
                  </span>
                  <span
                    className="debit-card-date"
                    data-testid="debit-card-expiry-date"
                  >
                    {isDecrypted ? selectedCard.expiry : "XX/XX"}
                  </span>
                  <span className="debit-card-cvv" data-testid="debit-card-cvv">
                    {isDecrypted ? selectedCard.cvv : "XXX"}
                  </span>
                </p>
              </>
            ) : (
              <p style={{ textAlign: "center" }}>
                Click on a card to view details
              </p>
            )}
          </div>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>Card List</h3>
          <div className="debit-card-list" data-testid="debit-card-list">
            {cards.map((card, index) => (
              <div
                key={index}
                className="list-card"
                data-testid={`list-card-${index}`}
                onClick={() => handleCardClick(index)}
              >
                <p className="list-card-title">Card {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
