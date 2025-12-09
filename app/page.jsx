import Banner from "./Components/Banner";
import Artists from "./Components/Artists";
import MusicPage from "./music/page.jsx";
import ContactPage from "./contact/page.jsx";

export default function HomePage() {
  return (
    <>
      
      <Banner />
      <Artists />
      <MusicPage />
      <ContactPage></ContactPage>
    </>
  );
}