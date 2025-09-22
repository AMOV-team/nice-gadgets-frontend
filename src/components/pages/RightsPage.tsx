import type React from 'react';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';

export const RightsPage: React.FC = () => {
  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-4 sm:text-h1-lg">
          Terms & Policies
        </h1>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">1. Ownership and Intellectual Property</h2>
        <p>
          All content on this site — including text, images, graphics, logos,
          design, software, trademarks, and domain names — is owned by the AMOV²
          team and is protected by copyright and intellectual property laws.
        </p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">2. Use of Content</h2>
        <p>
          You may view, download, or print content from this website for
          personal, non-commercial use only. Any other use — such as copying,
          sharing, publishing, or selling — is not allowed without prior written
          permission.
        </p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">3. Copy Protection</h2>
        <p>
          All materials are protected against unauthorized copying. Using bots,
          scripts, or automated tools to collect or copy content without
          permission is strictly prohibited.
        </p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">4. Privacy Policy</h2>
        <p>
          Your privacy matters to us. We do not collect or store any personal
          data, except for information related to orders and your saved favorite
          products on this site.
        </p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">5. Updates and Changes</h2>
        <p>
          We reserve the right to update these terms at any time. Changes take
          effect once published on the website. We encourage you to review the
          terms periodically to stay informed.
        </p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">6. Limitation of Liability</h2>
        <p>
          We are not responsible for any damage or loss resulting from your use
          of this website. You use the site at your own risk.
        </p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">7. Contact Information</h2>
        <p>
          If you have any questions or feedback about these terms, feel free to
          reach out via the Contacts page.
        </p>
      </div>
    </GridContainer>
  );
};
