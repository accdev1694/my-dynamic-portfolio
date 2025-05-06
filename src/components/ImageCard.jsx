import { getImgUrl } from "../../utils";
const ImageCard = ({ url, classNames, alt }) => {
  return (
    <div className="p-px min-w-[32px] rounded-full">
      <img
        className={`${classNames} bg-gray-900/95 rounded-full`}
        src={getImgUrl(url)}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
