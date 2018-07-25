const isPhone = () =>
  typeof window !== 'undefined' &&
  window.innerWidth <= 800 &&
  window.innerHeight <= 600

export default isPhone
