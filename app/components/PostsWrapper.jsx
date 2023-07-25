import PostCard from "./PostCard";

const PostsWrapper = ({ posts }) => {
  return (
    <div className="md:grid grid-cols-2 gap-4 lg:grid-cols-3">
      {posts.map((post) => {
        return <PostCard key={post.node.id} post={post} />;
      })}
    </div>
  );
};

export default PostsWrapper;
