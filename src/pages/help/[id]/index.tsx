import { useRouter } from "next/router";

const help = () => {
  const router = useRouter();
  const {id} = router.query
  return (
    <div>
      <h1>سلام {id}</h1>
    </div>
  );
};

export default help;
