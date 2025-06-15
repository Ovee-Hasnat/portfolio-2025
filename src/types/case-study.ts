export interface ProblemsType {
  problem: string;
  solution: string;
  image: string;
}

export interface CaseStudyType {
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  type: string;
  tech: string;
  workScope: string;
  url: string | null;
  problems: ProblemsType[];
}

export type CaseStudyList = CaseStudyType[];
