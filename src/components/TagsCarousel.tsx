import { tagsCarouselData } from "@/utils/tagsCarouselData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

const TagsCarousel = () => {
  return (
    <section className="py-6 my-12">
      <div className="align-center">
        <h1 className="text-6xl text-center my-3 font-special font-bold text-sky-600">
          Browse by theme
        </h1>
        <Carousel
          className="relative"
          plugins={[Autoplay({ delay: 5000 })]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {tagsCarouselData.map((tag, index) => {
              return (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <Link to={`/research?tags=${tag.code}`}>
                    <Card className="m-4 p-0 rounded-3xl overflow-hidden aspect-1/2">
                      <CardHeader className="p-0">
                        <img
                          src={tag.photo}
                          alt={tag.title}
                          className="h-full w-full object-cover"
                        />
                      </CardHeader>
                      <CardContent className="flex flex-col items-center justify-center p-0 py-4">
                        <p className="self-start mx-4 text-2xl capitalize">
                          {tag.title}
                        </p>
                        <p className="self-start mx-4 ">{tag.text}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[50%] -left-5 -translate-y-[50%] bg-amber-400 hover:bg-rose-400 hover:scale-110 " />
          <CarouselNext className="absolute top-[50%] -right-5 -translate-y-[50%]  bg-amber-400 hover:bg-rose-400 hover:scale-110 " />
        </Carousel>
      </div>
    </section>
  );
};

export default TagsCarousel;
