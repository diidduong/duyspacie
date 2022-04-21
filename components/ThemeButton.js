import {useState} from 'react'
import {daisyui} from "../tailwind.config"

export default function ThemeButton() {
  // Get all themes from config
  const themeList = daisyui.themes

  const themeSize = themeList.length
  const [themeIdx, setThemeIdx] = useState(0)

  function changeToNextTheme() {
    console.log(themeIdx)
    setThemeIdx(prevIdx => (prevIdx + 1) % themeSize)
    
  }
  
  return (
    <div>
      <button 
      className="text-3xl font-bold"
      onClick={changeToNextTheme}
      data-set-theme={themeList[themeIdx]}
      data-act-class="ACTIVECLASS">
        " Welcome to Duy Spacie "
      </button>
    </div>
  )
}


