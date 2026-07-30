import Script from 'next/script'

type ConsentAnalyticsScriptsProps = {
  cookiebotCid?: string
  ga4Id?: string
}

export function ConsentAnalyticsScripts({ cookiebotCid = '', ga4Id = '' }: ConsentAnalyticsScriptsProps) {
  const hasGa4 = ga4Id && ga4Id !== 'G-XXXXXXXXXX'

  return (
    <>
      {cookiebotCid ? (
        // Cookiebot must load before other tracking scripts so consent mode can classify GA4 correctly.
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
          data-cbid={cookiebotCid}
          data-blockingmode="auto"
        />
      ) : null}
      {hasGa4 ? (
        <>
          <Script
            id="ga4-script"
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
            type="text/plain"
            data-cookieconsent="statistics"
          />
          <Script
            id="ga4-config"
            strategy="afterInteractive"
            type="text/plain"
            data-cookieconsent="statistics"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  )
}
