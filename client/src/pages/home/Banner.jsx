import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-12 m-20">
      <div>
        <h1 className="text-3xl mb-7">New Releases This Week</h1>
        <p className="mb-7">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="bg-[#FFCE1A] py-2 px-5 rounded-lg">Subscribe</button>
      </div>
      <div className="w-full">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
