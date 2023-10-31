import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../common/GlobalStyle';

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

const HomeContent = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <PageTitle href="/">Car Pool Calculator</PageTitle>
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
        </div>
      </Main>
    </>
  );
};

export default HomeContent;
