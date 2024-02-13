import MainLayouts from "@/layouts/MainLayouts";
import { Context } from "@/provider/MainContext";
import { useContext } from "react";

export default const homePage = () => {
  const {user} = useContext(Context)
  console.log(user);
  
  return (
    <MainLayouts>
      <div>
        سلام یه اپلیکشنم خوش اومدی {user?.name} {user?.family}
      </div>
    </MainLayouts>
  );
};

export default homePage;


export default function getStaticProps() {
  return {
    props: {
      title: 'salam',
      body: "کامنت شماره فلان"
    },
  }
}