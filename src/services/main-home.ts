import { useFetch } from "@/hooks/fetch.hooks";
import {
  AboutUsData,
  blockchainRes,
  blockchainServiceRes,
  FeaturesRes,
  IndustryData,
  IResponse,
  PartnersData,
  ProjectsData,
  ServicesData,

  TransformationRes,

  ValoroData,
} from "@/types/common.type";
import { useQuery } from "@tanstack/react-query";

export const useMainHomeQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<ValoroData>>({
    queryKey: ["home"],
    queryFn: () =>
      api?.get("/api/home-page?populate[kpi][populate][cards][populate]=*"),
  });
};

export const useAboutUsQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<AboutUsData>>({
    queryKey: ["about_us"],
    queryFn: () => api?.get("/api/home-page?populate[about_us][populate]=*"),
  });
};

export const useProjectsQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<ProjectsData>>({
    queryKey: ["projects"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[projects][populate][icons][populate]=*"
      ),
  });
};

export const useIndustryQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<IndustryData>>({
    queryKey: ["industry"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[industry][populate][cards][populate]=*"
      ),
  });
};

export const usePartnerQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<PartnersData>>({
    queryKey: ["partner"],
    queryFn: () =>
      api?.get("/api/home-page?populate[partner][populate][logo][populate]=*"),
  });
};

export const useFeaturedQuery = () => {
  const { api } = useFetch();

  return useQuery<FeaturesRes>({
    queryKey: ["feature"],
    queryFn: () => api?.get("/api/home-page?populate[features][populate]=*"),
  });
};

export const useServiesQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<ServicesData>>({
    queryKey: ["services"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[Services][populate][bullets][populate]=*"
      ),
  });
};

export const useTransformationQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<TransformationRes>>({
    queryKey: ["transformation"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[transformation][populate][about_us][populate]=*"
      ),
  });
};

export const useBlockProjectQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<blockchainRes>>({
    queryKey: ["blockchain_projects"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[blockchain_projects][populate][projects][populate]=*"
      ),
  });
};

export const useBlockServicesQuery = () => {
  const { api } = useFetch();

  return useQuery<IResponse<blockchainServiceRes>>({
    queryKey: ["blockchain_services"],
    queryFn: () =>
      api?.get(
        "/api/home-page?populate[blockchain_service][populate][services][populate]=*"
      ),
  });
};