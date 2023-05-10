interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  /**
   * Cria um array com 7 posições [0, 1, 2, ...]
   * logo mapeia cada index retornando os dias da semana
   * ['segunda-feira', 'terça-feira', ...]
   * caso seja passado o parâmetro short como true ele vai
   * retornar [SEG, TER, QUA, ...]
   */
  const daysOfWeek = Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2023, 7, day))))
    .map((weekDay) => {
      if (short) {
        // [SEG, TER, ...]
        return weekDay.substring(0, 3).toLocaleUpperCase()
      }
      // ['Segunda-feira', 'Terça-feira', ...]
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })

  return daysOfWeek
}
