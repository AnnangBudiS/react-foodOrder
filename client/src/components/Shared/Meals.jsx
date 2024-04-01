import useHttp from "../../hooks/useHttp";

import CardMeals from "./CardMeals";
import Error from "./Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    loading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (loading) {
    return <p>Fetching mealss</p>;
  }

  if (error) {
    return <Error title="Failed to Load data!" message={error} />;
  }

  return (
    <section className="container mx-auto p-4 lg:px-52">
      <h2 className="text-xl text-orange-500 font-bold">
        What do you want to order today?
      </h2>
      <ul className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <CardMeals key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
};

export default Meals;
