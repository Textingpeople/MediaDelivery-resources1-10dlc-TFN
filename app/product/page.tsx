import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import ProductHero from '@/components/product/ProductHero';
import ConciergeSupport from '@/components/product/ConciergeSupport';
import NotificationsSection from '@/components/product/NotificationsSection';
import ServiceCategories from '@/components/product/ServiceCategories';
import FeaturesGrid from '@/components/product/FeaturesGrid';
import RequestToDone from '@/components/product/RequestToDone';
import ProductCta from '@/components/product/ProductCta';
import { NAVY, IVORY } from '@/lib/theme';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: NAVY }}>
      <SiteNav />
      <ProductHero />
      <ConciergeSupport />
      <NotificationsSection />
      <ServiceCategories />
      <FeaturesGrid />
      <RequestToDone />
      <ProductCta />
      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: IVORY }}>
        <Disclaimer />
      </section>
      <SiteFooter />
    </div>
  );
}
