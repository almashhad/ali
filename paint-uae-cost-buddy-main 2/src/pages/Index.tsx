import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, CheckCircle, TrendingUp, Shield, Clock, Star, ArrowLeft, Building, Home, Paintbrush, Users, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <>
      <SEOHead
        title="حاسبة تسعير الدهانات في الإمارات - أدق أداة تسعير مجانية 2026"
        description="احسب تكلفة دهان منزلك أو مشروعك في الإمارات بدقة علمية. حاسبة مبنية على معايير RSMeans و RICS العالمية. أسعار محدثة لجوتن، دولكس، نيبون. مجانية 100%."
        keywords="حاسبة تسعير الدهانات, أسعار الدهانات الإمارات, تكلفة دهان المنزل دبي, حاسبة تكلفة الطلاء, مقاول دهانات"
        canonicalUrl="https://paint-calculator-uae.com/"
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-bl from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>الأداة #1 لتسعير الدهانات في الإمارات</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                حاسبة تسعير الدهانات
                <br />
                <span className="text-yellow-400">الأكثر دقة في الإمارات</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                احسب تكلفة دهان مشروعك بدقة علمية مبنية على معايير <strong>RSMeans</strong> و <strong>RICS</strong> العالمية.
                أسعار محدثة لعام 2026 لجميع ماركات الدهانات في الإمارات.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/calculator">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                    <Calculator className="w-5 h-5 ml-2" />
                    ابدأ الحساب مجاناً
                  </Button>
                </Link>
                <Link to="/pricing-guide">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                    دليل الأسعار 2026
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> مجاني 100%</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> بدون تسجيل</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> نتائج فورية</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> معايير عالمية</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '+1,250', label: 'مستخدم نشط', icon: Users },
                { number: '+5,000', label: 'عملية تسعير', icon: BarChart3 },
                { number: '8', label: 'مراحل دهان', icon: Paintbrush },
                { number: '5+', label: 'ماركات عالمية', icon: Star },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto" />
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                لماذا حاسبتنا هي الأدق في الإمارات؟
              </h2>
              <p className="text-lg text-gray-600">
                نستخدم معايير التسعير العالمية المعتمدة مع تعديلات خاصة بالبيئة الإماراتية
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'معايير RSMeans و RICS العالمية',
                  desc: 'حسابات مبنية على أشهر معايير التسعير في العالم المستخدمة من قبل أكبر شركات المقاولات.',
                },
                {
                  icon: TrendingUp,
                  title: 'أسعار محدثة لعام 2026',
                  desc: 'أسعار دهانات جوتن، دولكس، نيبون، آسيان، وبرجر محدثة حسب أسعار السوق الإماراتي.',
                },
                {
                  icon: Zap,
                  title: '8 مراحل دهان تفصيلية',
                  desc: 'من الصنفرة والسيلر والبرايمر حتى الطبقة النهائية. كل مرحلة محسوبة بدقة علمية.',
                },
                {
                  icon: Building,
                  title: 'عوامل البيئة الإماراتية',
                  desc: 'نراعي الحرارة والرطوبة والأشعة فوق البنفسجية التي تؤثر على إنتاجية العمل في الإمارات.',
                },
                {
                  icon: Calculator,
                  title: '3 أنماط لحساب الإنتاجية',
                  desc: 'اختر بين الحساب العلمي أو بالساعة أو باليوم حسب طريقة عملك المفضلة.',
                },
                {
                  icon: Clock,
                  title: 'نتائج فورية شاملة',
                  desc: 'تكلفة العمالة، المواد، النفقات العامة، هامش الربح، المدة الزمنية - كل شيء في لحظة.',
                },
              ].map((feature) => (
                <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                كيف تعمل حاسبة تسعير الدهانات؟
              </h2>
              <p className="text-lg text-gray-600">
                في 3 خطوات بسيطة، احصل على تسعير دقيق لمشروع الدهان الخاص بك
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'أدخل تفاصيل المشروع',
                  desc: 'حدد مساحة الدهان، نوع السطح (جدران، أسقف، خشب، حديد)، وبيئة العمل (داخلي أو خارجي).',
                },
                {
                  step: '2',
                  title: 'اختر المراحل والمواد',
                  desc: 'حدد مراحل الدهان المطلوبة وعدد الطبقات. اختر نوع الدهان والماركة لحساب تكلفة المواد.',
                },
                {
                  step: '3',
                  title: 'احصل على التسعير الكامل',
                  desc: 'تقرير تفصيلي يشمل تكلفة العمالة والمواد والنفقات والأرباح ومدة التنفيذ المتوقعة.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/calculator">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-6 shadow-lg">
                  <Calculator className="w-5 h-5 ml-2" />
                  جرّب الحاسبة الآن مجاناً
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                متوسط أسعار الدهانات في الإمارات 2026
              </h2>
              <p className="text-lg text-gray-600">
                أسعار تقريبية للمتر المربع شاملة العمالة والمواد
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { type: 'دهان داخلي - اقتصادي', price: '15 - 25', unit: 'درهم/م²', desc: 'دهان بلاستيكي عادي، طبقتين، بدون تسوية', color: 'from-green-500 to-green-600' },
                { type: 'دهان داخلي - متوسط', price: '25 - 35', unit: 'درهم/م²', desc: 'دهان جوتن أو دولكس، 3 طبقات مع تسوية', color: 'from-blue-500 to-blue-600' },
                { type: 'دهان داخلي - فاخر', price: '35 - 55', unit: 'درهم/م²', desc: 'دهان فاخر مع سكينتين وتفنيش كامل', color: 'from-purple-500 to-purple-600' },
                { type: 'دهان خارجي', price: '25 - 45', unit: 'درهم/م²', desc: 'دهان مقاوم للحرارة والأشعة فوق البنفسجية', color: 'from-orange-500 to-orange-600' },
                { type: 'دهان أسقف', price: '20 - 35', unit: 'درهم/م²', desc: 'دهان أسقف مع تسوية، يشمل عامل الصعوبة', color: 'from-teal-500 to-teal-600' },
                { type: 'دهان خشب وحديد', price: '30 - 50', unit: 'درهم/م²', desc: 'صنفرة وسيلر وطبقات متعددة مع لمسة نهائية', color: 'from-red-500 to-red-600' },
              ].map((item) => (
                <Card key={item.type} className="border-0 shadow-lg overflow-hidden">
                  <div className={`bg-gradient-to-l ${item.color} p-4 text-white`}>
                    <h3 className="font-bold text-lg">{item.type}</h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-gray-900 mb-1">{item.price}</div>
                    <div className="text-sm text-gray-500 mb-2">{item.unit}</div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/pricing-guide" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                اطلع على دليل الأسعار التفصيلي ←
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                الأسئلة الشائعة حول تسعير الدهانات
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: 'كم تكلفة دهان شقة غرفة وصالة في دبي؟',
                  a: 'تتراوح تكلفة دهان شقة غرفة وصالة (حوالي 60-80 م²) في دبي بين 3,000 إلى 8,000 درهم. السعر يعتمد على حالة الجدران الحالية ونوع الدهان المطلوب وعدد الطبقات. استخدم حاسبتنا للحصول على تقدير دقيق لمشروعك.',
                },
                {
                  q: 'ما الفرق بين أسعار دهان جوتن ودولكس في الإمارات؟',
                  a: 'جوتن عموماً أغلى بنسبة 10-20% من دولكس. جالون جوتن ماجستيك (3.6 لتر) يبدأ من 85 درهم، بينما دولكس ويذرشيلد يبدأ من 70 درهم. كلاهما يقدم جودة عالية، لكن جوتن يتميز بمقاومة أفضل للحرارة.',
                },
                {
                  q: 'كم يستغرق دهان فيلا كاملة في الإمارات؟',
                  a: 'دهان فيلا 3 غرف نوم (200-300 م²) يستغرق عادة 7-14 يوم عمل مع فريق من 2-3 عمال. المدة تزيد إذا كان هناك حاجة لتسوية الجدران أو إزالة الدهان القديم. حاسبتنا تحسب المدة بدقة بناءً على معدلات الإنتاجية العلمية.',
                },
                {
                  q: 'هل أسعار الدهان الخارجي أغلى من الداخلي؟',
                  a: 'نعم، تكلفة الدهان الخارجي أعلى بنسبة 35-60% من الداخلي. السبب هو استخدام دهانات مقاومة للحرارة والأشعة فوق البنفسجية، بالإضافة لانخفاض إنتاجية العمال بسبب الظروف المناخية في الإمارات.',
                },
                {
                  q: 'كيف أحسب كمية الدهان المطلوبة لمشروعي؟',
                  a: 'احسب المساحة الإجمالية (الطول × الارتفاع لكل جدار)، اطرح مساحة الأبواب والنوافذ. قسّم الناتج على معدل تغطية الدهان (35-40 م² لكل جالون). اضرب في عدد الطبقات. أضف 10-15% للهدر. أو استخدم حاسبتنا التي تقوم بكل هذا تلقائياً.',
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
                  <summary className="font-bold text-gray-900 text-lg list-none flex items-center justify-between">
                    <span>{faq.q}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform text-2xl mr-4">▾</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-bl from-blue-800 to-blue-950 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">جاهز لتسعير مشروعك؟</h2>
            <p className="text-lg text-blue-200 mb-8">
              استخدم حاسبة تسعير الدهانات الأكثر دقة في الإمارات - مجاناً وبدون تسجيل
            </p>
            <Link to="/calculator">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-10 py-6 shadow-xl">
                <Calculator className="w-5 h-5 ml-2" />
                احسب تكلفة مشروعك الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
