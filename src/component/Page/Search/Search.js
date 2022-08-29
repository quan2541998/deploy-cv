import { useSelector } from "react-redux";

import SearchSlider from "./SearchSlider";
import MoviesDetail from "../Home/MovieDetail/MovieDetail";

const Search = () => {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchSlider />
      <MoviesDetail movie={MovieDetail} isShow={MovieDetail ? true : false} />
    </div>
  );
};

export default Search;
