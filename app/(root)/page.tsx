import ButtonCombo from "@/components/shared/butttonCombo";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative pb-12 pt-8 w-full">
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-white">
            <div className="-z-1 left-0 h-full w-full bg-[radial-gradient(#eaeaea_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>
        </div>
        <div className="mb-8 flex w-full justify-center">
          <span className="relative inline-flex animate-fade-in-up cursor-pointer items-center overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-t from-[rgba(215,215,215,0.6)] to-[rgba(255,255,255,1)] px-6 py-2  text-base font-medium text-neutral-600 [animation-fill-mode:both]">
            <Link href="/">
              Issue-Tracker <span className="ml-1 inline-flex">✨</span>
            </Link>
          </span>
        </div>
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <h2 className="inline-block animate-fade-in-up text-center text-xl font-medium text-gray-900 [animation-fill-mode:both] [animation-delay:500ms]">
            Your{" "}
            <span className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
              Issue_Tracker
            </span>{" "}
            gallery is here.
          </h2>
          <p className="mt-6 animate-fade-in-up text-center text-lg leading-6 text-gray-600 [animation-fill-mode:both] [animation-delay:800ms]">
            A simple issue tracker to keep track of your issues and their
            status. It's a simple and easy to use application.😉
          </p>
          <div className="mt-10 flex animate-fade-in-up gap-4 [animation-fill-mode:both] [animation-delay:1100ms]">
            <a
              href="https://github.com/Sunilmalani456/Issue_Tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button>
                Go to GitHub
                <ArrowRightIcon className="pl-0.5 ml-0.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2">
        <ButtonCombo />
      </div>
    </>
  );
}
