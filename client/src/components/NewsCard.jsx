import { getnewsUrl } from "../utils/getImgUrl";

/* eslint-disable react/prop-types */
const NewsCard = ({ news }) => {
//   console.log(news);
  return (
    <div className="flex justify-center items-center g-4">
      <div>
        <div>{news.title}</div>
        <div className="w-12 h-[4px] bg-primary mb-5"></div>
        <div>{news.description}</div>
      </div>
      <div className="flex-shrink-0">
        <img src={`${getnewsUrl(news.image)}`} alt="" />
      </div>
    </div>
  );
};

export default NewsCard;
