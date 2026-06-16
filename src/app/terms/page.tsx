import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import LegalDocument from '@/components/sections/legal/LegalDocument'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hiatt Development Co. — Orlando, FL',
  description:
    'The terms governing your use of the Hiatt Development Company website and communications, including SMS/text messaging terms.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        pageNumber="—"
        pageLabel="Legal"
        title="Terms &"
        italicTitle="Conditions."
        intro="The terms that govern your use of our website and communications with us."
        meta={['Effective 2026', 'Orlando, FL']}
      />

      <LegalDocument
        updated="June 17, 2026"
        intro="These Terms & Conditions (“Terms”) govern your access to and use of the website hiattdevelopment.com and any communications with Hiatt Development Company (“Hiatt Development,” “we,” “us,” or “our”). By using our website or contacting us, you agree to these Terms. If you do not agree, please do not use the site."
        blocks={[
          {
            heading: 'Use of the website',
            content: [
              'You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair it, or interfere with another party’s use. All content on this site — including text, images, logos, and design — is owned by or licensed to Hiatt Development Company and may not be copied or reused without permission.',
            ],
          },
          {
            heading: 'Inquiries & estimates',
            content: [
              'Information provided on this website is for general informational purposes and does not constitute a binding offer, quote, or contract. Any pricing, scope, timeline, or specification becomes binding only through a separate written agreement signed by Hiatt Development Company.',
            ],
          },
          {
            heading: 'Text messaging terms',
            content: [
              'By providing your mobile number and opting in, you agree to receive SMS/text messages from Hiatt Development Company related to your inquiry, project, scheduling, appointment reminders, and service updates.',
              'Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, or HELP for assistance. Consent to receive messages is not a condition of any purchase. Carriers are not liable for delayed or undelivered messages. For details on how we handle your information, see our Privacy Policy.',
            ],
          },
          {
            heading: 'Intellectual property',
            content: [
              'The Hiatt Development name, logo, and all related marks are the property of Hiatt Development Company. Nothing on this website grants any license or right to use them without our prior written consent.',
            ],
          },
          {
            heading: 'Third-party links',
            content: [
              'Our website may contain links to third-party sites or services that we do not control. We are not responsible for the content, policies, or practices of those third parties, and inclusion of a link does not imply endorsement.',
            ],
          },
          {
            heading: 'Disclaimers',
            content: [
              'This website and its content are provided “as is” without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
            ],
          },
          {
            heading: 'Limitation of liability',
            content: [
              'To the fullest extent permitted by law, Hiatt Development Company will not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of this website or our communications.',
            ],
          },
          {
            heading: 'Governing law',
            content: [
              'These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws principles. Any dispute arising under these Terms will be subject to the exclusive jurisdiction of the state and federal courts located in Orange County, Florida.',
            ],
          },
          {
            heading: 'Changes to these terms',
            content: [
              'We may update these Terms from time to time. Changes take effect when posted to this page, and continued use of the website constitutes acceptance of the revised Terms.',
            ],
          },
          {
            heading: 'Contact us',
            content: [
              'Questions about these Terms? Contact us:',
              'Hiatt Development Company · 1453 W. Landstreet Rd, Ste 302, Orlando, FL 32824 · sales@hiattdevelopment.com · 689-228-5003',
            ],
          },
        ]}
      />
    </>
  )
}
