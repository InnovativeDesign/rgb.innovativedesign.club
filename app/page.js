import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="relative pb-4 flex flex-col items-center">
        <div className="">
          <a href="your-link-url" className="top-[8%] left-[25%]">
            <Image className="relative pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_title_w_button.png" alt="rgb_title" />
          </a>
        </div>
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_info.png" alt="rgb_title" />
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_schedule.png" alt="rgb_title" />
        <div className="self-center font-termina font-extrabold text-2xl">
          <a href="https://linktr.ee/innodatcal">
            @innodatcal
          </a>
        </div>
      </div>
    </main>
  );
}