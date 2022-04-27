import {  Hero, 
          SearchPanel, 
          TextImagePanel,
          BlogPanel } from "../components";

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