import React from 'react'
import Card from "../Card/Card"
import{ cardsData } from "./CardsData"
import "./Cards.css"

function index() {
  return (
    <div className="Cards">

    {cardsData.map((card, id) => {
      return (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.progressBarValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      );
    })}
  </div>
      
  )
}

export default index
