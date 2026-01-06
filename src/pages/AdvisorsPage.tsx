import { localCustomFetch } from "@/axios/customFetch";
import { AdvisorsFull, FiltersAdvisors } from "@/components";
import type { Advisor } from "@/types/types";
import type { LoaderFunction } from "react-router-dom";

export const AdvisorsLoader: LoaderFunction = async ({ request }): Promise<Advisor[] | null> => {
  try {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    console.log(params);

    const response = await localCustomFetch.get<Advisor[]>("advisors", { params });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const AdvisorsPage = () => {
  return (
    <>
      <FiltersAdvisors />
      <AdvisorsFull />
    </>
  );
};

export default AdvisorsPage;
