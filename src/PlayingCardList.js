import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/");
  const fetchCard = async () => {
    await addCard("draw/");
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={ fetchCard }>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        { cards.map(cardData => (
          <PlayingCard key={ uuid() } front={ cardData.cards[0].image } />
        )) }
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
