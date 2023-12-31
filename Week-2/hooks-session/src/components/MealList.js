import { useMealsListContext } from "../providers/MealsProvider";

var MealList = () => {
  var { meals } = useMealsListContext();

  console.log(meals);

  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
};

export default MealList;
