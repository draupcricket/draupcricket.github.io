"use client";

// PlayerNames.tsx
const Team4 = () => {
  const players = [
      {
          name: "Sudeep Rauta",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Raj Swapnil",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Harshit",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Shashank Srivastava",
          image: "/player.png",
          type: "Batter",
          typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], // If batter with wicket keeper
      },
      {
          name: "Akash Doifode",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Nagam Ram",
          image: "/player.png",
          type: "Batter",
          typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], // If batter with wicket keeper
      },
      {
          name: "Mobin Kurian Baby",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Lov Asawa",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Puja Gupta",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Md Mahabub Alam",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Krishna Sahani",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Karthik Achar",
          image: "/player.png",
          type: "Batter",
          typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], // If batter with wicket keeper
      },
      {
          name: "Dhrubaroop Nandi",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Chandan",
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
    
    export default Team4;