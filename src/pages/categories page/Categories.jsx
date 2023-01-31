import LoadingSpinner from "../../shared components/LoadingSpinner";
import Genre from "./Genre";
import useCategoriesFetch from "./useCategoriesFetch";

const Categories = ({ type }) => {
  const { genres } = useCategoriesFetch(`genre/${type}/list`);
  if (!genres) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 [&>*:nth-child(3n)]:bg-rose-500 [&>*:nth-child(odd)]:bg-black [&>*:nth-child(odd)]:text-white  [&>*:nth-child(5n)]:bg-yellow-500  md:min-w-[600px] lg:min-w-[800px] max-w-[1200px]  lg:grid-cols-4   lg:gap-3 p-4 ">
      {genres.map((genre, idx) => (
        <Genre type={type} id={genre.id} key={genre.id} name={genre.name} />
      ))}
    </div>
  );
};

export default Categories;
