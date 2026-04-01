import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, TrendingUp, Home, Building, MapPin } from 'lucide-react';

const PricingGuide = () => {
  return (
    <>
      <SEOHead
        title="دليل أسعار الدهانات في الإمارات 2026 - أسعار محدثة لكل المدن"
        description="دليل شامل ومحدث لأسعار الدهانات في الإمارات 2026. أسعار دهان المتر المربع في دبي وأبوظبي والشارقة. تكلفة دهان الشقق والفلل والمكاتب. مقارنة أسعار جوتن ودولكس ونيبون."
        keywords="أسعار الدهانات الإمارات 2026, تكلفة دهان المتر المربع دبي, أسعار دهان الشقة أبوظبي, تكلفة دهان الفيلا, أسعار مقاولي الدهانات, سعر دهان جوتن, سعر دهان دولكس"
        canonicalUrl="https://paint-calculator-uae.com/pricing-guide"
        type="article"
        articlePublishedTime="2026-01-15T00:00:00Z"
        articleModifiedTime="2026-04-01T00:00:00Z"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "دليل أسعار الدهانات في الإمارات 2026 - أسعار محدثة لكل المدن",
          "datePublished": "2026-01-15",
          "dateModified": "2026-04-01",
          "author": {
            "@type": "Organization",
            "name": "حاسبة تسعير الدهانات - الإمارات"
          },
          "publisher": {
            "@type": "Organization",
            "name": "حاسبة تسعير الدهانات - الإمارات"
          },
          "mainEntityOfPage": "https://paint-calculator-uae.com/pricing-guide"
        }}
      />
      <Header />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-bl from-blue-900 to-blue-950 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              دليل أسعار الدهانات في الإمارات 2026
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              دليل شامل ومحدث يغطي أسعار جميع أنواع الدهانات في كل مدن الإمارات
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Intro */}
          <article className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              يعتبر قطاع الدهانات من أهم قطاعات التشطيبات في سوق البناء الإماراتي. مع التوسع العمراني المستمر
              في <strong>دبي</strong> و<strong>أبوظبي</strong> و<strong>الشارقة</strong>، يزداد الطلب على خدمات الدهانات
              سواء للمشاريع الجديدة أو لإعادة الطلاء. في هذا الدليل نقدم لك أسعاراً محدثة لعام 2026 تساعدك
              في تخطيط ميزانية مشروعك بدقة.
            </p>
          </article>

          {/* Per sqm prices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              أسعار الدهان حسب المتر المربع
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-4 px-6 text-right font-bold">نوع الدهان</th>
                    <th className="py-4 px-6 text-center font-bold">السعر (درهم/م²)</th>
                    <th className="py-4 px-6 text-right font-bold">يشمل</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'دهان بلاستيكي اقتصادي', price: '12 - 18', includes: 'طبقتين بدون تسوية' },
                    { type: 'دهان بلاستيكي متوسط', price: '18 - 28', includes: '3 طبقات مع سكينة واحدة' },
                    { type: 'دهان جوتن/دولكس فاخر', price: '28 - 45', includes: 'سكينتين + 3 طبقات + تفنيش' },
                    { type: 'دهان خارجي مقاوم', price: '25 - 45', includes: 'سيلر + برايمر + طبقتين خارجي' },
                    { type: 'دهان أسقف', price: '18 - 32', includes: 'تسوية + طبقتين (عامل ارتفاع)' },
                    { type: 'دهان خشب (أبواب)', price: '28 - 50', includes: 'صنفرة + سيلر + 3 طبقات لاكيه' },
                    { type: 'دهان حديد', price: '30 - 55', includes: 'صنفرة + مانع صدأ + طبقتين' },
                    { type: 'ورق جدران + تركيب', price: '35 - 80', includes: 'حسب نوع الورق والتصميم' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-6 font-medium text-gray-900">{row.type}</td>
                      <td className="py-3 px-6 text-center font-bold text-blue-600">{row.price}</td>
                      <td className="py-3 px-6 text-gray-600 text-sm">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* By property type */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              تكلفة الدهان حسب نوع العقار
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { type: 'استوديو / غرفة وصالة', area: '40-80 م²', price: '2,500 - 6,000', desc: 'دهان داخلي كامل مع تسوية بسيطة' },
                { type: 'شقة غرفتين وصالة', area: '80-120 م²', price: '5,000 - 12,000', desc: 'دهان كامل مع تسوية وتفنيش' },
                { type: 'شقة 3 غرف وصالة', area: '120-180 م²', price: '8,000 - 18,000', desc: 'دهان فاخر مع جميع المراحل' },
                { type: 'فيلا صغيرة (3 غرف)', area: '200-300 م²', price: '15,000 - 35,000', desc: 'داخلي + خارجي شامل' },
                { type: 'فيلا كبيرة (5+ غرف)', area: '400-600 م²', price: '30,000 - 65,000', desc: 'دهان فاخر داخلي وخارجي' },
                { type: 'مكتب / محل تجاري', area: '50-200 م²', price: '4,000 - 20,000', desc: 'حسب المساحة والمتطلبات' },
              ].map((item) => (
                <Card key={item.type} className="shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500 mb-2">المساحة: {item.area}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.price} درهم</div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* By City */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              فروقات الأسعار حسب المدينة
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                تختلف أسعار الدهانات بين مدن الإمارات بسبب تكاليف المعيشة والنقل وتوفر العمالة.
                إليك مقارنة تقريبية لمتوسط سعر المتر المربع (دهان داخلي متوسط الجودة):
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { city: 'دبي', price: '28-38', badge: 'الأعلى' },
                  { city: 'أبوظبي', price: '25-35', badge: 'مرتفع' },
                  { city: 'الشارقة', price: '20-30', badge: 'متوسط' },
                  { city: 'عجمان', price: '18-26', badge: 'معقول' },
                  { city: 'رأس الخيمة', price: '16-24', badge: 'اقتصادي' },
                  { city: 'الفجيرة', price: '16-24', badge: 'اقتصادي' },
                  { city: 'أم القيوين', price: '15-22', badge: 'الأقل' },
                  { city: 'العين', price: '22-30', badge: 'متوسط' },
                ].map((item) => (
                  <div key={item.city} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="font-bold text-gray-900 mb-1">{item.city}</div>
                    <div className="text-lg font-bold text-blue-600">{item.price}</div>
                    <div className="text-xs text-gray-500">درهم/م²</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Paint brand prices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-600" />
              أسعار أشهر ماركات الدهانات في الإمارات
            </h2>
            <div className="space-y-6">
              {[
                {
                  brand: 'جوتن (Jotun)',
                  origin: 'نرويجي',
                  products: [
                    { name: 'Jotun Majestic True Beauty', price: '85-120 درهم/جالون', coverage: '12-14 م²/لتر' },
                    { name: 'Jotun Fenomastic', price: '95-140 درهم/جالون', coverage: '10-12 م²/لتر' },
                    { name: 'Jotashield Extreme', price: '130-180 درهم/جالون', coverage: '8-10 م²/لتر' },
                  ],
                  note: 'الأكثر شعبية في الإمارات. مقاومة ممتازة للحرارة والرطوبة.',
                },
                {
                  brand: 'دولكس (Dulux)',
                  origin: 'بريطاني',
                  products: [
                    { name: 'Dulux Wash & Wear', price: '70-100 درهم/جالون', coverage: '12-14 م²/لتر' },
                    { name: 'Dulux Weathershield', price: '90-130 درهم/جالون', coverage: '10-12 م²/لتر' },
                    { name: 'Dulux Velvet Touch', price: '80-110 درهم/جالون', coverage: '11-13 م²/لتر' },
                  ],
                  note: 'تغطية ممتازة وألوان متنوعة. خيار جيد للميزانية المتوسطة.',
                },
                {
                  brand: 'نيبون (Nippon)',
                  origin: 'ياباني',
                  products: [
                    { name: 'Nippon Matex', price: '55-75 درهم/جالون', coverage: '10-12 م²/لتر' },
                    { name: 'Nippon Vinilex', price: '65-90 درهم/جالون', coverage: '11-13 م²/لتر' },
                    { name: 'Nippon Weatherbond', price: '85-115 درهم/جالون', coverage: '9-11 م²/لتر' },
                  ],
                  note: 'خيار اقتصادي ممتاز مع جودة يابانية موثوقة.',
                },
              ].map((brand) => (
                <Card key={brand.brand} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{brand.brand}</span>
                      <span className="text-sm font-normal text-gray-500">المنشأ: {brand.origin}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2 text-right font-medium text-gray-600">المنتج</th>
                            <th className="py-2 text-center font-medium text-gray-600">السعر</th>
                            <th className="py-2 text-center font-medium text-gray-600">التغطية</th>
                          </tr>
                        </thead>
                        <tbody>
                          {brand.products.map((p) => (
                            <tr key={p.name} className="border-b last:border-0">
                              <td className="py-2 font-medium">{p.name}</td>
                              <td className="py-2 text-center text-blue-600 font-bold">{p.price}</td>
                              <td className="py-2 text-center text-gray-500">{p.coverage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">{brand.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Factors affecting price */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">العوامل المؤثرة في سعر الدهان</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              {[
                { title: 'حالة السطح الحالية', desc: 'الجدران الجديدة تحتاج تجهيز أقل. الجدران القديمة أو المتضررة تحتاج صنفرة وتسوية إضافية تزيد التكلفة 30-50%.' },
                { title: 'نوع وجودة الدهان', desc: 'الدهانات الفاخرة (جوتن فينوماستيك مثلاً) أغلى بنسبة 40-60% من الاقتصادية، لكنها تدوم أطول وتوفر تغطية أفضل.' },
                { title: 'عدد الطبقات المطلوبة', desc: 'كل طبقة إضافية تزيد التكلفة 25-35%. معظم المشاريع تحتاج 2-3 طبقات للحصول على نتيجة مثالية.' },
                { title: 'ارتفاع الأسقف والسقالات', desc: 'الأسقف العالية (أكثر من 3 أمتار) تحتاج سقالات وتقلل الإنتاجية، مما يزيد التكلفة 25-60%.' },
                { title: 'الموقع الجغرافي', desc: 'أسعار دبي وأبوظبي أعلى بنسبة 15-30% من الإمارات الشمالية بسبب تكاليف المعيشة والنقل.' },
                { title: 'الموسم والطلب', desc: 'الأسعار ترتفع 10-20% في فترات الذروة (سبتمبر-نوفمبر ويناير-مارس) بسبب ارتفاع الطلب.' },
              ].map((item) => (
                <div key={item.title} className="border-r-4 border-blue-500 pr-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-bl from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">احصل على تسعير دقيق لمشروعك</h2>
            <p className="text-blue-100 mb-6">
              بدلاً من التقديرات التقريبية، استخدم حاسبتنا المبنية على معايير عالمية للحصول على سعر دقيق
            </p>
            <Link to="/calculator">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-8 py-6">
                <Calculator className="w-5 h-5 ml-2" />
                استخدم الحاسبة المجانية
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PricingGuide;
