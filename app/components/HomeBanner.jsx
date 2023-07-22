const HomeBanner = () => {
  return (
    <div className="text-center bg-[#f8f4f4] py-4 md:py-9 px-2 rounded-xl mb-5 md:mb-10">
      <p className="uppercase banner text-[0.7rem] md:text-base md:font-medium text-gray-800 md:mb-3">
        Welcome to Buletin
      </p>
      <h4 className="text-sm md:text-2xl font-medium md:font-semibold leading-5">
        Crafted narratives✍🏻 that ignite
        <span className="text-red-600"> inspiration</span>💡,
        <br />
        <span className="text-red-600">knowledge</span>📕, and
        <span className="text-red-600"> entertainment</span>🎬
      </h4>
    </div>
  );
};

export default HomeBanner;
