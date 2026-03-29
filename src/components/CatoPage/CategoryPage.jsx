import { useParams } from "react-router-dom";
import { allData } from "../../assets/allData";

const CategoryPage = () => {

  const { category } = useParams();

  const filtered = allData.filter(
    (item) => item.category === category
  );

  return (
    <div>
      {filtered.map((item) => (
        <h3 key={item.id}>{item.title}</h3>
      ))}
    </div>
  );
};

export default CategoryPage;