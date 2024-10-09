import { Metadata } from 'next'
import styles from './styles.module.css'
import cls from 'classnames'

export const metadata: Metadata = {
  title: 'راهنما',
}

export function Search() {
  return <div className={styles.help}>
    <div className={styles.helpContainer}>
      <div className={styles.helpBoxWrapper}>
        <div className={styles.helpBox}>
          <p className={styles.helpIntroduction}>برای استفاده از رایکن روش‌های مختلفی ممکن است وجود داشته باشد اما
            بهترین و سریع‌ترین روش استفاده از رایکن استفاده از مراحل زیر به ترتیب است:</p>
          <div className={styles.helpItems}>
            <div className={styles.helpItem}>
              <ul className={styles.helpItemSubject}>
                <li>دانلود فایل ایکون ها</li>
              </ul>
              <div className={styles.helpItemContent}>
                <p>
                  برای استفاده از نسخه رایگان فونت می‌توانید به وبسایت رایکن رفته و
                  روی دکمه دانلود کلیک کنید تا فایل این فونت آیکون دانلود شود.
                  فایل zip دانلود شده را باز کرده و وارد پوشه css شوید.، فایلrighcon-all.css را کپی کرده و درون پوشه css
                  پروژه خود paste کنید.سپس پوشه webfonts را کپی کرده و در کنار پوشه css پروژه خود paste کنید.
                </p>
                <p>اگر مراحل بالا را درست انجام داده باشید در حال حاضر در فایل پروژه
                  خود
                  همچین ساختاریرا مشاهده می‌کنید.
                  <ul className={styles.descriptionList}>
                    <li>
                      <span>پوشه css</span>
                      <ul className={styles.descriptionList}>
                        <li>فایل righcon-all.css</li>
                        <li>دیگر فایل‌های css پروژه</li>
                      </ul>
                    </li>
                    <li>
                      <span>پوشه webfonts</span>
                      <ul className={styles.descriptionList}>
                        <li>فایل‌های فونت</li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <p>حال باید در هر یک از صفحاتی که قصد استفاده از آیکون‌ها را در آن
                  داریم فایل righcon-all.css را فراخوانی کنیم که اینکار با استفاده از تگ link انجام می‌شود. کافیست کد
                  زیر را در عنصر head صفحه وب خود قرار دهید و آدرس فایل all.css را در خصیصه href تنظیم کنید.</p>
              </div>
              <div className={styles.helpItemCodeWrapper}>
                <span className={styles.helpItemCode}>
                  <code><span className={styles.signCode}>&lt;</span><span
                    className={styles.linkRef}>link href</span><span
                    className={styles.signCode}>=&quot;</span><span
                    className={styles.path}>/your-path-to-righcon/css/righcon-all.css</span><span
                    className={styles.signCode}>&quot;</span> <span className={styles.rel}>rel</span><span
                    className={styles.signCode}>=&quot;</span><span
                    className={styles.styleSheet}>stylesheet</span><span className={styles.signCode}>&gt;</span></code>
                </span>
              </div>
            </div>
            <div className={styles.helpItem}>
              <ul className={styles.helpItemSubject}>
                <li>نمایش آیکون‌ها</li>
              </ul>
              <div className={styles.helpItemContent}>
                <p>
                  برای نمایش آیکون‌ها در هرجایی از صفحه وب خود، می‌توانید از تگ i کمک بگیرید و از طریق خصیصه class برای
                  انتخاب نوع آیکون استفاده کنید. به مثال‌ زیر توجه کنید </p>
              </div>
              <div className={styles.helpItemCodeWrapper}>
                <span className={styles.helpItemCode}>
                  <code>
                    <span className={styles.signCode}>&lt;</span><span className={styles.rel}>i</span> <span
                    className={styles.linkRef}>class</span><span
                    className={styles.signCode}>=&quot;</span><span
                    className={styles.classValue}>righcon-brands ri-ap</span><span
                    className={styles.signCode}>&quot;&gt;&lt;</span><span className={styles.rel}>/i</span><span
                    className={styles.signCode}>&gt;</span>
                  </code>
                </span>
              </div>
              <div className={styles.helpItemContent}>
                <p>
                  برای انتخاب آیکون در خصیصه class می‌توان سه پیشوند به کاربرد، rib یا righcon-brands، rirs یا
                  righcon-regular-solid و riro یا righcon-regular-outline که پیشوند rib یا righcon-brands برای ایکن
                  هایبرند و پیشوند rirs و riro برای ایکن های regular خطی و توپر است. این نشان دهنده ایناست که رایکن
                  دارای انواع آیکون‌های brand و regular است که تفاوت آنها را با کمی دقت در آیکون‌های مختلف این مجموعه،
                  متوجه خواهید شد.
                </p>
                <p>
                  بعد از پیشوند می‌توانید نام آیکون مدنظر خود را بنویسید. نگران حفظ کردن نام آیکون‌ها نباشید، چون اصلا
                  نیازی نیست آنها را حفظ باشید! تنهاکافیست ایکن وارد صفحه جستجوی ایکون ها تا لیست تمام آیکون‌ها را
                  مشاهده و ازآنجا نام آیکون مدنظر خود را کپی کنید.
                </p>
              </div>
            </div>
            <div className={styles.helpItem}>
              <ul className={styles.helpItemSubject}>
                <li>تغییر رنگ و سایز آیکون‌ها</li>
              </ul>
              <div className={styles.helpItemContent}>
                <p>برای تغییر رنگ و سایز آیکون، می‌توانید از ویژگی font-size و color استفاده کنید:</p>
              </div>
              <div className={styles.helpItemCodeWrapper}>
                <span className={styles.helpItemCode}>
                  <code><span className={styles.signCode}>&lt;</span><span
                    className={styles.rel}>i</span> <span className={styles.linkRef}>class</span><span
                    className={styles.signCode}>=&quot;</span><span className={styles.classValue}>righcon-regular-solid ri-eazarBaijan</span><span
                    className={styles.signCode}>&quot;</span> <span className={styles.linkRef}>style</span><span
                    className={styles.signCode}>=&quot;</span> <span className={styles.classValue}>font-size:40px</span><span
                    className={styles.signCode}>;</span><span className={styles.classValue}>color:#2196F3</span><span
                    className={styles.signCode}>&quot;&gt;&lt;</span>
                    <span className={styles.rel}>/i</span><span className={styles.signCode}>&gt;</span></code>
              </span>
              </div>
            </div>
            <div className={styles.helpItem}>
              <ul className={styles.helpItemSubject}>
                <li>سایز های از پیش تعریف شده</li>
              </ul>
              <div className={styles.helpItemContent}>
                <p>فونت آیکون رایکن بصورت پیشفرض سایز‌های از پیش تعریف شده‌ای برای آیکون‌ها در نظر گرفته که برای استفاده
                  از این سایزها کافی است از کلاس‌های ri-1x تا ri-6x استفاده کنید:</p>
              </div>
              <div className={styles.helpItemCodeWrapper}>
                <span className={styles.helpItemCode}>
                  <code><span className={styles.signCode}>&lt;</span><span className={styles.rel}>i</span> <span
                    className={styles.linkRef}>class</span><span
                    className={styles.signCode}>=&quot;</span><span className={styles.classValue}>righcon-regular-solid ri-persPolice ri-1x</span><span
                    className={styles.signCode}>&quot;&gt;&lt;</span><span className={styles.rel}>/i</span><span
                    className={styles.signCode}>&gt;</span></code>
                </span>
                <span className={styles.helpItemCode}>
                  <code><span className={styles.signCode}>&lt;</span><span className={styles.rel}>i</span> <span
                    className={styles.linkRef}>class</span><span
                    className={styles.signCode}>=&quot;</span><span className={styles.classValue}>righcon-regular-solid ri-persPolice ri-6x</span><span
                    className={styles.signCode}>&quot;&gt;&lt;</span><span className={styles.rel}>/i</span><span
                    className={styles.signCode}>&gt;</span></code>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Search
