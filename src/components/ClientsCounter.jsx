import React, { useState, useEffect } from "react";

const ClientCounter = () => {
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visitors");
        const data = await response.json();
        setClientCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    const addVisitor = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setClientCount(data.count);
      } catch (error) {
        console.error("Error adding visitor:", error);
      }
    };

    fetchCount();
    addVisitor();
  }, []);

  return (
    <div className="client-counter">
      <div className="counter-display">
        <p className="count">{clientCount}</p>
        <p className="description">Customers Trust Us</p>
      </div>
    </div>
  );
};

export default ClientCounter;
