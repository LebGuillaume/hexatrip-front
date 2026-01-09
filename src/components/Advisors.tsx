import { apiUrl, localCustomFetch } from "@/axios/customFetch";
import type { Advisor } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Advisors = () => {
  const [entities, setEntities] = useState<Advisor[]>([]);

  const fetchEntities = useCallback(async (signal?: AbortSignal) => {
    const response = await localCustomFetch.get<Advisor[]>("advisors", {
      signal, // axios v1+ supporte AbortController
    });
    return response.data.slice(0, 4);
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
    <section className="advisors py-8 border-t-2 border-b-2">
      <div className="align-center flex flex-col item-center">
        <p className="text-3xl font-thin my-2">Meet Our dedicated Advisors</p>
        <p className="text-2xl font-bold">For each place of france</p>
        <p className="text-sm">
          200 passionate experts ready to help you fully experience this beautiful country
        </p>
        <div className="my-8 flex flex-wrap gap-6 justify-evenly items-center">
          {entities.map((advisor, index) => (
            <Link to={`/advisors`} key={index}>
              <div className="transition-all cursor-pointer hover:scale-105 mix-blend-luminosity hover:mix-blend-normal">
                <div className="h-60 w-60">
                  <img
                    src={apiUrl + "/images" + "/advisors" + `/${advisor._id}` + `/${advisor.image}`}
                    alt=""
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <p className="capitalize">{advisor.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to={`/advisors`}>
            <Button className="transition-all rounded-full cursor-pointer hover:scale-105 hover:bg-amber-600">
              Look for a specialist
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Advisors;
