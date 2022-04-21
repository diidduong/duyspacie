import Head from "next/head";
import ThemeButton from "../components/ThemeButton";

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Duy Spacie</title>
      </Head>
      <main className="flex items-center justify-center h-screen">
        <div className="text-center">
          <ThemeButton/>
        </div>
      </main>
    </div>
  );
}