import { getImgUrl } from "../../utils";

const ImageCard = ({url}) => {
  return (
    <div className="p-px bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)]  rounded-xl">
        <img
          className=" bg-gray-900/95 rounded-xl"
          src={getImgUrl(url)}
          alt=""
          
        />
    </div>
  );
};

export default ImageCard;
