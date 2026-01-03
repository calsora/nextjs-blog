import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Privacy Policy' })

export default function PrivacyPolicy() {
  return (
    <div className="prose mx-auto py-12">
      <h2 className="tracking-tight text-gray-900 dark:text-gray-100">Privacy Policy</h2>
      <p className="text-gray-500 dark:text-gray-400">
        Your privacy is important to me. This site collects minimal information and uses cookies
        only where necessary to provide the site experience. For specific questions, reach out via
        the contact details on the site.
      </p>
      <h2 className="tracking-tight text-gray-900 dark:text-gray-100">Data Collection</h2>
      <p className="text-gray-500 dark:text-gray-400">
        I do not sell personal data. Analytics (if enabled) are used to measure traffic and improve
        content. If you require removal of data, please contact me. If you choose to subscribe, your
        email address will be used to send updates. "EmailOctopus" software is used for managing
        subscriptions. You can unsubscribe at any time via email or contacting me using the below
        channels.
      </p>
      <h2 className="tracking-tight text-gray-900 dark:text-gray-100">Contact</h2>
      <p className="text-gray-500 dark:text-gray-400">
        If you have privacy concerns, please contact me through the social links in the footer.
      </p>
    </div>
  )
}
