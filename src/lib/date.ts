export const REGIS_START_DATE = '2024/03/01 09:00:00'
export const REGIS_END_DATE = '2024/03/11 23:59:59'

const today = new Date().getTime()
const startDate = new Date(REGIS_START_DATE).getTime()
const endDate = new Date(REGIS_END_DATE).getTime()

export const isTodayRegis = (): boolean => {
  return today >= startDate && today <= endDate
}

export const isTodayInTimeline = (from: string, until: string): boolean => {
  return today >= new Date(from).getTime() && today <= new Date(until).getTime()
}
