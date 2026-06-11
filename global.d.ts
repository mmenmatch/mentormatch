interface Window {
  gtag: (...args: any[]) => void
  dataLayer: Record<string, any>[]
  fbq?: (...args: any[]) => void

}