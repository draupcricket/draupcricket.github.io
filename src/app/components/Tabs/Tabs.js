// TabsDemo.tsx
import { Tabs } from "../ui/tabs";
import Team1 from "./Teams1";
import Team2 from "./Teams2";
import Team3 from "./Teams3";
import Team4 from "./Teams4";

export function TabsDemo() {
  const tabs = [
    {
      title: "Team A",
      value: "Team A",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team A Players</p>
          <Team1 />
        </div>
      ),
    },
    {
      title: "Team B",
      value: "Team B",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team B Players</p>
          <Team2 />
        </div>
      ),
    },
    {
      title: "Team C",
      value: "Team C",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team C Players</p>
          <Team3 />
        </div>
      ),
    },
    {
      title: "Team D",
      value: "Team D",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team D Players</p>
          <Team4 />
        </div>
      ),
    },
  ];

  return (
    <div className="max-sm:h-[70rem] h-[40rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 md:mt-4" id="Teams">
      <Tabs tabs={tabs} />
    </div>
  );
}
