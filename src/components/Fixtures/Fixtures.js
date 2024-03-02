import React, { useState } from 'react';
import {Bracket} from 'react-tournament-bracket';

const TEAMS = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];

function Fixtures() {
  const [round1Results, setRound1Results] = useState([]);
  const [topTwoTeams, setTopTwoTeams] = useState([]);

  const handleMatchClick = (team1, team2) => {
    // Replace this with your logic to determine winner/loser
    const winner = team1; // Placeholder winner (replace with actual logic)
    setRound1Results([...round1Results, { team1, team2, winner }]);
  };

  const calculateTopTwo = () => {
    const teamPoints = {};
    round1Results.forEach(match => {
      teamPoints[match.winner] = (teamPoints[match.winner] || 0) + 3;
      if (match.winner !== match.winner.toUpperCase()) {
        teamPoints[match.winner.toUpperCase()] = (teamPoints[match.winner.toUpperCase()] || 0) + 1;
      }
    });
    const sortedTeams = Object.entries(teamPoints).sort((a, b) => b[1] - a[1]);
    setTopTwoTeams(sortedTeams.slice(0, 2).map(([teamName]) => teamName));
  };

  const handleRound2Click = () => {
    calculateTopTwo();
  };

  const fixtures = [
    { name: TEAMS[0], opponent: TEAMS[2] },
    { name: TEAMS[1], opponent: TEAMS[3] },
    { name: round1Results[0]?.winner, opponent: round1Results[1]?.winner }, // Check for undefined winner
    { name: round1Results[2]?.winner, opponent: round1Results[3]?.winner }, // Check for undefined winner
  ];

  return (
    <div>
      <h1>Tournament</h1>
      <h2>Round 1</h2>
      {TEAMS.map((team1, index) => (
        <div key={index}>
          {TEAMS[(index + 2) % TEAMS.length] !== undefined && (
            <button onClick={() => handleMatchClick(team1, TEAMS[(index + 2) % TEAMS.length])}>
              {team1} vs {TEAMS[(index + 2) % TEAMS.length]}
            </button>
          )}
        </div>
      ))}
      {round1Results.length === TEAMS.length / 2 && (
        <button onClick={handleRound2Click}>Simulate Round 2</button>
      )}
      <h2>Round 2</h2>
      {round1Results.map((match, index) => (
        <div key={index}>
          <span>{match.team1} vs {match.team2}</span> (Winner: {match.winner})
        </div>
      ))}
      <h2>Top 2 Teams</h2>
      {topTwoTeams.length > 0 && <ul>{topTwoTeams.map((team) => <li key={team}>{team}</li>)}</ul>}
      <h2>Tournament Bracket</h2>
      {round1Results.length > 0 && (
        <Bracket teams={TEAMS} results={fixtures} />
      )}
    </div>
  );
}

export default Fixtures;
