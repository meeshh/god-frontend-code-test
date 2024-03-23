import Image from "next/image";
import { CarType } from "../../types";

type CarCardProps = CarType;

const CarCard: React.FC<CarCardProps> = ({
  id,
  bodyType,
  modelName,
  modelType,
  imageUrl,
}) => {
  return (
    <article>
      <figure>
        <figcaption>
          <h6 className="font- uppercase text-secondary font-medium">
            {bodyType}
          </h6>
          <div className="font-20 md:flex gap-16">
            <h6 className="font-medium">{modelName}</h6>
            <h6 className="text-secondary mb-16">{modelType}</h6>
          </div>
        </figcaption>
        <Image
          style={{
            height: "auto",
          }}
          width={300}
          height={200}
          src={imageUrl}
          alt={modelName}
        />
      </figure>
    </article>
  );
};

export default CarCard;
