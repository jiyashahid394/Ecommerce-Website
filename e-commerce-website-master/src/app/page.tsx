
import MainPoster from '@/components/Page/MainPoster'
import Promotions from "@/components/Page/Promotions";
import WhatWeHave from "@/components/Page/WhatWeHave";
import Detail from "@/components/Page/Detail";
import NewsLetter from "@/components/Page/NewsLetter";
//import PromotionBanner from "@/components/UI/promotionBanner"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
    <MainPoster/>
    <Promotions/>
    <WhatWeHave/>
    <Detail/>
    <NewsLetter/>
    </main>
  );
}
