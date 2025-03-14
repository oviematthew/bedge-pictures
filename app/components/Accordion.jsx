import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function Accordion() {
  return (
    <div className="h-screen w-full pt-32 px-4">
      <div className="mx-auto sm:w-3/4 md:w-1/2  divide-y divide-white/5 rounded-xl bg-black/5 dark:bg-white/5 ">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg font-poppins font-medium text-color text-left">
              DO YOU TRAVEL?
            </span>
            <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 gray-text-color">
            Yes, we travel and we would love to discuss travel details with you.
          </DisclosurePanel>
        </Disclosure>

        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-lg font-medium font-poppins text-color text-left">
              HOW MUCH DO YOU EDIT YOUR PHOTOS?
            </span>
            <ChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 gray-text-color">
            Post-processing is the most time-intensive part of your wedding as
            we work hard to ensure your images meet our artistic standards.
            Every photo has a custom look applied and is adjusted for things
            like brightness and optimal color.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
