import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, CheckCircle, XCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PaintTypes = () => {
  return (
    <>
      <SEOHead
        title="أنواع الدهانات في الإمارات - مقارنة شاملة بين جوتن ودولكس ونيبون"
        description="دليل شامل لأنواع الدهانات المتوفرة في الإمارات. مقارنة تفصيلية بين جوتن ودولكس ونيبون وآسيان وبرجر. أنواع الدهان الداخلي والخارجي وأفضل خيار لمناخ الإمارات."
        keywords="أنواع الدهانات الإمارات, مقارنة دهان جوتن دولكس, أفضل دهان للإمارات, دهان داخلي خارجي, أنواع الطلاء, دهان مقاوم للحرارة, paint types UAE"
        canonicalUrl="https://paint-calculator-uae.com/paint-types"
        type="article"
        articlePublishedTime="2026-01-20T00:00:00Z"
        articleModifiedTime="2026-04-01T00:00:00Z"
      />
      <Header />

      <main className="min-h-screen">
        <section className="bg-gradient-to-bl from-blue-900 to-blue-950 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              أنواع الدهانات في الإمارات
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              دليل شامل لاختيار أفضل نوع دهان لمشروعك مع مقارنة تفصيلية بين أشهر الماركات
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Paint Categories */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">التصنيفات الرئيسية للدهانات</h2>

            <div className="space-y-8">
              {/* Interior */}
              <Card className="shadow-lg border-r-4 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl">الدهانات الداخلية (Interior Paints)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    تستخدم لطلاء الجدران والأسقف الداخلية. تتميز بقلة الروائح وتنوع الألوان والتشطيبات.
                    تنقسم إلى عدة أنواع حسب اللمسة النهائية:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'مطفي (Matte/Flat)',
                        desc: 'بدون لمعان، يخفي عيوب الجدران. مثالي لغرف النوم والصالات.',
                        pros: 'يخفي العيوب، مظهر أنيق',
                        cons: 'صعب التنظيف',
                      },
                      {
                        name: 'حريري (Silk/Satin)',
                        desc: 'لمعان خفيف، سهل التنظيف. مثالي للصالات والممرات.',
                        pros: 'سهل التنظيف، متين',
                        cons: 'يُظهر عيوب السطح',
                      },
                      {
                        name: 'نصف لامع (Semi-Gloss)',
                        desc: 'لمعان متوسط، مقاوم للرطوبة. مثالي للمطابخ والحمامات.',
                        pros: 'مقاوم للرطوبة والبقع',
                        cons: 'يُظهر عيوب السطح بوضوح',
                      },
                      {
                        name: 'لامع (Gloss)',
                        desc: 'لمعان عالي، شديد المتانة. يستخدم للأبواب والنوافذ والأخشاب.',
                        pros: 'شديد المتانة، سهل التنظيف جداً',
                        cons: 'يُظهر كل العيوب، روائح أقوى',
                      },
                    ].map((type) => (
                      <div key={type.name} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-bold text-gray-900 mb-2">{type.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{type.desc}</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-3 h-3" /> {type.pros}
                          </div>
                          <div className="flex items-center gap-1 text-red-500">
                            <XCircle className="w-3 h-3" /> {type.cons}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Exterior */}
              <Card className="shadow-lg border-r-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl">الدهانات الخارجية (Exterior Paints)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    مصممة خصيصاً لتحمل الظروف الجوية القاسية في الإمارات. <strong>ضرورية جداً</strong> في بيئة
                    تتجاوز فيها الحرارة 50 درجة مئوية صيفاً مع أشعة فوق بنفسجية عالية.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">خصائص الدهان الخارجي المثالي للإمارات:</h4>
                    <ul className="space-y-2">
                      {[
                        'مقاومة عالية للأشعة فوق البنفسجية (UV Protection)',
                        'مقاومة الحرارة العالية (حتى 60°م)',
                        'مقاومة الرطوبة والأملاح (خاصة للمناطق الساحلية)',
                        'مرونة عالية لتحمل التمدد والانكماش',
                        'مقاومة الغبار والرمال',
                        'خاصية التنظيف الذاتي (في الدهانات المتقدمة)',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Special */}
              <Card className="shadow-lg border-r-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl">الدهانات التخصصية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: 'دهان عازل للحرارة', desc: 'يقلل حرارة السطح حتى 10°م. مثالي للأسطح والواجهات في الإمارات.', price: '45-80 درهم/م²' },
                      { name: 'دهان مقاوم للرطوبة', desc: 'للمطابخ والحمامات والطوابق السفلية. يمنع نمو العفن.', price: '30-50 درهم/م²' },
                      { name: 'دهان إيبوكسي', desc: 'للمرائب والمستودعات والأرضيات. شديد المتانة ومقاوم للكيماويات.', price: '40-70 درهم/م²' },
                      { name: 'دهان مقاوم للحريق', desc: 'يبطئ انتشار اللهب. مطلوب في المباني التجارية حسب كود البناء.', price: '50-100 درهم/م²' },
                    ].map((type) => (
                      <div key={type.name} className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-bold text-gray-900 mb-1">{type.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{type.desc}</p>
                        <Badge variant="secondary">{type.price}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Brand Comparison */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">مقارنة أشهر ماركات الدهانات في الإمارات</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-right">المعيار</th>
                    <th className="py-3 px-4 text-center">جوتن</th>
                    <th className="py-3 px-4 text-center">دولكس</th>
                    <th className="py-3 px-4 text-center">نيبون</th>
                    <th className="py-3 px-4 text-center">آسيان</th>
                    <th className="py-3 px-4 text-center">برجر</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { criteria: 'المنشأ', jotun: 'نرويجي', dulux: 'بريطاني', nippon: 'ياباني', asian: 'سنغافوري', berger: 'بريطاني' },
                    { criteria: 'السعر', jotun: '★★★★★', dulux: '★★★★☆', nippon: '★★★☆☆', asian: '★★★☆☆', berger: '★★☆☆☆' },
                    { criteria: 'التغطية', jotun: '★★★★★', dulux: '★★★★★', nippon: '★★★★☆', asian: '★★★★☆', berger: '★★★☆☆' },
                    { criteria: 'المتانة', jotun: '★★★★★', dulux: '★★★★☆', nippon: '★★★★☆', asian: '★★★☆☆', berger: '★★★☆☆' },
                    { criteria: 'مقاومة الحرارة', jotun: '★★★★★', dulux: '★★★★☆', nippon: '★★★★☆', asian: '★★★☆☆', berger: '★★★☆☆' },
                    { criteria: 'تنوع الألوان', jotun: '★★★★★', dulux: '★★★★★', nippon: '★★★★☆', asian: '★★★☆☆', berger: '★★★☆☆' },
                    { criteria: 'التوفر في الإمارات', jotun: '★★★★★', dulux: '★★★★★', nippon: '★★★★☆', asian: '★★★★☆', berger: '★★★☆☆' },
                    { criteria: 'الشعبية', jotun: '#1', dulux: '#2', nippon: '#3', asian: '#4', berger: '#5' },
                  ].map((row, i) => (
                    <tr key={row.criteria} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 font-bold text-gray-900">{row.criteria}</td>
                      <td className="py-3 px-4 text-center">{row.jotun}</td>
                      <td className="py-3 px-4 text-center">{row.dulux}</td>
                      <td className="py-3 px-4 text-center">{row.nippon}</td>
                      <td className="py-3 px-4 text-center">{row.asian}</td>
                      <td className="py-3 px-4 text-center">{row.berger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recommendations */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">توصياتنا حسب نوع المشروع</h2>
            <div className="space-y-4">
              {[
                { project: 'شقة سكنية - ميزانية محدودة', brand: 'نيبون Matex', reason: 'أفضل قيمة مقابل السعر. جودة يابانية بسعر اقتصادي.' },
                { project: 'فيلا فاخرة - داخلي', brand: 'جوتن Fenomastic', reason: 'أفضل متانة وتغطية. قابل للغسل ومقاوم للبقع.' },
                { project: 'واجهات خارجية', brand: 'جوتن Jotashield Extreme', reason: 'أفضل مقاومة للحرارة والأشعة فوق البنفسجية في الإمارات.' },
                { project: 'مكتب أو محل تجاري', brand: 'دولكس Wash & Wear', reason: 'متين وسهل التنظيف وبسعر معقول للمساحات الكبيرة.' },
                { project: 'مطبخ وحمام', brand: 'دولكس أو جوتن - نصف لامع', reason: 'مقاوم للرطوبة والبخار والبقع.' },
              ].map((rec) => (
                <div key={rec.project} className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">{rec.project}</h3>
                    <p className="text-blue-600 font-medium">{rec.brand}</p>
                    <p className="text-sm text-gray-600">{rec.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-bl from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">احسب تكلفة الدهان بناءً على اختيارك</h2>
            <p className="text-blue-100 mb-6">
              اختر نوع الدهان والماركة في حاسبتنا واحصل على تسعير دقيق فوراً
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

export default PaintTypes;
