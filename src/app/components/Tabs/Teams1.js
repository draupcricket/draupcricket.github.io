"use client";

// PlayerNames.tsx
const Team1 = () => {
  const players = [
      {
          name: "Nikhil K Raman",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Vaibhav Bhojane",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Manoj B Bhamsagar",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Mayank Jain",
          image: "/player.png",
          type: "Bowler",
          typeLogos: "/bowler-logo.png",
      },
      {
          name: "Vishnu BG",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], // If all-rounder
      },
      {
          name: "Chakresh Kolluru",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Sambhram Puranik",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Vidhat Bhat",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Prabakaran Sermakani",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Rahul Kumar",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Krishna Chaitanya",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Seraj S",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Sukith",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
      {
          name: "Sachin Kalsi",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], // If all-rounder
      },
  ];
  
    return (
        <div className="md:grid md:grid-cols-2 md:pt-8">
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-2 border-b border-gray-300 py-1 m-2">
              
              <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full inline-block" />
              <p className="text-lg md:px-8 px-4">{player.name}</p>
              {Array.isArray(player.typeLogos) ? (
                player.typeLogos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={player.type}
                    title={player.type}
                    className="w-6 h-8 inline-block"
                  />
                ))
              ) : (
                <img
                  src={player.typeLogos}
                  alt={player.type}
                  title={player.type}
                  className="w-6 h-8 inline-block"
                />
              )}
            </div>
          ))}
        </div>
      );
    };
    
    export default Team1;