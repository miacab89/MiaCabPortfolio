import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NewsFeedPanel } from "./components/NewsFeedPanel";

export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header/>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Navbar/>
          <NewsFeedPanel/>
        </main>
      <Footer/>
    </div>
  );
}
