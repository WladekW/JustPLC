import styles from './TitleBar.module.css'
import SharMinimize from '../assets/icons/minimize.svg?raw'
import SharMaximize from '../assets/icons/maximize.svg?raw'
import SharClose from '../assets/icons/close.svg?raw'
import SharRestore from '../assets/icons/restore.svg?raw'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

function TitleBar(): React.JSX.Element {
  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {
    window.windowControls.isMaximized().then(setIsMaximized)
    const unsubscribe = window.windowControls.onMaximizedChange((maximized) => {
      setIsMaximized(maximized)
    })
    return () => unsubscribe()
  }, [])

  return (
    <section className={styles.title_bar}>
      <div className={styles.title_bar__menu}>
        <button>
          <Menu size={16} />
        </button>
        <button>File</button>
        <button>Edit</button>
        <button>Selection</button>
        <button>Go</button>
      </div>
      <div className={styles.window_controls}>
        <button
          className="sharp_button"
          dangerouslySetInnerHTML={{ __html: SharMinimize }}
          onClick={() => window.windowControls.minimize()}
        />
        {isMaximized ? (
          <button
            className="sharp_button"
            dangerouslySetInnerHTML={{ __html: SharRestore }}
            onClick={() => window.windowControls.maximize()}
          />
        ) : (
          <button
            className="sharp_button"
            dangerouslySetInnerHTML={{ __html: SharMaximize }}
            onClick={() => window.windowControls.maximize()}
          />
        )}
        <button
          className="sharp_button red_hovered"
          dangerouslySetInnerHTML={{ __html: SharClose }}
          onClick={() => window.windowControls.close()}
        />
      </div>
    </section>
  )
}

export default TitleBar
