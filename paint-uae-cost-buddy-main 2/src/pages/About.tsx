import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Target, Shield, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <>
      <SEOHead
        title="من نحن - حاسبة تسعير الدهانات الإمارات"
        description="تعرف على حاسبة تسعير الدهانات، المنصة الأولى لتسعير مشاريع الدهانات في الإمارات. مبنية على معايير RSMeans و RICS العالمية مع تعديلات خاصة بالبيئة الإماراتية."
        keywords="حاسبة تسعير الدهانات, عن الموقع, تسعير المقاولات الإمارات"
        canonicalUrl="https://paint-calculator-uae.com/about"
      />
      <Header />

      <main className="min-h-screen">
        <section className="bg-gradient-to-bl from-blue-900 to-blue-950 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-lg text-blue-200">المنصة الأولى لتسعير الدهانات في الإمارات</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Mission */}
          <section className="mb-14">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                نؤمن بأن التسعير الدقيق هو أساس نجاح أي مشروع دهانات. أنشأنا هذه المنصة لتكون الأداة الأولى
                والأكثر دقة لتسعير مشاريع الدهانات في <strong>دولة الإمارات العربية المتحدة</strong>. نهدف إلى
                مساعدة المقاولين وأصحاب المنازل في الحصول على تسعير عادل ودقيق يحقق مصلحة الجميع.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">قيمنا</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: 'الدقة العلمية', desc: 'حساباتنا مبنية على معايير RSMeans و RICS العالمية المعتمدة من أكبر شركات المقاولات حول العالم.' },
                { icon: Shield, title: 'الشفافية', desc: 'نعرض كل تفاصيل الحساب بوضوح: تكلفة العمالة، المواد، النفقات العامة، وهامش الربح.' },
                { icon: Users, title: 'خدمة الجميع', desc: 'أداتنا مجانية 100% ومتاحة للجميع: مقاولين، أصحاب منازل، شركات إدارة عقارات.' },
                { icon: Award, title: 'التحديث المستمر', desc: 'نحدث أسعار المواد والمعدلات بشكل دوري لتعكس واقع السوق الإماراتي.' },
              ].map((value) => (
                <Card key={value.title} className="shadow-md">
                  <CardContent className="p-6">
                    <value.icon className="w-10 h-10 text-blue-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What makes us different */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ما يميزنا</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              {[
                'حاسبة مبنية على معايير عالمية (RSMeans & RICS) وليس تقديرات عشوائية',
                '8 مراحل دهان تفصيلية من الصنفرة حتى التفنيش',
                '3 أنماط لحساب الإنتاجية: علمي، بالساعة، باليوم',
                'عوامل ضرب خاصة بالبيئة الإماراتية (حرارة، رطوبة، ارتفاعات)',
                'أسعار 5 ماركات عالمية محدثة حسب السوق المحلي',
                'حساب تكلفة العمالة والمواد والنفقات والأرباح في مكان واحد',
                'تقدير مدة المشروع بناءً على معدلات إنتاجية واقعية',
                'واجهة عربية سهلة الاستخدام ومجانية بالكامل',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Who is this for */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">لمن هذه الأداة؟</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'مقاولو الدهانات', desc: 'لتقديم عروض أسعار دقيقة واحترافية تضمن هامش ربح عادل.', icon: '🏗️' },
                { title: 'أصحاب المنازل', desc: 'لمعرفة التكلفة الحقيقية قبل التعاقد مع مقاول وتجنب المبالغة.', icon: '🏠' },
                { title: 'شركات العقارات', desc: 'لتخطيط ميزانيات الصيانة والتجديد بدقة لمحافظهم العقارية.', icon: '🏢' },
              ].map((item) => (
                <Card key={item.title} className="shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-bl from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">جرّب الحاسبة الآن</h2>
            <p className="text-blue-100 mb-6">
              ابدأ بحساب تكلفة مشروعك مجاناً - بدون تسجيل وبنتائج فورية
            </p>
            <Link to="/calculator">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg px-8 py-6">
                <Calculator className="w-5 h-5 ml-2" />
                ابدأ الحساب مجاناً
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
