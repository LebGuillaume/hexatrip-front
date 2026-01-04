import { regionsCarouselData } from "@/utils/regionsCarouselData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const regionsCarousel = () => {
  return (
    <section className="">
      <div>
        <Carousel
          className="relative"
          plugins={[Autoplay({ delay: 3000 }), Fade()]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {regionsCarouselData.map((region, index) => {
              return (
                <CarouselItem key={index}>
                  <Link to={`/research?region=${region.region}`}>
                    <Card className="relative">
                      <CardContent className="flex items-center justify-center p-0 overflow-hidden max-h-[70vh]">
                        <img
                          src={region.photo}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                        <p className="absolute top-[5%] left-[50%] -translate-x-[50%] capitalize text-[5rem] text-white italic text-shadow">
                          {region.name}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[50%] -left-5 -translate-y-[50%] bg-amber-400 hover:bg-rose-400 hover:scale-105 p-6 mx-8" />
          <CarouselNext className="absolute top-[50%] -right-5 -translate-y-[50%]  bg-amber-400 hover:bg-rose-400 hover:scale-105 p-6 mx-8" />
        </Carousel>
      </div>
    </section>
  );
};

export default regionsCarousel;
