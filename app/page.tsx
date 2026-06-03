import AOSInit from '@/components/AOSInit'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import VideoSection from '@/components/VideoSection'
import ForWhoSection from '@/components/ForWhoSection'
import BioSection from '@/components/BioSection'
import ProductGallery from '@/components/ProductGallery'
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
        <BioSection />
        <ProductGallery />
        <ProductsSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}
