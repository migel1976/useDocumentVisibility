# useDocumentVisibility
### происходит сборка пакета c использованием rollup: 
npm run build 


### публикация пакета в npm: 
npm init --scope=@имя пользователя  
npm publish --access public 

### пример использование пакета:
```javascript

import { useEffect } from "react"
import useDocumentVisibility from "@migel1976/react-document-visibility"

const App=()=>{
    const {count, visible, onVisibilityChange}=useDocumentVisibility()
    useEffect(()=>{
      onVisibilityChange((isVisible)=>{
        console.log('first handler ', isVisible)
      })
      const unsubscribeSecondHandler = ()=>onVisibilityChange((isVisible) => {
        console.log('second handler', isVisible)
      });
     setTimeout(() => unsubscribeSecondHandler(), 5000); // отписываемся от 'second handler' через 5 секунд
     },[])

  return(
    <>
      <p>
        страница сейчас  {visible ? 'активна' : 'не активна'}
      </p>
      <p>
        эта страница была не активна {count} раз
      </p>
    </>
  )
}
export default App
