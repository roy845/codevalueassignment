import MainLayout from "../components/layout/MainLayout";
import TopSection from "../components/sections/TopSection";
import BottomSection from "../components/sections/BottomSection";

const Home = (): JSX.Element => {
  return (
    <MainLayout title="Product List">
      <TopSection />
      <BottomSection />
    </MainLayout>
  );
};

export default Home;
