import Script from "next/script";

export default function Analytics() {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  if (!analyticsId) {
    return null;
  }

  // Replace with your preferred analytics provider and ID.
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${analyticsId}');
        `}
      </Script>
    </>
  );
}
