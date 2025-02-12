import { ReactNode } from "react"

type ErrorMessageProps = {
    children : ReactNode //reactNode permite renderizar string y componentes dentro de otros componentes
}

export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
        {children}
    </p>
  )
}
