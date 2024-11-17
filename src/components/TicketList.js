import React from "react";
import TicketIItem from "./TicketItem";
export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketIItem
          key={ticket.id}
          dispatch={dispatch}
          ticket={ticket}
        ></TicketIItem>
      ))}
    </div>
  );
}
