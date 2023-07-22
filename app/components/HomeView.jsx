import Footer from "./Footer";
import HomeBanner from "./HomeBanner";
import MainPost from "./MainPost";
import PostsWrapper from "./PostsWrapper";

const HomeView = () => {
  return (
    <div>
      <div className="px-3">
        <h1 className="text-red-600 text-center text-2xl py-5 font-bold">
          The Mars&apos; Blog
        </h1>
        <HomeBanner />
        <MainPost />

        <h2 className="mt-5 mb-5 text-2xl font-semibold">What&apos;s New?</h2>
        <PostsWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
