type PageProps = {
  params: { id: string };
};

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <>
      <h3>The shop page of {params.id}</h3>
    </>
  );
};

export default Page;
