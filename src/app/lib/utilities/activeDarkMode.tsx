export const checkDarkMode = () => {
  const root = document.getElementById('root')
  let stateDarkMode=false
  if (
    localStorage.getItem('theme') == 'dark'
    // (!('theme' in localStorage) &&
    //   window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    root?.classList.add('dark')
    stateDarkMode=true
    // document.documentElement.classList.add('dark')
  } else {
    root?.classList.remove('dark')
    // document.documentElement.classList.remove('dark')
  }
  return stateDarkMode
}

export function disableDarkMode() {
  const root = document.getElementById('root')
  root?.classList.remove('dark')
  //   document.documentElement.classList.remove('dark')
  localStorage.setItem('theme', 'light')
}

export function enableDarkMode() {
  const root = document.getElementById('root')
  root?.classList.add('dark')
  //   document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
}

export function statusDarkMode() {
  return localStorage.getItem('theme') == 'dark'
}



