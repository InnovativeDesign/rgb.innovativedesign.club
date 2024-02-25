import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="pb-4 flex flex-col items-center">
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_title.png" alt="rgb_title" />
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_info.png" alt="rgb_title" />
        <div> Schedule when it gets fixed. </div>
        <div className="self-center font-termina font-extrabold text-2xl">
          <a href="https://linktr.ee/innodatcal">
            @innodatcal
          </a>
        </div>
      </div>
    </main>
  );
}