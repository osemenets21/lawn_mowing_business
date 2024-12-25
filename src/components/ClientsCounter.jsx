import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const ClientCounter = () => {
  const [clientCount, setClientCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const { number } = useSpring({
    from: { number: prevCount },
    number: clientCount,
    delay: 200,
    config: { duration: 800 },
  });

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visitors");
        const data = await response.json();
        setPrevCount(clientCount);
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
        setPrevCount(clientCount); 
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
        <div className="counter-container">
          <p className="count">
            <div className="wrapper">
              <animated.span className="span">
                {number.to((n) => Math.floor(n))}
              </animated.span>
              <span className="description"> CUSTOMERS TRUST US</span>
            </div>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default ClientCounter;
