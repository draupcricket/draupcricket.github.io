import {FloatingNavDemo} from './components/NavBar/NavBar';
import {HeroScrollDemo} from './components/Header/header';
import Fixtures from './components/Fixtures/Fixtures';
import {Details} from './components/Details/Details';
import {Gallery} from './components/Gallery/Gallery';

import {TabsDemo} from './components/Tabs/Tabs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 max-sm:p-6 ">
      <FloatingNavDemo />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex max-sm:pt-12">
<HeroScrollDemo/>

      </div>

      <Details />
      <Fixtures />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
<TabsDemo />

      </div>

      <Gallery />
    </main>
  );
}
