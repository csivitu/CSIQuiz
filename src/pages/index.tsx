import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/common/Header'
import About from '@/components/uncommon/About'
import Sponsors from '@/components/uncommon/Sponsors'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <About />
    <Sponsors />
    </>
  )
}
