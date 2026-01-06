import {
  Advisors,
  BestSellersCarousel,
  Gallery,
  RegionsCarousel,
  TagsCarousel,
  WhyUs,
  WhyUsText,
} from "@/components";

const Landing = () => {
  return (
    <>
      <RegionsCarousel />
      <BestSellersCarousel />
      <TagsCarousel />
      <WhyUsText />
      <WhyUs />
      <Gallery />
      <Advisors />
    </>
  );
};

export default Landing;
