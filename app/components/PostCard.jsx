import Link from "next/link";
import Banner from "./Banner";

const PostCard = () => {
  return (
    <Link href={"/post/10"}>
      <div className="py-2 md:py-3 md:px-3 md:rounded-xl md:hover:bg-[#f8f4f4] border-t md:border-t-0 mt-1 duration-200 ease-in-out">
        <img
          src="/img/test.jpeg"
          alt="post-img"
          className="hidden md:inline-block mb-3 rounded-xl min-h-[188px]"
        />
        <div>
          <p className="text-xs md:text-sm">3 hours ago • 8 min read</p>
          <h3 className="leading-5 mb-2 mt-1 line-clamp-2 md:line-clamp-3 md:text-xl md:leading-6">
            Liverpool hammer Leeds for first win in five games
          </h3>
          <p className="text-xs line-clamp-3">
            Nam elementum, lorem sit amet fermentum ornare, diam risus egestas
            sem, eu tincidunt dolor elit sit amet magna. Vestibulum congue
            viverra purus vitae finibus purus vitae finibuspurus vitae finibus
          </p>
          <div className="flex gap-2 mt-2 md:mt-3">
            <Banner />
            <Banner />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
