import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpanseDetail from "./ExpanseDetail";

export default function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expnse) => expnse.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(() => filteredExpenses.length === 0, [state.expenses]);

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {isEmpty ? (
        <p className="text-gray-600 text 2xl font-bold">No hay gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Gastos:</p>
          {filteredExpenses.map((expense) => (
            <ExpanseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
