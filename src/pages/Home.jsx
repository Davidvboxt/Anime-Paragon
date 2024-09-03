import React from "react";
import { AnimePopular, Header, Categories, AnimeTopPicks } from "../components";

export const Home = () => {
  return (
    <main>
      <Header />
      <Categories />  
      <AnimePopular />
      <AnimeTopPicks />
    </main>
  );
};
