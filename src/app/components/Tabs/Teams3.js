"use client";

// PlayerNames.tsx
const Team3 = () => {
  const players = [
      {
          name: "Saquib Ameer Khan",
          image: "/player.png",
          type: "Bowler",
          typeLogos: "/bowler-logo.png",
      },
      {
          name: "Lokesh Kumar",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Jagan Pradeep",
          image: "/player.png",
          type: "Batter",
          typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"],
      },
      {
          name: "Sparsh Dhand",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"],
      },
      {
          name: "Jayaprakash P",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"],
      },
      {
          name: "Amit Kumar Mishra",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"],
      },
      {
          name: "Ishtjot Singh",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Kishor Venkatesh R",
          image: "/player.png",
          type: "Bowler",
          typeLogos: "/bowler-logo.png",
      },
      {
          name: "Hritank Singhal",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"],
      },
      {
          name: "Harpreet Singh Saluja",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png"],
      },
      {
          name: "Rohit Babu Devadiga",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Kumar Vedavyas",
          image: "/player.png",
          type: "Batter",
          typeLogos: "/batsman-logo.png",
      },
      {
          name: "Shubhodeep Bhowmick",
          image: "/player.png",
          type: "Bowler",
          typeLogos: "/bowler-logo.png",
      },
      {
          name: "Prashanth PS",
          image: "/player.png",
          type: "All-rounder",
          typeLogos: ["/batsman-logo.png", "/bowler-logo.png"],
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
    
    export default Team3;