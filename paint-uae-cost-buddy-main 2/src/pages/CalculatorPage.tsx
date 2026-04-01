import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaintingCalculator from '@/components/PaintingCalculator';

const CalculatorPage = () => {
  return (
    <>
      <SEOHead
        title="حاسبة تسعير الدهانات المجانية - احسب تكلفة مشروعك بدقة"
        description="حاسبة تسعير الدهانات الأكثر تطوراً في الإمارات. احسب تكلفة العمالة والمواد والنفقات العامة. 8 مراحل دهان، 3 أنماط إنتاجية، أسعار 5 ماركات عالمية. مجانية 100%."
        keywords="حاسبة تسعير الدهانات, حاسبة تكلفة الطلاء الإمارات, حساب تكلفة الدهان, paint calculator UAE, أداة تسعير المقاولات"
        canonicalUrl="https://paint-calculator-uae.com/calculator"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "حاسبة تسعير الدهانات - الإمارات",
          "url": "https://paint-calculator-uae.com/calculator",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "AED"
          }
        }}
      />
      <Header />
      <main className="min-h-screen">
        <div className="bg-gradient-to-bl from-blue-900 to-blue-950 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">حاسبة تسعير الدهانات المتقدمة</h1>
            <p className="text-blue-200">أدخل تفاصيل مشروعك واحصل على تسعير دقيق مبني على معايير عالمية</p>
          </div>
        </div>
        <PaintingCalculator />
      </main>
      <Footer />
    </>
  );
};

export default CalculatorPage;
