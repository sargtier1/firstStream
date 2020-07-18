export const themeStorage = {
  get: async (): Promise<string | null> => {
    const mode = await localStorage.getItem('mode')
    return mode
  },
  set: (mode: string) => {
    return localStorage.setItem('mode', mode)
  },
}
