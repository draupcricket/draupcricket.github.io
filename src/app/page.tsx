import Image from "next/image";
import {FloatingNavDemo} from './components/NavBar/NavBar';
import {HeroScrollDemo} from './components/Header/header';
import Fixtures from './components/Fixtures/Fixtures';
import {Details} from './components/Details/Details';

import {TabsDemo} from './components/Tabs/Tabs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNavDemo />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
<HeroScrollDemo/>

      </div>
      <Details />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
<TabsDemo />

      </div>
<Fixtures />
      
    </main>
  );
}
