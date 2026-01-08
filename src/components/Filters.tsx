import { Form, Link, useLoaderData } from "react-router-dom";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

import { CustomInput, CustomRange, CustomSelect } from ".";
import { categories, durations, regionsCodes, tags } from "@/utils/filtersData";
import type { ResearchLoaderType } from "@/types/types";
import { useEffect, useState } from "react";

const Filters = () => {
  const { params } = useLoaderData() as ResearchLoaderType;
  const {
    region: urlRegion,
    town: urlTown,
    category: urlCategory,
    duration: urlDur,
    price: urlPrice,
    tags: urlTags,
  } = params;
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    setTrigger((oldstate) => oldstate + 1);
  }, [urlCategory, urlDur, urlPrice, urlRegion, urlTags, urlTown]);

  return (
    <section
      className="py-8 bg-slate-100 min-h-[30vh] place-content-center shadow-inner"
      key={trigger}
    >
      <div className="align-center flex flex-col gap-2">
        <div className="flex justify-between mt-4 mb-8 items-center">
          <p className="text-7xl font-special text-sky-700">What kind of trip to France</p>
          <Link to={"/research"}>
            <Button className="flex flex-col items-center cursor-pointer" variant="ghost">
              <RotateCcw className="h-full w-full" />
              <p className="text-xl font-extralight">Reset</p>
            </Button>
          </Link>
        </div>
        <Form action="/research" className="flex flex-wrap gap-4 justify-center sm:justify-between">
          {/* region -select */}
          <CustomSelect
            label="region"
            name="region"
            options={regionsCodes}
            defaultValue={urlRegion || "0"}
          />
          {/* town-input */}
          <CustomInput label="town" name="town" type="search" defaultValue={urlTown}></CustomInput>
          {/* Category/type - select */}
          <CustomSelect
            label="type"
            name="category"
            options={categories}
            defaultValue={urlCategory}
          />
          <CustomSelect
            label="duration"
            name="duration"
            options={durations}
            defaultValue={urlDur || "0"}
          />
          <CustomSelect label="tags" name="tags" options={tags} defaultValue={urlTags || "0"} />
          <CustomRange name="price" defaultValue={urlPrice} />
          <Button type="submit" size="lg" className="text-xl py-4 sm:ml-auto">
            Search
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Filters;
