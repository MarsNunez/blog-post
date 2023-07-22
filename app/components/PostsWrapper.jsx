import PostCard from "./PostCard";

const PostsWrapper = () => {
  return (
    <div className="md:grid grid-cols-2 gap-4 lg:grid-cols-3">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostsWrapper;
