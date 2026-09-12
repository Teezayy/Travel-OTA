import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const bookTrip = async () => {
    const res = await fetch("/.netlify/functions/book", {
      method: "POST",
      body: JSON.stringify({ destination: "Dubai" })
    });

    const data = await res.json();
    alert("Booking ID: " + data.bookingId);
  };

  return (
    <div style={{fontFamily:"sans-serif", padding:20}}>
      <h1>🌍 TravelNow</h1>

      <input placeholder="Where to?" />
      <button onClick={bookTrip}>Book Now</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
