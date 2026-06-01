import AOSInit from '@/components/AOSInit'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import VideoSection from '@/components/VideoSection'
import ForWhoSection from '@/components/ForWhoSection'
import MethodSection from '@/components/MethodSection'
import BioSection from '@/components/BioSection'
import ProductsSection from '@/components/ProductsSection'
import FAQSection from '@/components/FAQSection'
import CTAFinalSection from '@/components/CTAFinalSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <AOSInit />
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <ForWhoSection />
        <MethodSection />
        <BioSection />
        <ProductsSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}
