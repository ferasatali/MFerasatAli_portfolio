export interface PersonalProjectsPayload {
  title: string;
  subtitle: string;
  date: string;
  content: string[];
  links: Links[];
  animation: string
}
export interface Links {
  url: string;
  name: string;
  color: string;
}
