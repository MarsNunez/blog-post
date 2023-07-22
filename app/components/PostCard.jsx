import Banner from "./Banner";

const PostCard = () => {
  return (
    <div className="py-2 md:hover:bg-[#f8f4f4] border-t mt-1">
      <img src="/img/test.jpeg" alt="post-img" className="hidden" />
      <div>
        <p className="text-xs">3 hours ago • 8 min read</p>
        <h3 className="leading-5 mb-2 mt-1 line-clamp-2">
          Liverpool hammer Leeds for first win in five games
        </h3>
        <p className="text-xs line-clamp-3">
          Nam elementum, lorem sit amet fermentum ornare, diam risus egestas
          sem, eu tincidunt dolor elit sit amet magna. Vestibulum congue viverra
          purus vitae finibus purus vitae finibuspurus vitae finibus
        </p>
        <div className="flex gap-2 mt-2">
          <Banner color={"black"} />
          <Banner color={"black"} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
