export const usePoints = () => {
  return useState('points',
  () =>   ({points: 1000})
  )
}
  