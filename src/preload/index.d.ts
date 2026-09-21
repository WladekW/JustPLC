import { ElectronAPI } from '@electron-toolkit/preload'

export interface WindowControls {
  minimize: () => void
  maximize: () => void
  close: () => void
  isMaximized: () => Promise<boolean>
  onMaximizedChange: (callback: (isMaximized: boolean) => void) => () => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    windowControls: WindowControls
  }
}
