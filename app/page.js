import Image from "next/image";

export default function Home() {
  return (
    <main class="bg-[#FBE9CC] p-24" className="flex min-h-screen flex-col items-center justify-between">
      <div class="relative pb-4 flex flex-col items-center">
        <a href="https://www.innovativedesign.club/" className="inline-block font-termina text-xs mb-4 px-4 py-2 md:text-lg lg:text-xl lg:mb-8 md:px-8 md:py-4 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition-colors duration-300">
          Back to InnoD Website
        </a>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8Qv4_SpyhP2XgAU3IgzAr8XamaJrAx07ae90bGKC4rKLZjA/viewform" target="_blank" className="top-[8%] left-[25%]">
            <Image className="relative pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_title_w_button.png" alt="rgb_title" />
          </a>
        </div>
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_info.png" alt="rgb_title" />
        <Image className="pb-2 pointer-events-none" layout="responsive" width="500" height="500" priority src="/images/rgb_schedule.png" alt="rgb_title" />
        <div className="self-center font-termina font-extrabold sm:text-lg sm:text-md lg:text-2xl">
          <a class="text-black" href="https://linktr.ee/innodatcal">
            @innodatcal
          </a>
        </div>
      </div>
    </main>
  );
}