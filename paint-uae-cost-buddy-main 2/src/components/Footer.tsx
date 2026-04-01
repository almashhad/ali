import { Link } from 'react-router-dom';
import { Calculator, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">حاسبة الدهانات</h2>
                <p className="text-xs text-gray-400">الإمارات العربية المتحدة</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              المنصة الأولى لتسعير الدهانات في الإمارات. نقدم حاسبة تسعير دقيقة مبنية على معايير RSMeans و RICS العالمية مع مراعاة الظروف المحلية.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>دبي، الإمارات العربية المتحدة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-blue-400 transition-colors">الصفحة الرئيسية</Link></li>
              <li><Link to="/calculator" className="text-sm hover:text-blue-400 transition-colors">حاسبة تسعير الدهانات</Link></li>
              <li><Link to="/pricing-guide" className="text-sm hover:text-blue-400 transition-colors">دليل أسعار الدهانات 2026</Link></li>
              <li><Link to="/paint-types" className="text-sm hover:text-blue-400 transition-colors">أنواع الدهانات ومقارنة الماركات</Link></li>
              <li><Link to="/contractor-tips" className="text-sm hover:text-blue-400 transition-colors">نصائح للمقاولين</Link></li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-white font-semibold mb-4">عمليات بحث شائعة</h3>
            <ul className="space-y-3">
              <li><Link to="/pricing-guide" className="text-sm hover:text-blue-400 transition-colors">تكلفة دهان شقة في دبي</Link></li>
              <li><Link to="/pricing-guide" className="text-sm hover:text-blue-400 transition-colors">أسعار دهان الفيلا أبوظبي</Link></li>
              <li><Link to="/paint-types" className="text-sm hover:text-blue-400 transition-colors">أفضل دهان جوتن للإمارات</Link></li>
              <li><Link to="/calculator" className="text-sm hover:text-blue-400 transition-colors">حساب كمية الدهان المطلوبة</Link></li>
              <li><Link to="/contractor-tips" className="text-sm hover:text-blue-400 transition-colors">كيف تختار مقاول دهانات</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@paint-calculator-uae.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span dir="ltr">+971 XX XXX XXXX</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white text-sm font-medium mb-2">المدن المخدومة</h4>
              <div className="flex flex-wrap gap-2">
                {['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة', 'أم القيوين'].map((city) => (
                  <span key={city} className="text-xs bg-gray-800 px-2 py-1 rounded-full">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} حاسبة تسعير الدهانات - الإمارات. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">عن الموقع</Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">سياسة الخصوصية</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
