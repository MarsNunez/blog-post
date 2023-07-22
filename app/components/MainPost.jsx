import Banner from "./Banner";

const MainPost = () => {
  return (
    <div className="rounded-xl overflow-hidden relative min-h-[196px]">
      <img
        src="/img/test.jpeg"
        alt="img-main"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 text-white px-3 pb-3 pt-4 bg-gradient-to-t from-black">
        <p className="text-xs">12 minutes ago • 4 min read</p>
        <h3 className="font-medium line-clamp-1">
          Where To Watch &apos;John Wick: Chapter 4
        </h3>
        <p className="line-clamp-2 text-xs font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus
          dolor, eleifend eget lacus nec, venenatis pretium velit. Vestibulum
          quis mauris lectus. Pellentesque auctor, diam ac viverra hendrerit,
          nibh lectus laoreet sem, sed venenatis dui velit ac sapien. Donec
          faucibus rhoncus lacinia. Aliquam placerat vulputate sagittis.
        </p>
        <div className="flex gap-2 mt-2">
          <Banner color={"white"} />
          <Banner color={"white"} />
        </div>
      </div>
    </div>
  );
};

export default MainPost;
