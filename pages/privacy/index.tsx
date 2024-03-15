import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../common/GlobalStyle';
import Link from 'next/link';
import { Button } from '../../common/SharedStyles';

const Main = styled.main`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(
    ${({ height }) => (height ? `${height}px` : '100%')} - var(--header-height)
  );
  width: 100%;
  flex-direction: column;
  max-width: 800px;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 0.85rem;
  width: 100%;
  padding: 8px;
  background-color: white;
  text-align: center;
  height: var(--header-height);
  border-bottom: 2px solid rgb(83 104 212 / 80%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageTitle = styled.a`
  margin: 0;
  color: var(--color-primary);
  letter-spacing: -1px;
  font-weight: 800;
  font-size: 20px;
`;

const HomeLink = styled(Link)``;
const StyledButton = styled(Button)`
  display: block;
  width: fit-content;
  margin: 40px auto;
`;
const Spacer = styled.div`
  height: 20px;
`;

const HomeContent = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>
          <PageTitle href="/">Car Pool Calculator</PageTitle>
        </h1>
      </Header>
      <Main>
        <div>
          <h1>General Data Protection Regulation (GDPR) Compliance</h1>
          <h2>
            We are committed to protecting the privacy and personal data of our
            users. In accordance with the European Unions General Data
            Protection Regulation (GDPR) and other applicable data protection
            laws, we have implemented measures to ensure the responsible
            collection, processing, and storage of personal information.
          </h2>
          <h3>
            <strong>1. Data Collection and Use</strong>
          </h3>
          <p>
            We collect and process personal data solely for the purpose of
            providing our services and improving the user experience. The types
            of personal data we may collect include:
          </p>
          <p>
            Name, email address, and contact information provided voluntarily by
            users through our website or other communication channels. Usage
            data and analytics information, including IP addresses, device
            information, and browsing patterns, collected through cookies and
            similar technologies. We only collect personal data that is relevant
            and necessary for the intended purpose, and we do not retain it
            longer than required or permitted by law. Your personal data is used
            strictly for the purposes for which it was collected, and we do not
            share it with third parties without your explicit consent, except in
            cases where it is necessary to fulfill our contractual obligations
            or comply with legal requirements.
          </p>
          <h3>
            <strong>2. Data Security</strong>
          </h3>
          <p>
            We implement industry-standard security measures to protect your
            personal data from unauthorized access, disclosure, alteration, or
            destruction. This includes physical, technical, and administrative
            safeguards to maintain the confidentiality and integrity of your
            information.
          </p>
          <h3>
            <strong>3. Data Subject Rights</strong>
          </h3>
          <p>
            Under the GDPR, you have certain rights regarding your personal
            data, including the right to access, rectify, and erase your
            information, as well as the right to restrict or object to its
            processing. You also have the right to withdraw your consent at any
            time, without affecting the lawfulness of processing based on
            consent before its withdrawal.
          </p>
          <p>
            To exercise your rights or obtain more information about our data
            practices, contact us using the contact details provided below.
          </p>
          <h3>
            <strong>4. Data Transfers</strong>
          </h3>
          <p>
            We may transfer your personal data to recipients located in
            countries outside the European Economic Area (EEA) or to
            international organizations. In such cases, we ensure that
            appropriate safeguards are in place to protect your data, such as
            Standard Contractual Clauses approved by the European Commission or
            the Privacy Shield framework (if applicable).
          </p>
          <h3>
            <strong>5. Use of Cookies</strong>
          </h3>
          <p>
            Our website may use cookies and similar technologies to enhance user
            experience, analyze trends, and track usage information. By using
            our website, you consent to the use of cookies in accordance with
            our Cookie Policy.
          </p>
          <h3>
            <strong>6. Changes to the Privacy Notice</strong>
          </h3>
          <p>
            We reserve the right to update or modify this privacy notice from
            time to time. Any changes will be reflected on this page, and we
            encourage you to review this notice periodically.
          </p>
          <h3>
            <strong>7. Contact Us</strong>
          </h3>
          <p>
            If you have any questions, concerns, or requests regarding your
            personal data or this privacy notice, contact us{' '}
            <strong>
              <a href="mailto:squarepeoplesolutions@gmail.com">here</a>
            </strong>
          </p>
          <h1>Cookie Policy for Car Pool Calculator</h1>

          <p>
            This is the Cookie Policy for Car Pool Calculator, accessible from
            carpoolcalculator.com
          </p>

          <p>
            <strong>What Are Cookies</strong>
          </p>

          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or break
            certain elements of the sites functionality.
          </p>

          <p>
            <strong>How We Use Cookies</strong>
          </p>

          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>

          <p>
            <strong>Disabling Cookies</strong>
          </p>

          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies. This Cookies Policy was created with the help of the{' '}
            <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">
              Cookies Policy Generator
            </a>
            .
          </p>
          <p>
            <strong>The Cookies We Set</strong>
          </p>

          <ul>
            <li>
              <p>Site preferences cookies</p>
              <p>
                In order to provide you with a great experience on this site we
                provide the functionality to set your preferences for how this
                site runs when you use it. In order to remember your preferences
                we need to set cookies so that this information can be called
                whenever you interact with a page is affected by your
                preferences.
              </p>
            </li>
          </ul>

          <p>
            <strong>Third Party Cookies</strong>
          </p>

          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>

          <ul>
            <li>
              <p>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </p>
              <p>
                For more information on Google Analytics cookies, see the
                official Google Analytics page.
              </p>
            </li>

            <li>
              <p>
                Third party analytics are used to track and measure usage of
                this site so that we can continue to produce engaging content.
                These cookies may track things such as how long you spend on the
                site or pages you visit which helps us to understand how we can
                improve the site for you.
              </p>
            </li>

            <li>
              <p>
                The Google AdSense service we use to serve advertising uses a
                DoubleClick cookie to serve more relevant ads across the web and
                limit the number of times that a given ad is shown to you.
              </p>
              <p>
                For more information on Google AdSense see the official Google
                AdSense privacy FAQ.
              </p>
            </li>
          </ul>

          <p>
            <strong>More Information</strong>
          </p>

          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you are not sure whether you
            need or not it is usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>

          <p>
            For more general information on cookies, please read{' '}
            <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">
              the Cookies Policy article
            </a>
            .
          </p>

          <p>
            However if you are still looking for more information then you can
            contact us through one of our preferred contact methods:
          </p>

          <ul>
            <li>Email: squarepeoplesolutions@gmail.com</li>
          </ul>
          <StyledButton>
            <HomeLink href="/">Back to Home</HomeLink>
          </StyledButton>
          <Spacer />
        </div>
      </Main>
    </>
  );
};

export default HomeContent;
