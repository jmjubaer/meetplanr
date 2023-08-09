import './globals.css'
export const metadata = {
  title: 'MeetPlanr',
  description: 'Generated by create next app',
}
import { poppins } from '@/components/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  ) 
}
