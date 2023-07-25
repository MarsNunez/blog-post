import Banner from "@/app/components/Banner";
import Navbar from "@/app/components/Navbar";
import { getPosts } from "@/services";
import moment from "moment";
import Link from "next/link";
import { use } from "react";
import { readingTime } from "reading-time-estimator";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Post = ({ params }) => {
  const currentPost = use(getPosts()).filter(
    (post) => post.node.id == params.id
  )[0];

  const { badges, content, createdAt, videoUrl, image, title } =
    currentPost.node;
  const estimatedTime = readingTime(content, 40);

  return (
    <div>
      <Navbar />
      <div className="screen md:px-4 max-w-5xl mx-auto">
        <img src={image.url} alt="img-post" className="md:rounded-xl mx-auto" />
        <div className="px-4 py-4 max-w-4xl mx-auto md:mt-5">
          <p className="text-sm mb-2 md:text-base">
            {moment(createdAt).format("MMMM D YYYY")} • {estimatedTime.text}
          </p>
          <h3 className="text-3xl leading-7 md:text-4xl">{title}</h3>
          <div className="flex gap-2 my-4 md:my-7">
            {badges.map((badge) => (
              <Banner name={badge.name} key={badge.name} />
            ))}
          </div>
          <div className="text-justify md:leading-9 md:text-lg content">
            <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
          </div>
          {videoUrl && (
            <iframe
              className="w-full mt-5 h-full min-h-[200px] md:min-h-[443px] lg:min-h-[510px]"
              type="text/html"
              src={videoUrl}
            ></iframe>
          )}
          <Link href={"/"}>
            <p className="text-red-600 mt-7 md:mt-9">{"<"} Get back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
