import Link from "next/link";
import Banner from "./Banner";
import moment from "moment/moment";
import { readingTime } from "reading-time-estimator";

const PostCard = ({ post }) => {
  const { badges, content, createdAt, id, image, title } = post.node;
  const estimatedTime = readingTime(content, 60);

  return (
    <Link href={`/post/${id}`}>
      <div className="py-2 md:py-3 md:px-3 md:rounded-xl md:hover:bg-[#f8f4f4] border-t md:border-t-0 mt-1 duration-200 ease-in-out">
        <img
          src={image.url}
          alt="post-img"
          className="hidden md:inline-block mb-3 rounded-xl min-h-[188px] h-[230px] object-cover w-full"
        />
        <div>
          <p className="text-xs md:text-sm">
            {moment(createdAt).format("MMMM D YYYY")} • {estimatedTime.text}
          </p>
          <h3 className="leading-5 mb-2 mt-1 line-clamp-2 md:line-clamp-3 md:text-xl md:leading-6">
            {title}
          </h3>
          <p className="text-xs line-clamp-3">{content}</p>
          <div className="flex gap-2 mt-2 md:mt-3">
            {badges.map((badge) => {
              return <Banner key={badge.name} name={badge.name} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
