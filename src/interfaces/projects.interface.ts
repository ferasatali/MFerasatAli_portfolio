export interface PersonalProjectsPayload {
  title: string;
  subtitle: string;
  date: string;
  content: string[];
  links: Links[];
  animation: string;
  projectImages: string[];
  selected: Boolean;
}
export interface Links {
  url: string;
  name: string;
  color: string;
}
