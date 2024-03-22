import Image from "next/image";

const CarCard = () => {
  return (
    <article>
      <figure>
        <figcaption>
          <h6 className="font- uppercase text-secondary font-medium">Body Type</h6>
          <div className="font-20 flex gap-16">
            <h6 className="font-medium">Car Name</h6>
            <h6 className="text-secondary mb-16">Model type</h6>
          </div>
        </figcaption>
        <Image
          style={{
            height: "auto",
          }}
          width={300}
          height={200}
          src="/images/s60_recharge.jpg"
          alt="Car name"
        />
      </figure>
    </article>
  );
};

export default CarCard;
