import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import SiteShell from '@/components/layout/SiteShell'

export const metadata: Metadata = {
  title: 'GC-Licensed Window & Door Installer | Hiatt Development Co. — Orlando, FL',
  description:
    'A GC-licensed window and door installer serving Central Florida since 2008. Hiatt Development Co. works with architects, custom builders, and general contractors on projects across Isleworth, Golden Oak, Winter Park, and Lake Nona.',
  metadataBase: new URL('https://www.hiattdevelopment.com'),
  openGraph: {
    title: 'Hiatt Development Company',
    description: 'Custom windows and doors, installed with conviction. Orlando, FL.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        {/* LeadConnector (GHL) chat widget — loaded sitewide */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a28667b7b092d06b90485ea"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
