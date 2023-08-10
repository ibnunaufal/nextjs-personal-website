"use client";
import { useParams } from "next/navigation";
import Layout from "../../../../components/Layout";
import { marked } from "marked";
import { useEffect, useState } from "react";
import "./style.css";
import BlogLayout from "../../../../components/BlogLayout";
import { DiscussionEmbed } from "disqus-react";
import ShareButton from "../../../../components/ShareButton";
import Head from "next/head";

// export async function getStaticProps() {
//     const params = useParams();
//     const { slug } = params;
//     const mdFileURL = `https://raw.githubusercontent.com/ibnunaufal/personal-website-content/main/content/2023-08-06-001.md`;// `https://raw.githubusercontent.com/user/repo/branch/path/to/${slug}.md`;

//     const response = await fetch(mdFileURL);
//     const mdContent = await response.text();
//     const htmlContent = marked(mdContent);

//     return {
//       props: {
//         htmlContent,
//       },
//     };
//   }

//   export async function getStaticPaths() {
//     // You need to define the available paths to pre-generate the pages
//     // Here, you can either fetch a list of available slugs from a specific API or just hardcode them
//     const paths = [
//       { params: { slug: 'blog-post-1' } },
//       { params: { slug: 'blog-post-2' } },
//       // Add more slugs as needed
//     ];

//     return {
//       paths,
//       fallback: false,
//     };
//   }

//   interface BlogPostProps {
//     htmlContent: string;
//   }

//   const BlogPost: React.FC<BlogPostProps> = ({ htmlContent }) => {
//     return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
//   };

//   export default BlogPost;

export default function BlogDetail({ params }: { params: { id: string } }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Blog");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState(0);

  async function getContent() {
    const mdFileURL = `https://raw.githubusercontent.com/ibnunaufal/personal-website-content/main/content/${params.id}`;
    const response = await fetch(mdFileURL);
    const mdContent = await response.text();
    const htmlContent = marked(mdContent);
    setContent(htmlContent);
    countDuration(htmlContent);
  }

  function getTitle() {
    let data = localStorage.getItem("all-lists");
    if (data) {
      JSON.parse(data).map((x: any) => {
        setTitle(x.title);
        setDate(x.created_at);
      });
    }
  }

  function countDuration(content: string) {
    var mainContentText = content.replace(/<\/?[^>]+(>|$)/g, "");
    var wordCount = mainContentText.trim().split(/\s+/).length;
    setDuration(Math.ceil(wordCount / 200));
  }

  useEffect(() => {
    getContent();
    getTitle();
  }, []);

  return (
    <BlogLayout title={title}>
      <h1>{title}</h1>
      <div className="">
        <div>Created {date}</div>
        <div>{duration} min read</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <br />
      <ShareButton
        url={`https://naufall.com/blog/${params.id}`}
        title={title + " by Naufal"}
      ></ShareButton>
      <br />
      <DiscussionEmbed
        shortname="naufall"
        config={{
          url: `https://naufall.com/blog/${params.id}`,
          identifier: `identifier-${params.id}`,
          title: title + " by Naufal",
        }}
      />
    </BlogLayout>
  );
}
