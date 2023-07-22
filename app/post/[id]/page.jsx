import Banner from "@/app/components/Banner";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const Post = () => {
  return (
    <div>
      <Navbar />
      <div className="screen md:px-4 max-w-5xl mx-auto">
        <img src="/img/test.jpeg" alt="img-post" className="md:rounded-xl" />
        <div className="px-4 py-4 max-w-4xl mx-auto md:mt-5">
          <p className="text-sm mb-2 md:text-base">3 hours ago • 8 min read</p>
          <h3 className="text-3xl leading-7 md:text-4xl">
            Liverpool hammer Leeds for first win in five games
          </h3>
          <div className="flex gap-2 my-4 md:my-7">
            <Banner />
            <Banner />
          </div>
          <p className="text-justify md:leading-9 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            condimentum massa tortor, nec dictum nunc ultricies quis. Integer
            posuere, erat vel vulputate porta, justo massa venenatis ex, varius
            consequat metus magna non nisi. Pellentesque fermentum turpis magna,
            non dapibus odio pharetra at. Morbi dignissim rhoncus mauris. Donec
            at mi a nulla bibendum aliquam. Curabitur quis orci aliquet, tempor
            nibh id, vestibulum diam. Nunc nec augue nulla. Vivamus ut fringilla
            quam, at finibus est. Praesent et dolor justo. Integer pretium,
            justo non egestas mollis, risus erat cursus est, et auctor enim
            dolor in risus. Pellentesque eros magna, dignissim ut quam sed,
            auctor fringilla metus. Quisque luctus risus eget sollicitudin
            maximus. Aliquam ullamcorper dolor eu varius convallis. Nulla
            malesuada varius facilisis. Maecenas maximus quis felis a euismod.
            Praesent vestibulum vestibulum orci, sit amet euismod ante aliquam
            ornare.
          </p>

          <iframe
            className="w-full mt-5 h-full min-h-[200px] md:min-h-[443px] lg:min-h-[510px]"
            type="text/html"
            src="https://www.youtube.com/embed/KPlYOA8UMrs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
          ></iframe>
          <Link href={"/"}>
            <p className="text-red-600 mt-7 md:mt-9">{"<"} Get back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
