import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import LegalDocument from '@/components/sections/legal/LegalDocument'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hiatt Development Co. — Orlando, FL',
  description:
    'How Hiatt Development Company collects, uses, and protects your information — including SMS/text messaging consent and opt-out terms.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        pageNumber="—"
        pageLabel="Legal"
        title="Privacy"
        italicTitle="Policy."
        intro="How we collect, use, and protect the information you share with us — including text messaging."
        meta={['Effective 2026', 'Orlando, FL']}
      />

      <LegalDocument
        updated="June 17, 2026"
        intro="Hiatt Development Company (“Hiatt Development,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect through hiattdevelopment.com and our communications, how we use it, and the choices you have. By using our website or contacting us, you agree to the practices described below."
        blocks={[
          {
            heading: 'Information we collect',
            content: [
              'We collect information you provide directly to us when you complete a contact or project-request form, call us, send an email, or otherwise communicate with us. This may include:',
              [
                'Your name, company, and role',
                'Email address and phone number',
                'Project details, address, and any information you choose to share',
              ],
              'We also automatically collect limited technical information when you visit our website — such as your browser type, device, and pages viewed — through standard analytics and cookies.',
            ],
          },
          {
            heading: 'How we use your information',
            content: [
              'We use the information we collect to:',
              [
                'Respond to your inquiries and prepare project estimates',
                'Coordinate site surveys, permitting, scheduling, and installation',
                'Send you updates, confirmations, and service-related messages',
                'Improve our website and services',
                'Comply with legal and contractual obligations',
              ],
            ],
          },
          {
            heading: 'SMS / text messaging',
            content: [
              'When you provide your mobile phone number and opt in — for example, by submitting a form, checking a consent box, or texting us — you consent to receive text messages from Hiatt Development Company related to your inquiry, project, scheduling, appointment reminders, and service updates.',
              'Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP to any message; you may reply HELP for assistance. Consent to receive text messages is not a condition of purchasing any product or service.',
              'Mobile phone numbers and SMS opt-in consent are never sold, rented, or shared with third parties or affiliates for their own marketing or promotional purposes. We share this information only with service providers that help us deliver messaging on our behalf, and only as needed to operate our services.',
            ],
          },
          {
            heading: 'How we share information',
            content: [
              'We do not sell your personal information. We may share information with trusted service providers — such as our messaging, scheduling, hosting, and analytics partners — strictly to operate our business, and with engineers, suppliers, or subcontractors as needed to deliver your project. We may also disclose information when required by law or to protect our rights.',
            ],
          },
          {
            heading: 'Cookies & analytics',
            content: [
              'Our website uses cookies and similar technologies to remember preferences and understand how the site is used. You can control cookies through your browser settings; disabling them may affect some features.',
            ],
          },
          {
            heading: 'Data retention & security',
            content: [
              'We retain personal information for as long as needed to fulfill the purposes described in this policy or as required by law. We use reasonable administrative, technical, and physical safeguards to protect your information, though no method of transmission or storage is completely secure.',
            ],
          },
          {
            heading: 'Your choices',
            content: [
              'You may request access to, correction of, or deletion of your personal information, and you may opt out of marketing communications at any time. To make a request, contact us using the details below.',
            ],
          },
          {
            heading: 'Children’s privacy',
            content: [
              'Our website and services are intended for adults and are not directed to children under 13. We do not knowingly collect information from children.',
            ],
          },
          {
            heading: 'Changes to this policy',
            content: [
              'We may update this Privacy Policy from time to time. Changes take effect when posted to this page, and the “Last updated” date above will be revised accordingly.',
            ],
          },
          {
            heading: 'Contact us',
            content: [
              'If you have questions about this Privacy Policy or your information, contact us:',
              'Hiatt Development Company · 1453 W. Landstreet Rd, Ste 302, Orlando, FL 32824 · sales@hiattdevelopment.com · 689-228-5003',
            ],
          },
        ]}
      />
    </>
  )
}
