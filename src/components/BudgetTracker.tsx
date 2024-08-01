import AmountDisplay from "./AmountDisplay";
import { useBudget } from "../hooks/useBudget";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

export default function BudgetTracker() {

    const {state, totalExpense, saldoDisponible, dispatch} = useBudget()

    const percentage = +((totalExpense / state.budget) * 100).toFixed(1)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex justify-center">
            <CircularProgressbar 
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                    trailColor: '#F5F5F5',
                    textSize: 8,
                    textColor: percentage === 100 ? '#DC2626' : '#3b82f6'
                })}
                text={`${percentage}% gastado`}
            />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button
                type="button"
                className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                onClick={() => dispatch({type: 'reset-app'})}  
            >
                Resetar App
            </button>

            <AmountDisplay 
                label="Presupuesto"
                amount={state.budget}
            />

            <AmountDisplay 
                label="Disponible"
                amount={saldoDisponible}
            />

            <AmountDisplay 
                label="Gastado"
                amount={totalExpense}
            />
        </div>
    </div>
  )
}
