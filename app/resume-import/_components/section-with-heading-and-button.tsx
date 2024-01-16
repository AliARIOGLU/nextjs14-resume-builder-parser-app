import Link from "next/link";

interface SectionWithHeadingAndCreateButtonProps {
  heading: string;
  buttonText: string;
}

export const SectionWithHeadingAndCreateButton: React.FC<
  SectionWithHeadingAndCreateButtonProps
> = ({ heading, buttonText }) => {
  return (
    <>
      <p className="font-semibold text-gray-900">{heading}</p>
      <div className="mt-5">
        <Link
          href="/resume-builder"
          className="outline-theme-blue rounded-full bg-sky-500 px-6 pb-2 pt-1.5 text-base font-semibold text-white"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
