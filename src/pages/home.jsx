import { Hero, SearchPanel, TextImagePanel } from "../components";
import BlogPanel from "../components/section/blogPanel";

const Home = ({home}) => {
  return(
    <>
      <Hero {...home.hero} />
      <TextImagePanel {...home.textImagePanel} />
      <SearchPanel {...home.searchPanel} />
      <BlogPanel {...home} />
    </>
  );
}

export default Home;