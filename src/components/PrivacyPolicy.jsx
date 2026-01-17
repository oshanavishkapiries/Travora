import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated January 12, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Notice for Kipso Global ("we," "us," or "our"),
              describes how and why we might access, collect, store, use, and/or
              share ("process") your personal information when you use our
              services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Download and use our mobile application (Kipso), or any other
                application of ours that links to this Privacy Notice
              </li>
              <li>
                Engage with us in other related ways, including any marketing or
                events
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Questions or concerns?</strong> Reading this Privacy
              Notice will help you understand your privacy rights and choices.
              We are responsible for making decisions about how your personal
              information is processed. If you do not agree with our policies
              and practices, please do not use our Services.
            </p>
          </div>

          {/* Summary of Key Points */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Summary of Key Points
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our table of
              contents below to find the section you are looking for.
            </p>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>What personal information do we process?</strong> When
                you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use.
              </p>
              <p>
                <strong>
                  Do we process any sensitive personal information?
                </strong>{" "}
                We do not process sensitive personal information.
              </p>
              <p>
                <strong>
                  Do we collect any information from third parties?
                </strong>{" "}
                We do not collect any information from third parties.
              </p>
              <p>
                <strong>How do we process your information?</strong> We process
                your information to provide, improve, and administer our
                Services, communicate with you, for security and fraud
                prevention, and to comply with law.
              </p>
              <p>
                <strong>
                  In what situations and with which parties do we share personal
                  information?
                </strong>{" "}
                We may share information in specific situations and with
                specific third parties.
              </p>
              <p>
                <strong>How do we keep your information safe?</strong> We have
                adequate organizational and technical processes and procedures
                in place to protect your personal information.
              </p>
              <p>
                <strong>What are your rights?</strong> Depending on where you
                are located geographically, the applicable privacy law may mean
                you have certain rights regarding your personal information.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Table of Contents
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-blue-600">
              <li>
                <a href="#section-1" className="hover:underline">
                  WHAT INFORMATION DO WE COLLECT?
                </a>
              </li>
              <li>
                <a href="#section-2" className="hover:underline">
                  HOW DO WE PROCESS YOUR INFORMATION?
                </a>
              </li>
              <li>
                <a href="#section-3" className="hover:underline">
                  WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </a>
              </li>
              <li>
                <a href="#section-4" className="hover:underline">
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
              </li>
              <li>
                <a href="#section-5" className="hover:underline">
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
              </li>
              <li>
                <a href="#section-6" className="hover:underline">
                  HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </a>
              </li>
              <li>
                <a href="#section-7" className="hover:underline">
                  IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                </a>
              </li>
              <li>
                <a href="#section-8" className="hover:underline">
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </a>
              </li>
              <li>
                <a href="#section-9" className="hover:underline">
                  HOW DO WE KEEP YOUR INFORMATION SAFE?
                </a>
              </li>
              <li>
                <a href="#section-10" className="hover:underline">
                  DO WE COLLECT INFORMATION FROM MINORS?
                </a>
              </li>
              <li>
                <a href="#section-11" className="hover:underline">
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
              </li>
              <li>
                <a href="#section-12" className="hover:underline">
                  CONTROLS FOR DO-NOT-TRACK FEATURES
                </a>
              </li>
              <li>
                <a href="#section-13" className="hover:underline">
                  DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
              </li>
              <li>
                <a href="#section-14" className="hover:underline">
                  DO WE MAKE UPDATES TO THIS NOTICE?
                </a>
              </li>
              <li>
                <a href="#section-15" className="hover:underline">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
              </li>
              <li>
                <a href="#section-16" className="hover:underline">
                  HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                  YOU?
                </a>
              </li>
            </ol>
          </section>

          {/* Section 1 */}
          <section id="section-1" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personal information you disclose to us
            </h3>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We collect personal information that you
              provide to us.
            </p>
            <p className="text-gray-700 mb-4">
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </p>

            <p className="text-gray-700 mb-2">
              <strong>Personal Information Provided by You.</strong> The
              personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>names</li>
              <li>email addresses</li>
              <li>usernames</li>
              <li>passwords</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Sensitive Information.</strong> We do not process
              sensitive information.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Social Media Login Data.</strong> We may provide you with
              the option to register with us using your existing social media
              account details, like your Facebook, X, or other social media
              account. If you choose to register in this way, we will collect
              certain profile information about you from the social media
              provider, as described in the section called "HOW DO WE HANDLE
              YOUR SOCIAL LOGINS?" below.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Application Data
            </h3>
            <p className="text-gray-700 mb-4">
              If you use our application(s), we also may collect the following
              information if you choose to provide us with access or permission:
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Geolocation Information.</strong> We may request access
                or permission to track location-based information from your
                mobile device, either continuously or while you are using our
                mobile application(s), to provide certain location-based
                services. If you wish to change our access or permissions, you
                may do so in your device's settings.
              </p>
              <p>
                <strong>Mobile Device Access.</strong> We may request access or
                permission to certain features from your mobile device,
                including your mobile device's camera, and other features. If
                you wish to change our access or permissions, you may do so in
                your device's settings.
              </p>
              <p>
                <strong>Mobile Device Data.</strong> We automatically collect
                device information (such as your mobile device ID, model, and
                manufacturer), operating system, version information and system
                configuration information, device and application identification
                numbers, browser type and version, hardware model Internet
                service provider and/or mobile carrier, and Internet Protocol
                (IP) address (or proxy server). If you are using our
                application(s), we may also collect information about the phone
                network associated with your mobile device, your mobile device's
                operating system or platform, the type of mobile device you use,
                your mobile device's unique device ID, and information about the
                features of our application(s) you accessed.
              </p>
              <p>
                <strong>Push Notifications.</strong> We may request to send you
                push notifications regarding your account or certain features of
                the application(s). If you wish to opt out from receiving these
                types of communications, you may turn them off in your device's
                settings.
              </p>
            </div>

            <p className="text-gray-700 mt-4">
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Information automatically collected
            </h3>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> Some information — such as your Internet
              Protocol (IP) address and/or browser and device characteristics —
              is collected automatically when you visit our Services.
            </p>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
              Google API
            </h3>
            <p className="text-gray-700">
              Our use of information received from Google APIs will adhere to
              Google API Services User Data Policy, including the Limited Use
              requirements.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We process your information to provide,
              improve, and administer our Services, communicate with you, for
              security and fraud prevention, and to comply with law.
            </p>
            <p className="text-gray-700 mb-4">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>
                  To facilitate account creation and authentication and
                  otherwise manage user accounts.
                </strong>{" "}
                We may process your information so you can create and log in to
                your account, as well as keep your account in working order.
              </li>
              <li>
                <strong>
                  To save or protect an individual's vital interest.
                </strong>{" "}
                We may process your information when necessary to save or
                protect an individual's vital interest, such as to prevent harm.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We only process your personal information when
              we believe it is necessary and we have a valid legal reason (i.e.,
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              If you are located in the EU or UK
            </h3>
            <p className="text-gray-700 mb-4">
              The General Data Protection Regulation (GDPR) and UK GDPR require
              us to explain the valid legal bases we rely on in order to process
              your personal information. As such, we may rely on the following
              legal bases to process your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Consent.</strong> We may process your information if you
                have given us permission (i.e., consent) to use your personal
                information for a specific purpose. You can withdraw your
                consent at any time.
              </li>
              <li>
                <strong>Legal Obligations.</strong> We may process your
                information where we believe it is necessary for compliance with
                our legal obligations, such as to cooperate with a law
                enforcement body or regulatory agency, exercise or defend our
                legal rights, or disclose your information as evidence in
                litigation in which we are involved.
              </li>
              <li>
                <strong>Vital Interests.</strong> We may process your
                information where we believe it is necessary to protect your
                vital interests or the vital interests of a third party, such as
                situations involving potential threats to the safety of any
                person.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              If you are located in Canada
            </h3>
            <p className="text-gray-700 mb-4">
              We may process your information if you have given us specific
              permission (i.e., express consent) to use your personal
              information for a specific purpose, or in situations where your
              permission can be inferred (i.e., implied consent). You can
              withdraw your consent at any time.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We may share information in specific situations
              described in this section and/or with the following third parties.
            </p>
            <p className="text-gray-700 mb-4">
              We may need to share your personal information in the following
              situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Business Transfers.</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition of
                all or a portion of our business to another company.
              </li>
              <li>
                <strong>When we use Google Maps Platform APIs.</strong> We may
                share your information with certain Google Maps Platform APIs
                (e.g., Google Maps API, Places API).
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We may use cookies and other tracking
              technologies to collect and store your information.
            </p>
            <p className="text-gray-700 mb-4">
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services and your account, prevent crashes,
              fix bugs, save your preferences, and assist with basic site
              functions.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> If you choose to register or log in to our
              Services using a social media account, we may have access to
              certain information about you.
            </p>
            <p className="text-gray-700">
              Our Services offer you the ability to register and log in using
              your third-party social media account details (like your Facebook
              or X logins). Where you choose to do this, we will receive certain
              profile information about you from your social media provider.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We may transfer, store, and process your
              information in countries other than your own.
            </p>
            <p className="text-gray-700">
              Our servers are located in Singapore. If you are accessing our
              Services from outside Singapore, please be aware that your
              information may be transferred to, stored by, and processed by us
              in our facilities and in the facilities of the third parties with
              whom we may share your personal information.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We keep your information for as long as
              necessary to fulfill the purposes outlined in this Privacy Notice
              unless otherwise required by law.
            </p>
            <p className="text-gray-700">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We aim to protect your personal information
              through a system of organizational and technical security
              measures.
            </p>
            <p className="text-gray-700">
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> We do not knowingly collect data from or market
              to children under 18 years of age.
            </p>
            <p className="text-gray-700">
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age, nor do we knowingly sell such
              personal information. If you become aware of any data we may have
              collected from children under age 18, please contact us at{" "}
              <a
                href="mailto:info@kipso.global"
                className="text-blue-600 hover:underline"
              >
                info@kipso.global
              </a>
              .
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. WHAT ARE YOUR PRIVACY RIGHTS?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> Depending on your state of residence in the US
              or in some regions, such as the European Economic Area (EEA),
              United Kingdom (UK), Switzerland, and Canada, you have rights that
              allow you greater access to and control over your personal
              information.
            </p>
            <p className="text-gray-700 mb-4">
              In some regions (like the EEA, UK, Switzerland, and Canada), you
              have certain rights under applicable data protection laws. These
              may include the right to request access and obtain a copy of your
              personal information, to request rectification or erasure, to
              restrict the processing of your personal information, and if
              applicable, to data portability.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Account Information
            </h3>
            <p className="text-gray-700 mb-4">
              If you would at any time like to review or change the information
              in your account or terminate your account, you can log in to your
              account settings and update your user account.
            </p>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <p className="text-gray-700">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized.
            </p>
          </section>

          {/* Section 13 */}
          <section id="section-13" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> If you are a resident of certain US states, you
              may have the right to request access to and receive details about
              the personal information we maintain about you and how we have
              processed it, correct inaccuracies, get a copy of, or delete your
              personal information.
            </p>
            <p className="text-gray-700">
              We have not disclosed, sold, or shared any personal information to
              third parties for a business or commercial purpose in the
              preceding twelve (12) months. We will not sell or share personal
              information in the future belonging to website visitors, users,
              and other consumers.
            </p>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <p className="text-gray-700 mb-4">
              <em>In Short:</em> Yes, we will update this notice as necessary to
              stay compliant with relevant laws.
            </p>
            <p className="text-gray-700">
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date at the top
              of this Privacy Notice. If we make material changes to this
              Privacy Notice, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
            </p>
          </section>

          {/* Section 15 */}
          <section id="section-15" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <p className="text-gray-700">
              If you have questions or comments about this notice, you may email
              us at{" "}
              <a
                href="mailto:info@kipso.global"
                className="text-blue-600 hover:underline"
              >
                info@kipso.global
              </a>
              .
            </p>
          </section>

          {/* Section 16 */}
          <section id="section-16" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h2>
            <p className="text-gray-700">
              Based on the applicable laws of your country or state of residence
              in the US, you may have the right to request access to the
              personal information we collect from you, details about how we
              have processed it, correct inaccuracies, or delete your personal
              information. To request to review, update, or delete your personal
              information, please visit:{" "}
              <a
                href="https://kipso.global"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                kipso.global
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
