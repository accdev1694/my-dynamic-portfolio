import { getImgUrl } from "../../utils";

const ImageCard = ({ url, width, alt }) => {
  return <img className={width} src={getImgUrl(url)} alt={alt} />;
};

export default ImageCard;
