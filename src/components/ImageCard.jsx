import { getImgUrl } from "../../utils";
const ImageCard = ({ url, className, alt }) => {
  return <img className={className} src={getImgUrl(url)} alt={alt} />;
};

export default ImageCard;
