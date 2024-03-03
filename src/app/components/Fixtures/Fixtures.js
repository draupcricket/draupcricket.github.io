// ParentComponent.js
import Matches from './Matches'; // Assuming the path is correct
import './Matches.css'
const Fixtures = () => {
  const items = [
    {   id : 1,
        date: "16 March, 2024",
    format: "Group Stage",
    status: "upcoming",
    matchDate: "16 March, 2024",
    matchInfo: "8 Overs",
    venue: "St.John's Medical College Sports Ground",
    teamALogo: "/logo.png",
    teamAName: "Team 1",
    teamBLogo: "/10.png",
    teamBName: "Team 3",
    matchTime: "20:00",
    matchStatus: "Match starts at 08:00",
   },
    {  
        id : 2,
        date: "16 March, 2024",
    format: "Group Stage",
    status: "upcoming",
    matchDate: "16 March, 2024",
    matchInfo: "8 Overs",
    venue: "St.John's Medical College Sports Ground",
    teamALogo: "/logo2.png",
    teamAName: "Team 2",
    teamBLogo: "/logo2.png",
    teamBName: "team 4",
    matchTime: "09:30",
    matchStatus: "Match starts at 09:30", },
    {   id : 3,date: "16 March, 2024",
    format: "Group Stage",
    status: "upcoming",
    matchDate: "19 Jun 24",
    matchInfo: "8 Overs",
    venue: "St.John's Medical College Sports Ground",
    teamALogo: "/10.png",
    teamAName: "Team 3",
    teamBLogo: "/logo2.png",
    teamBName: "Team 2",
    matchTime: "11:00",
    matchStatus: "Match starts at 11:00", },
    {   id : 4,date: "16 March, 2024",
    format: "Group Stage",
    status: "upcoming",
    matchDate: "16 March, 2024",
    matchInfo: "8 Overs",
    venue: "St.John's Medical College Sports Ground",
    teamALogo: "/logo2.png",
    teamAName: "Team 4",
    teamBLogo: "/logo.png",
    teamBName: "Team 1",
    matchTime: "13:30",
    matchStatus: "Match starts at 13:30", },
  ];

  return (
    <div className='layout-cards md:grid md:p-12' id="Fixtures">
      <Matches items={items} />
    </div>
  );
};

export default Fixtures;
