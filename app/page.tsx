import Body from "./components/body";
import Header from "./components/header";
import OurServices from "./components/ourServices";
import OurStory from "./components/ourStory";
import WtButton from "./components/wtButton";

export default function Home() {
  return (
    <>
      <Header/>
      <Body/>
      <WtButton/>
      <OurStory/>
      <OurServices/>
    </>
  );
}