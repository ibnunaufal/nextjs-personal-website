"use client";
import { useParams } from "next/navigation";
import Layout from "../../../../components/Layout";
import { marked } from "marked";
import { useEffect, useState } from "react";
import "./style.css";
import BlogLayout from "../../../../components/BlogLayout";
import { DiscussionEmbed } from "disqus-react";

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

  async function getContent() {
    const mdFileURL = `https://raw.githubusercontent.com/ibnunaufal/personal-website-content/main/content/${params.id}`;
    const response = await fetch(mdFileURL);
    const mdContent = await response.text();
    const htmlContent = marked(mdContent);
    setContent(htmlContent);
  }

  useEffect(() => {
    getContent();
  }, []);

  return (
    <BlogLayout title={title}>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <DiscussionEmbed
        shortname="blognaufal"
        config={{
          url: `https://naufall.com/blog/${params.id}`,
          identifier: `identifier-${params.id}`,
          title: `judul-${params.id}`
        }}
      />
    </BlogLayout>
  );
}
