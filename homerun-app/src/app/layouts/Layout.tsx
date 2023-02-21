import { ReactNode, FC } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

type IProps = {
  children: ReactNode;
};

const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>{children}</div>
    </main>
       <Footer />
    </>
  );
};

export default MainLayout;
