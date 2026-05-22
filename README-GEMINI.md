# Vibe Perfumes — Gemini Image Generation

تحويل الـ 50 تصميماً من [`VIBE-PERFUMES-50-DISPLAYS.md`](./VIBE-PERFUMES-50-DISPLAYS.md) إلى صور عبر Google Gemini — بطريقتين.

---

## الطريقة 1 — يدوياً (نسخ ولصق)

افتح [`GEMINI-PROMPTS.md`](./GEMINI-PROMPTS.md) — يحتوي على 50 prompt مرتّبة من الأفضل تقييماً إلى الأقل. الستة الأولى:

1. **Design 27** — Shadow Play Artist (44/50)
2. **Design 50** — Budget Optimizer (44/50)
3. **Design 23** — Sacred Space Designer (43/50)
4. **Design 30** — Brass and Leather Craftsman (43/50)
5. **Design 48** — Master of Proportion (43/50)
6. **Design 49** — Levantine + Gulf Fusion (43/50)

افتح [gemini.google.com](https://gemini.google.com)، الصق الـ prompt، اطلب صورة 16:9. تكرّر للـ 50.

---

## الطريقة 2 — تلقائياً (سكربت)

يولّد السكربت كل الصور دفعة واحدة عبر Gemini API.

### الخطوات

```bash
# 1) احصل على مفتاح Gemini API من:
#    https://aistudio.google.com/app/apikey

# 2) أنشئ ملف .env (لن يُرفع للريبو — مذكور في .gitignore)
cp .env.example .env
# عدّل .env وضع المفتاح:
# GEMINI_API_KEY=AIza...

# 3) شغّل
node generate.mjs                  # كل الـ 50 (يستغرق ~10 دقائق بالتقييد المجاني)
node generate.mjs --from 1 --to 6  # أفضل 6 فقط
node generate.mjs --only 27,50,23  # تصاميم محدّدة بأرقامها
```

الصور تُحفظ في `./images/` (مُستبعد من git). الأسماء مثل `27-shadow-play-artist.png` و `50-budget-optimizer.png`.

### الخيارات

| متغيّر بيئة | الافتراضي | الغرض |
|---|---|---|
| `GEMINI_API_KEY` | (مطلوب) | مفتاحك من Google AI Studio |
| `GEMINI_MODEL` | `gemini-2.5-flash-image` | اسم نموذج التوليد (Nano Banana) |
| `OUT_DIR` | `images` | مجلد الحفظ |
| `REQUESTS_PER_MIN` | `6` | الحدّ الأقصى للطلبات/دقيقة (تجنّب 429) |

### عند الفشل

إذا فشل أيّ توليد، يُكتب `failed.json` تلقائياً. لإعادة المحاولة فقط للفاشلة:

```bash
node generate.mjs --only $(jq -r '[.[].id] | join(",")' failed.json)
```

---

## مصدر البيانات

- [`prompts.json`](./prompts.json) — الـ 50 prompt كـ JSON، مرتّبة بالـ rank
- [`GEMINI-PROMPTS.md`](./GEMINI-PROMPTS.md) — نفس البيانات بصيغة قابلة للقراءة
- [`build-md.mjs`](./build-md.mjs) — يبني `GEMINI-PROMPTS.md` من `prompts.json`
- [`generate.mjs`](./generate.mjs) — السكربت الرئيسي للتوليد

أيّ تعديل على prompt يُكتب في `prompts.json` ثم يُعاد بناء الـ markdown بـ `node build-md.mjs`.
