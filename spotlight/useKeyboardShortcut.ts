export function useKeyboardShortcut(keyCombo: string, handler: () => void) {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault()
      handler()
    }
  })
}
