"strict mode";
const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpence = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const CleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  return value <= getLimit(limits, CleanUser)
    ? [...state, { value: -value, description, user: CleanUser }]
    : state;
};
const newBudget1 = addExpence(budget, spendingLimits, 10, "Pizza 🍕");

const newBudget2 = addExpence(
  newBudget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
const newBudget3 = addExpence(newBudget2, spendingLimits, 500, "Stuff", "jay");

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpense = state
    .filter(entry => entry.value <= -bigLimit)
    //   .map(entry => entry.description.slice(-2))
    // .join("/");
    .reduce((str, cur) => `${str}  ${cur.description.slice(-2)}`, "");

  console.log(bigExpense);
  /* let output = "";
  for (var entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
  */
};

logBigExpenses(finalBudget, 400);
