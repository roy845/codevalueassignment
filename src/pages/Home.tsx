import MainLayout from "../components/layout/MainLayout";
import TopSection from "../components/sections/TopSection";
import BottomSection from "../components/sections/BottomSection";
import { MainLayoutEnum } from "../constants/mainLayoutConstants";

const Home = (): JSX.Element => {
  return (
    <MainLayout title={MainLayoutEnum.PRODUCT_LIST}>
      <TopSection />
      <BottomSection />
    </MainLayout>
  );
};

export default Home;
