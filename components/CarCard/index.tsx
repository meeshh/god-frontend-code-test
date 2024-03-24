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
          <h2 className="font- uppercase text-secondary font-medium">
            {bodyType}
          </h2>
          <div className="md:flex gap-16" style={{ fontSize: "90%" }}>
            <h3 className="font-medium">{modelName}</h3>
            <h4 className="text-secondary mb-16">{modelType}</h4>
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
        <ActionLink label="Learn" id={id} href={`/learn/${id}`} />
        <ActionLink label="Shop" id={id} href={`/shop/${id}`} />
      </footer>
    </article>
  );
};

export default CarCard;
