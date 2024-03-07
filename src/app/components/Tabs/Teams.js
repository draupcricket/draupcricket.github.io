// Team.js
"use client";

const Team = ({ players }) => {
  return (
    <div className="md:grid md:grid-cols-2 md:pt-8">
      {players.map((player, index) => (
        <div key={index} className="flex items-center space-x-2 border-b border-gray-300 border-opacity-30 py-1 m-2">
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

export default Team;
