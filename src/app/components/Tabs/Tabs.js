import { Tabs } from "../ui/tabs";
import Team from "./Teams";

export function TabsDemo() {
  const teams = [
    {
      title: "Peaky Blinders",
      value: "Peaky Blinders",
      players: [
        {
            name: "Nikhil K Raman",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Vaibhav Bhojane",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Manoj B Bhamsagar",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
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
            typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], 
        },
        {
            name: "Chakresh Kolluru",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Sambhram Puranik",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Vidhat Bhat",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
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
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Seraj S",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Sukith",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Sachin Kalsi",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
    ]
    },
    {
      title: "White Walkers",
      value: "White Walkers",
      players : [
        {
            name: "Harish Jangid",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Ningaraju Basavaraj",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
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
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Anubhav Kumar Singh",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Jayaraman S",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Dhruvraj Singh Rathore",
            image: "/player.png",
            type: "Batter",
            typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], 
        },
        {
            name: "Yash Raj Ojha",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Dhanvanthir Krishnamurthy",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Amit Pola",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Mohammed Ali Zaheer",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Dhanush P",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Ayush Thakur",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Mursheed",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
    ]
    },
    {
      title: "Knights United",
      value: "Knights United",
      players: [
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
    ]
    },
    {
      title: "Draup Mavericks",
      value: "Draup Mavericks",
      players: [
        {
            name: "Sudeep Rauta",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Raj Swapnil",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Harshit",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Shashank Srivastava",
            image: "/player.png",
            type: "Batter",
            typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], 
        },
        {
            name: "Akash Doifode",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Nagam Ram",
            image: "/player.png",
            type: "Batter",
            typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], 
        },
        {
            name: "Mobin Kurian Baby",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Lov Asawa",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
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
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Krishna Sahani",
            image: "/player.png",
            type: "All-rounder",
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
        {
            name: "Karthik Achar",
            image: "/player.png",
            type: "Batter",
            typeLogos: ["/batsman-logo.png", "/wicket-keeper.png"], 
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
            typeLogos: ["/batsman-logo.png", "/bowler-logo.png"], 
        },
    ]
    },
  ];

  return (
    <div className="max-sm:h-[64rem] h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 md:mt-4" id="Teams">
      <Tabs tabs={teams.map(({ title, value, players }) => ({
        title,
        value,
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
            <p className="max-sm:hidden">{title} Squad</p>
            <Team players={players} />
          </div>
        ),
      }))} />
    </div>
  );
}
