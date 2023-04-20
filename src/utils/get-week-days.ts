export function getWeekDays() {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  // [0, 1, 2, 3, 4, 5, 6]
  const daysOfWeek = Array.from(Array(7).keys())

  // ['segunda-feira', 'terça-feira', ...]
  const formattedDaysOfWeek = daysOfWeek.map((day) =>
    formatter.format(new Date(Date.UTC(2023, 7, day)))
  )

  // ['Segunda-feira', 'Terça-feira', ...]
  const weekDaysWithFistLetterUppercase = formattedDaysOfWeek.map((weekDay) => {
    return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
  })

  return weekDaysWithFistLetterUppercase
}
