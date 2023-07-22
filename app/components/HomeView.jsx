import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import MainPost from "./MainPost";
import Navbar from "./Navbar";
import PostsWrapper from "./PostsWrapper";

const HomeView = () => {
  return (
    <div>
      <div className="px-3 md:px-10 pb-5 md:pb-10">
        <Navbar />
        <div className="screen max-w-6xl mx-auto">
          <HomeBanner />
          <MainPost />

          <h2 className="mt-5 md:mt-10 mb-5 text-2xl md:text-3xl font-semibold">
            What&apos;s New?
          </h2>
          <PostsWrapper />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
