export interface IUser {
  id: string;
  full_name: string;
  photo: null | string;
  gender: string;
  birth_date: string;
  birth_place: string;
  work_place: string;
  position: {
    id: string;
    name: string;
  };
  speciality: string;
  academic_title_and_degree: string;
  experience: string;
  votes_count: number;
}

export interface IStats {
  votes_count: number;
  candidates_count: number;
  male_candidates_count: number;
  female_candidates_count: number;
  voted_candidates_percentage: number;
}
