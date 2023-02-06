import Script from 'next/script'


export default function DefaultTags() {
  const GA_MEASUREMENT_ID =  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Дизайн студия Юлии Пережогиной. Логотипы, Бренд Бук, Графика, Картины."/>
        <meta name="author" content="Yulia Perezhogina"/>
        <link rel="shortcut icon" href='/images/favicon.ico' type="ico"/>


                {/* <!-- Google tag (gtag.js) --> */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive"></Script>


        <Script id="google-analytics-script" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>


    </>
  )
}
