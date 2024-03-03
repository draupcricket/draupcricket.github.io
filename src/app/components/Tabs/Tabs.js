// TabsDemo.tsx
import { Tabs } from "../ui/tabs";
import Teams from "./Teams";

export function TabsDemo() {
  const tabs = [
    {
      title: "Team 1",
      value: "Team 1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team 1 Players</p>
          <Teams />
        </div>
      ),
    },
    {
      title: "Team 2",
      value: "Team 2",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team 2 Players</p>
          <Teams />
        </div>
      ),
    },
    {
      title: "Team 3",
      value: "Team 3",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team 3 Players</p>
          <Teams />
        </div>
      ),
    },
    {
      title: "Team 4",
      value: "Team 4",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 p-4 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-custom-dark to-custom-green">
          <p className="max-sm:hidden">Team 4 Players</p>
          <Teams />
        </div>
      ),
    },
  ];

  return (
    <div className="max-sm:h-[60rem] h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40" id="Teams">
      <Tabs tabs={tabs} />
    </div>
  );
}
