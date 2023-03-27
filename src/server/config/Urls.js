import { CreateFunc, GetFunc } from "./Requests";

// Get cadidates
export const GetStudentsConfig = (univer = "hemis") => {
  return GetFunc(`student.${univer}.uz/rest/v1/public/stat-student`);
};
export const GetTeachersConfig = (univer = "hemis") => {
  return GetFunc(`student.${univer}.uz/rest/v1/public/stat-employee`);
};
export const GetStatsConfig = (univer = "hemis") => {
  return GetFunc(`student.${univer}.uz/rest/v1/public/stat-structure`);
};
