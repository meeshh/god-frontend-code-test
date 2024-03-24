import Image from "next/image";
import { CarType } from "../../types";
import ActionLink from "./ActionLink";

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
          <div className="md:flex gap-16" style={{ fontSize: "90%" }}>
            <h6 className="font-medium">{modelName}</h6>
            <h6 className="text-secondary mb-16">{modelType}</h6>
          </div>
        </figcaption>
        <Image
          style={{
            height: "auto",
            width: "100%",
          }}
          width={300}
          height={200}
          priority
          src={imageUrl}
          alt={modelName}
        />
      </figure>
      <footer className="flex items-center justify-center gap-16 mt-16 mb-8">
        <ActionLink label="Learn" href={`/learn/${id}`} />
        <ActionLink label="Shop" href={`/shop/${id}`} />
      </footer>
    </article>
  );
};

export default CarCard;
