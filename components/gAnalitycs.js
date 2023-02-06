import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function gAnalitycs() {
  return (
    <>
      {/* <!-- Google tag (gtag.js) -->        */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      ></Script>

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', '${GA_MEASUREMENT_ID}');
                  `}
      </Script>
    </>
  );
}
