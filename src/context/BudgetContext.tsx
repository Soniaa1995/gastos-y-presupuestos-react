import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState,
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!) //context le dice al provider que va a tener un state y un dispatch

export const BudgetProvider = ({children} : BudgetProviderProps) => { //el provider es de donde vienen los datos //los datos que va a tener el context
    
    const [state, dispatch] = useReducer(budgetReducer, initialState)
    
    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
