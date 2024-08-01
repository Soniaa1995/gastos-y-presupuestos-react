import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState,
    dispatch: Dispatch<BudgetActions>,
    totalExpense: number,
    saldoDisponible: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!) //context le dice al provider que va a tener un state y un dispatch
//genera los datos

export const BudgetProvider = ({children} : BudgetProviderProps) => { //el provider es de donde vienen los datos //los datos que va a tener el context  //es lo que contiene los datos
    
    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpense = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

    const saldoDisponible = state.budget - totalExpense
    
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch, 
                totalExpense,
                saldoDisponible
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
