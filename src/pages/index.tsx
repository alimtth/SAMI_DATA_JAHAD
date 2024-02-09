import MainLayouts from "@/layouts/MainLayouts";
import { Context } from "@/provider/MainContext";
import { useContext } from "react";

const homePage = () => {
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
