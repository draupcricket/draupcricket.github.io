"use client";

// PlayerNames.tsx
const Team2 = () => {
  const players = [
      {
          name: "Harish Jangid",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Ningaraju Basavaraj",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Sanchit Agrawal",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Abdal Pasha",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Anubhav Kumar Singh",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Jayaraman S",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Dhruvraj Singh Rathore",
          image: "/player.png",
          type: "Batter",
          typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], // If batter with wicket keeper
      },
      {
          name: "Yash Raj Ojha",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Dhanvanthir Krishnamurthy",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Amit Pola",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Mohammed Ali Zaheer",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Dhanush P",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Ayush Thakur",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Mursheed",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
  ];
  
    return (
        <div className="md:grid md:grid-cols-2 md:pt-8">
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-2 border-b border-gray-300 py-2 m-2">
              
              <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full inline-block" />
              <p className="text-lg md:px-8 px-4">{player.name}</p>
              {Array.isArray(player.typeLogos) ? (
                player.typeLogos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={player.type}
                    title={player.type}
                    className="w-6 h-6 inline-block"
                  />
                ))
              ) : (
                <img
                  src={player.typeLogos}
                  alt={player.type}
                  title={player.type}
                  className="w-6 h-6 inline-block"
                />
              )}
            </div>
          ))}
        </div>
      );
    };
    
    export default Team2;