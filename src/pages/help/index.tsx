import { useRouter } from "next/router";

const help = () => {
  const router = useRouter();
  console.log(router);

  const handlePush = (id: number) => {
    router.push(`/help/${id}`)
  }
  return (
    <div>
      من اومدم کمکت کنم
      <button onClick={() => handlePush(1)}>1</button>
      <button onClick={() => handlePush(2)}>2</button>
      <button onClick={() => handlePush(3)}>3</button>
    </div>
  );
};

export default help;
