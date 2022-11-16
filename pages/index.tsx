import { NextPage } from "next";
import Converter from "../components/Converter";
const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex-grow grid place-items-center ">
        <Converter />
      </div>
    </div>
  );
};
export default IndexPage;
