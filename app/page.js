import Image from "next/image";

export default function Home() {
  return (
    <main class="bg-[#FBE9CC] p-24" className="flex min-h-screen flex-col items-center justify-between">
      <div class="relative pb-4 flex flex-col items-center">
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8Qv4_SpyhP2XgAU3IgzAr8XamaJrAx07ae90bGKC4rKLZjA/viewform" className="top-[8%] left-[25%]">
            <Image className="relative pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_title_w_button.png" alt="rgb_title" />
          </a>
        </div>
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_info.png" alt="rgb_title" />
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_schedule.png" alt="rgb_title" />
        <div className="self-center font-termina font-extrabold text-2xl">
          <a class="text-black" href="https://linktr.ee/innodatcal">
            @innodatcal
          </a>
        </div>
      </div>
    </main>
  );
}