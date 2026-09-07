<div dir="rtl">

# رایکن — اولین فونت آیکن ایرانی اسلامی

**Righcon** یک فونت آیکن تخصصی است که بر اساس استانداردهای جهانی طراحی شده و بیش از ۱۰۰ آیکن با مضامین ایرانی، اسلامی، مالی و برندهای داخلی را ارائه می‌دهد. این پروژه یک وب‌اپلیکیشن مبتنی بر **Next.js 14** است که امکان مرور، جستجو، سفارشی‌سازی و دانلود آیکن‌ها را فراهم می‌کند.

---

## ویدیوی رابط کاربری

https://github.com/user-attachments/assets/f74e0c5b-02b1-41fa-b161-efef71fd35e7

---

## ویژگی‌های پروژه

- 🔍 **جستجوی آیکن** — جستجو بر اساس نام انگلیسی، نام فارسی یا کد یونیکد
- 🎨 **سفارشی‌سازی** — تغییر رنگ و اندازه آیکن به صورت لحظه‌ای
- ⬇️ **دانلود SVG** — دانلود مستقیم فایل SVG با تنظیمات رنگ و سایز دلخواه
- 📋 **کپی کد** — کپی کد HTML آماده برای استفاده در پروژه
- 🌙 **حالت تاریک / روشن** — پشتیبانی از Dark Mode
- 📱 **PWA** — نصب به عنوان اپلیکیشن روی موبایل و دسکتاپ
- 🏷️ **فیلتر و مرتب‌سازی** — فیلتر بر اساس سبک (توپر/خطی) و دسته‌بندی
- 📧 **خبرنامه** — ثبت ایمیل برای دریافت اطلاعیه‌های جدید

---

## خانواده‌های فونت

### Righcon Brands
آیکن‌های لوگوی برندها و پیام‌رسان‌های ایرانی:

| آیکن | نام فارسی | نام |
|------|-----------|-----|
| | بله | bale |
| | ایتا | eita |
| | گپ | gap |
| | و سایر برندهای ایرانی... | |

### Righcon Regular
آیکن‌های عمومی با دو سبک **توپر (Solid)** و **خطی (Outline)**:

| دسته‌بندی | توضیح |
|------------|-------|
| مالی و بانک‌ها | نماد ریال، تومان و نمادهای بانکی |
| سازمان‌ها | آیکن‌های سازمانی و تجاری ایرانی |
| نمادهای اسلامی | آیکن‌های مرتبط با مفاهیم عبادی و اسلامی |
| نمادهای ایرانی | آیکن‌های استان‌ها، نقشه ایران و نمادهای ملی |

---

## صفحات اپلیکیشن

| مسیر | توضیح |
|------|-------|
| `/` | صفحه اصلی — نمایش آیکن‌های محبوب و دسته‌بندی‌ها |
| `/search` | جستجو، فیلتر و مرتب‌سازی آیکن‌ها |
| `/icon/[id]` | صفحه جزئیات آیکن با امکان سفارشی‌سازی و دانلود |
| `/download` | صفحه دانلود فونت و مشاهده نسخه‌ها |
| `/help` | راهنمای استفاده |
| `/about` | درباره پروژه |
| `/offline` | صفحه آفلاین (PWA) |

---

## نحوه استفاده از فونت

### ۱. اضافه کردن CSS

```html
<link rel="stylesheet" href="/fonts/righcon/css/righcon-all.css" />
```

یا جداگانه:

```html
<!-- برندها -->
<link rel="stylesheet" href="/fonts/righcon/css/righcon-brands.css" />

<!-- آیکن‌های توپر -->
<link rel="stylesheet" href="/fonts/righcon/css/righcon-regular-solid.css" />

<!-- آیکن‌های خطی -->
<link rel="stylesheet" href="/fonts/righcon/css/righcon-regular-outline.css" />
```

### ۲. استفاده در HTML

```html
<!-- آیکن توپر -->
<i class="righcon-regular-solid ri-rial1 ri-2x"></i>

<!-- آیکن خطی -->
<i class="righcon-regular-outline ri-toman1 ri-3x"></i>

<!-- برندها -->
<i class="righcon-brands ri-bale ri-2x"></i>
```

### سایزهای پیش‌فرض

| کلاس | اندازه |
|------|--------|
| `ri-1x` | 16px |
| `ri-2x` | 32px |
| `ri-3x` | 64px |
| `ri-4x` | 128px |
| `ri-5x` | 256px |

---

## راه‌اندازی پروژه

### پیش‌نیازها

- Node.js نسخه ۲۰ یا بالاتر
- npm یا yarn

### نصب وابستگی‌ها

```bash
npm install
```

### اجرای محیط توسعه

```bash
# اجرای محلی روی پورت 3200
npm run dev-local

# اجرای روی شبکه (تغییر IP در صورت نیاز)
npm run dev-server
```

سپس مرورگر را روی [http://localhost:3200](http://localhost:3200) باز کنید.

### ساخت نسخه تولید

```bash
npm run build
npm run start
```

### بررسی کیفیت کد

```bash
# اجرای ESLint
npm run lint

# بررسی فرمت‌بندی با Prettier
npm run prettier-check

# اصلاح خودکار فرمت‌بندی
npm run prettier-write
```

---

## ساختار پروژه

```
righcon/
├── public/
│   ├── fonts/
│   │   └── righcon/
│   │       ├── css/           # فایل‌های CSS فونت
│   │       ├── webfonts/      # فایل‌های TTF
│   │       ├── images/        # فایل‌های SVG آیکن‌ها
│   │       └── metadata/      # متادیتای JSON آیکن‌ها
│   ├── medias/images/         # تصاویر رابط کاربری
│   └── righcon.mp4            # ویدیوی معرفی
│
├── src/app/
│   ├── (pages)/
│   │   ├── about/             # درباره ما
│   │   ├── download/          # صفحه دانلود
│   │   ├── help/              # راهنما
│   │   ├── icon/[id]/         # جزئیات آیکن
│   │   ├── offline/           # صفحه آفلاین
│   │   └── search/            # صفحه جستجو
│   ├── @modal/                # Parallel Route برای مودال‌ها
│   ├── api/
│   │   ├── download/          # API دانلود SVG
│   │   └── send/              # API ارسال ایمیل
│   ├── components/            # کامپوننت‌های مشترک
│   └── lib/
│       ├── layout/            # Header و Footer
│       ├── models/            # مدل‌های TypeScript
│       ├── services/          # سرویس لود داده‌ها
│       ├── stores/            # استیت گلوبال (Zustand)
│       └── utilities/         # توابع کمکی
```

---

## تکنولوژی‌ها

| ابزار | نسخه | کاربرد |
|-------|-------|--------|
| [Next.js](https://nextjs.org/) | 14 | فریم‌ورک اصلی (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | 5 | تایپ‌سیستم |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | استایل‌دهی |
| [Zustand](https://zustand-demo.pmnd.rs/) | 4 | مدیریت استیت |
| [Formik](https://formik.org/) | 2 | مدیریت فرم‌ها |
| [Axios](https://axios-http.com/) | 1 | درخواست‌های HTTP |
| [Resend](https://resend.com/) | 4 | سرویس ارسال ایمیل |
| [Cheerio](https://cheerio.js.org/) | 1 | پردازش SVG سمت سرور |
| [Lodash](https://lodash.com/) | 4 | توابع کمکی |
| [FontAwesome](https://fontawesome.com/) | 6 | آیکن‌های UI |

---

## API

### دانلود SVG

```
GET /api/download?fontFamily={family}&fontName={name}&fontColor={hex}&fontSize={size}
```

| پارامتر | توضیح | مثال |
|---------|-------|------|
| `fontFamily` | نام خانواده فونت | `righcon-regular-solid` |
| `fontName` | نام آیکن | `rial1` |
| `fontColor` | رنگ (hex بدون #) | `6750a4` |
| `fontSize` | سطح سایز (1-5) | `3` |

### ارسال ایمیل

```
POST /api/send
Content-Type: application/json

{
  "name": "نام کاربر",
  "mobile": "09xxxxxxxxx",
  "email": "user@example.com"
}
```

---

</div>
