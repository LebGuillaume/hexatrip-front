import {
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
      <TagsCarousel />
      <WhyUsText />
      <WhyUs />
      <Gallery />
    </>
  );
};

export default Landing;
