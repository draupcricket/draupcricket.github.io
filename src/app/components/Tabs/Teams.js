"use client";


// PlayerNames.tsx
const Teams = () => {
    const players = [
      {
        name: "Player 1",
        image: "/player.png",
        type: "Batsman",
        typeLogos: "/batsman-logo.png",
      },
      {
        name: "Player 2",
        image: "/player.png",
        type: "Bowler",
        typeLogos: "/bowler-logo.png",
      },
      {
        name: "Player 3",
        image: "/player.png",
        type: "Batsman",
        typeLogos: ["/bowler-logo.png","wicket-keeper.png"],
      },
      {
        name: "Player 4",
        image: "/player.png",
        type: "Bowler",
        typeLogos: "/bowler-logo.png",
      },
      {
        name: "Player 5",
        image: "/player.png",
        type: "Batsman",
        typeLogos: "batsman-logo.png",
      },
      {
        name: "Player 6",
        image: "/player.png",
        type: "Bowler",
        typeLogos: ["batsman-logo.png","captain.png"],
      },
      {
        name: "Player 7",
        image: "/player.png",
        type: "Batsman",
        typeLogos: "/batsman-logo.png",
      },
      {
        name: "Player 8",
        image: "/player.png",
        type: "Bowler",
        typeLogos: "/bowler-logo.png",
      },
      {
        name: "Player 9",
        image: "/player.png",
        type: "Batsman",
        typeLogos: "/batsman-logo.png",
      },
      {
        name: "Player 10",
        image: "/player.png",
        type: "Bowler",
        typeLogos: ["/batsman-logo.png", "/bowler-logo.png"],
      },
      {
        name: "Player 11",
        image: "/player.png",
        type: "Batsman",
        typeLogos: "/batsman-logo.png",
      },
      {
        name: "Player 12",
        image: "/player.png",
        type: "Bowler",
        typeLogos: "/bowler-logo.png",
      },
    ];
  
    return (
        <div className="md:grid md:grid-cols-2 md:pt-8">
          {players.map((player, index) => (
            <div key={index} className="flex items-center space-x-2 border-b border-gray-300 py-2 m-2">
              
              <Image src={player.image} alt={player.name} className="w-10 h-10 rounded-full inline-block" />
              <p className="text-lg md:px-8 px-4">{player.name}</p>
              {Array.isArray(player.typeLogos) ? (
                player.typeLogos.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    alt={player.type}
                    title={player.type}
                    className="w-6 h-6 inline-block"
                  />
                ))
              ) : (
                <Image
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
    
    export default Teams;