import { ReactElement , useState, useEffect} from "react"

export const DarkMode = ():ReactElement =>{
    const [isDarkMode, setisDarkMode] = useState(false);

    useEffect(()=>{
        if(isDarkMode){
          document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark')
        }
    },[isDarkMode])

    const ToggleDarkMode = () =>{
        setisDarkMode((prevDarkMode) => !prevDarkMode)
    }
  return(
    <button onClick={ToggleDarkMode}>{ isDarkMode ? 'Light Mode':' Night mode'}</button>
  )
}