const Banner = ({ color }) => {
  return (
    <div className={`border rounded-full w-fit text-xs px-2 border-${color}`}>
      Movies
    </div>
  );
};

export default Banner;
