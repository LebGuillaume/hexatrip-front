import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import type { Trip } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
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

const BestSellersCarousel = () => {
  const [entities, setEntities] = useState<Trip[]>([]);

  const fetchEntities = useCallback(async (signal?: AbortSignal) => {
    const response = await localCustomFetch.get<Trip[]>("trips/bestsellers", {
      signal, // axios v1+ supporte AbortController
    });
    return response.data;
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const data = await fetchEntities(controller.signal);
        setEntities(data);
      } catch (err: any) {
        // Ignore l'annulation (évite bruit console + cycles inutiles)
        if (err?.name === "CanceledError" || err?.code === "ERR_CANCELED") return;
        console.error(err);
      }
    })();

    return () => controller.abort();
  }, [fetchEntities]);

  return (
    <section className="py-6 my-12">
      <div className="align-center relative">
        <h1 className="text-6xl text-center my-3 font-special text-sky-600">Bestsellers</h1>
        <Carousel
          className="relative"
          plugins={[Autoplay({ delay: 6000 }), Fade()]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="h-[400px] lg:h-[600px]">
            {entities.map((trip, index) => {
              return (
                <CarouselItem key={index} className="h-full">
                  <Link to={`/research?${trip._id}`}>
                    <Card className="h-full p-0">
                      <CardContent className="flex items-center justify-center p-0 h-full">
                        <img
                          src={apiUrl + "/images/trips/" + trip._id + "/" + trip.images[0]}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                        <p className=" text-center w-full  absolute top-[20%] left-[50%] -translate-x-[50%] capitalize text-4xl sm:text-5xl md:text-6xl text-white italic text-shadow">
                          {trip.title}
                        </p>
                        <p className="absolute top-[40%] left-[50%] -translate-x-[50%]  text-3xl h-full tracking-widest underline text-white  text-shadow">
                          {trip.town}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[50%] -left-5 -translate-y-[50%] bg-amber-400 hover:bg-rose-400 hover:scale-110 " />
          <CarouselNext className="absolute top-[50%] -right-5 -translate-y-[50%]  bg-amber-400 hover:bg-rose-400 hover:scale-110" />
        </Carousel>
      </div>
    </section>
  );
};

export default BestSellersCarousel;
