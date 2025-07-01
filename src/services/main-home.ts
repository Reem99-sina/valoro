import { useFetch } from "@/hooks/fetch.hooks";
import {
  AboutUsResponce,
  FeaturesRes,
  IndustryData,
  IndustryRes,
  PartnerRes,
  ProjectsResponse,
  ServicesRes,
  ValoroResponse,
} from "@/types/common.type";
import { useQuery } from "@tanstack/react-query";

export const useMainHomeQuery = () => {
  const { api } = useFetch();

  return useQuery<ValoroResponse>({
    queryKey: ["home"],
    queryFn: () =>
      api?.get("/api/home-page?populate[kpi][populate][cards][populate]=*"),
  });
};

export const useAboutUsQuery = () => {
  const { api } = useFetch();

  return useQuery<AboutUsResponce>({
    queryKey: ["about_us"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[about_us][populate]=*"
      ),
  });
};

export const useProjectsQuery = () => {
  const { api } = useFetch();

  return useQuery<ProjectsResponse>({
    queryKey: ["projects"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[projects][populate][icons][populate]=*"
      ),
  });
};

export const useIndustryQuery = () => {
  const { api } = useFetch();

  return useQuery<IndustryRes>({
    queryKey: ["industry"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[industry][populate][cards][populate]=*"
      ),
  });
};

export const usePartnerQuery = () => {
  const { api } = useFetch();

  return useQuery<PartnerRes>({
    queryKey: ["partner"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[partner][populate][logo][populate]=*"
      ),
  });
};

export const useFeaturedQuery = () => {
  const { api } = useFetch();

  return useQuery<FeaturesRes>({
    queryKey: ["feature"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[features][populate]=*"
      ),
  });
};

export const useServiesQuery = () => {
  const { api } = useFetch();

  return useQuery<ServicesRes>({
    queryKey: ["services"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[Services][populate][bullets][populate]=*"
      ),
  });
};