import { CreateFunc, GetFunc } from "./Requests";

// Get cadidates
export const GetCondidatesConfig = (params = "") => {
  return GetFunc(`/candidates/?size=10${params}`);
};
export const GetPositionsConfig = () => {
  return GetFunc(`/classifiers/positions/`);
};
export const GetStatsConfig = () => {
  return GetFunc(`/main-page-information/`);
};

// Vote API
export const VoteConfig = (data) => {
  return CreateFunc(`/votes/new/`, data);
};
export const VerifyConfig = (id, data) => {
  return CreateFunc(`/votes/${id}/approve/`, data);
};

// Get cadidates yutgan
export const GetYutganConfig = () => {
  return GetFunc(`/candidates/?size=17`);
};
