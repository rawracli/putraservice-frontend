import React from "react";

function StackedSection() {
  const cards = [
    { id: 1, title: "Card 1", color: "#52B2CF" },
    { id: 2, title: "Card 2", color: "#E5A36F" },
    { id: 3, title: "Card 3", color: "#9CADCE" },
    { id: 4, title: "Card 4", color: "#D4AFB9" },
  ];
  return (
    <div className="w-[90%] mx-auto">
      <ul
        id="cards"
        className="list-none pl-0 grid grid-cols-1 gap-[var(--cardMargin)]"
        style={{
          gridTemplateRows: `repeat(var(--cards), var(--cardHeight))`,
          paddingBottom: `calc(var(--cards) * var(--cardTopPadding))`,
          marginBottom: `var(--cardMargin)`,
        }}
      >
        {cards.map((card) => (
          <li
            key={card.id}
            className="card sticky top-0"
            style={{
              "--index": card.id,
              paddingTop: `calc(var(--index) * var(--cardTopPadding))`,
            }}
          >
            <div
              className="card-body box-border p-[30px] rounded-[50px] shadow-[0_0_30px_rgba(0,0,0,0.3)] flex justify-center items-center transition-all duration-500"
              style={{
                backgroundColor: card.color,
                height: `var(--cardHeight)`,
              }}
            >
              <h2 className="text-[2.5em]">{card.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackedSection;
