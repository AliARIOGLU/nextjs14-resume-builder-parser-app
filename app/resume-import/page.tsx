"use client";

import { useEffect, useState } from "react";
import { getHasUsedAppBefore } from "../lib/redux/local-storage";
import { OrDivider } from "./_components/divider";
import { SectionWithHeadingAndCreateButton } from "./_components/section-with-heading-and-button";

const ResumeImportPage = () => {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);

  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <main>
      <div className="mx-auto mt-14 max-w-3xl rounded-md border border-gray-200 p-10 text-center shadow-md">
        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-lg font-semibold text-gray-900">
              Import data from an existing resume
            </h1>
            {/* TODO: Resume Dropzone Component */}
            <h2>Resume Dropzone Component</h2>
            {!hasAddedResume && (
              <>
                <OrDivider />
                <SectionWithHeadingAndCreateButton
                  heading="Don't have a resume yet?"
                  buttonText="Create from scratch"
                />
              </>
            )}
          </>
        ) : (
          <>
            {!hasAddedResume && (
              <>
                <SectionWithHeadingAndCreateButton
                  heading="You have data saved in browser from prior session"
                  buttonText="Continue where I left off"
                />
                <OrDivider />
              </>
            )}
            <h1 className="font-semibold text-gray-900">
              Override data with a new resume
            </h1>
            {/* <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            /> */}
          </>
        )}
      </div>
    </main>
  );
};

export default ResumeImportPage;
