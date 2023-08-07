'use client'
import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/navigation";

interface model {
    "id": 1,
    "title": "Judul",
    "description": "deskripsi",
    "url": "",
    "created_at": ""
}
export default function Blog() {
  // const contents = [
  //   {
  //     id: 0,
  //     content: `<h1 id="sample-markdown">Sample Markdown</h1>
  //   <p>This is some basic, sample markdown.</p>
  //   <h2 id="second-heading">Second Heading</h2>
  //   <ul>
  //   <li>Unordered lists, and:<ol>
  //   <li>One</li>
  //   <li>Two</li>
  //   <li>Three</li>
  //   </ol>
  //   </li>
  //   <li>More</li>
  //   </ul>
  //   <blockquote>
  //   <p>Blockquote</p>
  //   </blockquote>
  //   <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
  //   <p>And code highlighting:</p>
  //   <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;
    
  //   <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
  //      <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
  //   }
  //   </code></pre>
  //   <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
  //   <p>Or an image of bears</p>
  //   <p><img src="http://placebear.com/200/200" alt="bears"></p>
  //   <p>The end ...</p>
  //   `,
  //   },
  //   {
  //     id: 1,
  //     content: `<h1 id="sample-markdown">Sample Markdown</h1>
  //   <p>This is some basic, sample markdown.</p>
  //   <h2 id="second-heading">Second Heading</h2>
  //   <ul>
  //   <li>Unordered lists, and:<ol>
  //   <li>One</li>
  //   <li>Two</li>
  //   <li>Three</li>
  //   </ol>
  //   </li>
  //   <li>More</li>
  //   </ul>
  //   <blockquote>
  //   <p>Blockquote</p>
  //   </blockquote>
  //   <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
  //   <p>And code highlighting:</p>
  //   <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;
    
  //   <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
  //      <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
  //   }
  //   </code></pre>
  //   <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
  //   <p>Or an image of bears</p>
  //   <p><img src="http://placebear.com/200/200" alt="bears"></p>
  //   <p>The end ...</p>
  //   `,
  //   },
  //   {
  //     id: 2,
  //     content: `<h1 id="sample-markdown">Sample Markdown</h1>
  //   <p>This is some basic, sample markdown.</p>
  //   <h2 id="second-heading">Second Heading</h2>
  //   <ul>
  //   <li>Unordered lists, and:<ol>
  //   <li>One</li>
  //   <li>Two</li>
  //   <li>Three</li>
  //   </ol>
  //   </li>
  //   <li>More</li>
  //   </ul>
  //   <blockquote>
  //   <p>Blockquote</p>
  //   </blockquote>
  //   <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>
  //   <p>And code highlighting:</p>
  //   <pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;
    
  //   <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
  //      <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
  //   }
  //   </code></pre>
  //   <p>Or inline code like <code>var foo = &#39;bar&#39;;</code>.</p>
  //   <p>Or an image of bears</p>
  //   <p><img src="http://placebear.com/200/200" alt="bears"></p>
  //   <p>The end ...</p>
  //   `,
  //   },
  // ];
  
  const [contents, setContents] = useState([])
  const router = useRouter()
  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    let data = localStorage.getItem('all-lists');
    if (data) {
      // Parse the JSON string stored in local storage to an array
      const parsedData = JSON.parse(data);
      setContents(parsedData);
    } else {
      // If data is not found, set an empty array
      setContents([]);
    }
  }

  return (
    <Layout>
      <div className="my-10">
        <div className="text-2xl font-bold">Blogs</div>
        <div className="text-md text-gray-300">When I'm Free, Sometimes I Write Something: Here's the List of My Written Texts</div>
      </div>
      <div>
        {contents?.map((x:model) => {
          return (
            <div key={x.id} className="border p-4 my-3 hover:border-violet-600" onClick={() => {
              router.push('/blog/' + x.url)
            }}>
              {/* <div dangerouslySetInnerHTML={{ __html: x.content }}></div> */}
              <p className="text-xl font-bold">{x.title}</p>
              <p className="text-gray-300">{x.created_at}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
