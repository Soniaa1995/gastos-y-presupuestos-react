export function formartCurrency(amount: number) {
    return new Intl.NumberFormat('es-EU',
        {style: 'currency', currency:'EUR'}).format(amount)
}

export function formatDate(dateStr: string) : string {
    const dateObj = new Date(dateStr)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return new Intl.DateTimeFormat('es-Es', options).format(dateObj)
}