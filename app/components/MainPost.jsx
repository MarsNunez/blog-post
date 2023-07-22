import Link from "next/link";
import Banner from "./Banner";

const MainPost = () => {
  return (
    <Link href={"/post/19"}>
      <div
        className="rounded-xl overflow-hidden relative min-h-[196px] 
      md:grid grid-cols-2 gap-4 md:rounded-none md:min-h-[250px] lg:min-h-[370px]"
      >
        <img
          src="/img/test.jpeg"
          alt="img-main"
          className="h-full w-full object-cover md:rounded-xl"
        />
        <div
          className="absolute md:static bottom-0 text-white px-3 pb-3 pt-4 bg-gradient-to-t from-black
         md:bg-gradient-to-t md:from-transparent md:text-black h-fit my-auto md:pt-0 md:pb-0"
        >
          <p className="text-xs md:text-sm">12 minutes ago • 4 min read</p>
          <h3 className="font-medium line-clamp-1 md:line-clamp-2 md:text-3xl md:font-bold md:my-2">
            Where To Watch &apos;John Wick: Chapter 4
          </h3>
          <p className="line-clamp-2 md:line-clamp-3 md:mb-4 text-xs font-medium md:text-sm md:text-gray-500 md:font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus
            dolor, eleifend eget lacus nec, venenatis pretium velit. Vestibulum
            quis mauris lectus. Pellentesque auctor, diam ac viverra hendrerit,
            nibh lectus laoreet sem, sed venenatis dui velit ac sapien. Donec
            faucibus rhoncus lacinia. Aliquam placerat vulputate sagittis.
          </p>
          <div className="flex gap-2 mt-2">
            <Banner />
            <Banner />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainPost;
