export interface BlogDetails {
  id: string;
  url: string;
  blog: string;
  date: string;
  title: string; // Title of the blog
  main: string; // Main heading
  quotes: string;
  src: string;
  content: BlogDetailsContent[];
}
export interface BlogDetailsContent {
  title: string;
  text: string;
}
