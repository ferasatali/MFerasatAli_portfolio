import { IBlogs } from "@/interfaces/index";

export const AllBlogs: IBlogs.BlogsDetails[] = [
  {
    id: "intro",
    url: "/blogs/best-research",
    blog: "Introduction",
    date: "07/09/2022",
    title: "Introduction to Ferasat Blogs",
    subTitle: "",
    main: "blog.blog-details.best-research.main",
    src: "/public/intro.jpg",
    content: [
      {
        title: "blog.blog-details.best-research.content.introduction.title",
        text: "blog.blog-details.best-research.content.introduction.text",
      },
    ],
    description: "blog.blog-details.best-research.description",
  },
  {
    id: "best-research",
    url: "/blogs/uae-hackathon",
    blog: "Navigating the Evolving Landscape of Web Development: Trends in 2024",
    date: "07/03/2022",
    title: "Navigating the Evolving Landscape of Web Development: Trends in 2024",
    subTitle: "",
    main: "Introduction",
    src: "/public/web.jpg",
    content: [
      {
        title: "blog.blog-details.uae-hackathon.content.uae-7-march.title",
        text: "blog.blog-details.uae-hackathon.content.uae-7-march.text",
      },
      {
        title:
          "blog.blog-details.uae-hackathon.content.190-inspirational-ideas.title",
        text: "blog.blog-details.uae-hackathon.content.190-inspirational-ideas.text",
      },
    ],
    description: "blog.blog-details.uae-hackathon.description",
  },
  {
    id: "twitter",
    url: "/blogs/uae-hackathon",
    blog: " Leveraging Google Sheets for Streamlined Portfolio Management: A Developer’s Guide",
    date: "07/03/2022",
    title: " Leveraging Google Sheets for Streamlined Portfolio Management: A Developer’s Guide",
    subTitle: "",
    main: "Introduction",
    src: "/public/excel.jpg",
    content: [
      {
        title: "blog.blog-details.uae-hackathon.content.uae-7-march.title",
        text: "blog.blog-details.uae-hackathon.content.uae-7-march.text",
      },
      {
        title:
          "blog.blog-details.uae-hackathon.content.190-inspirational-ideas.title",
        text: "blog.blog-details.uae-hackathon.content.190-inspirational-ideas.text",
      },
    ],
    description: "blog.blog-details.uae-hackathon.description",
  },
];
