"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useSwipeable } from "react-swipeable";

type GalleryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}: GalleryModalProps) {
  const prev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((currentIndex + 1) % images.length);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
          <Dialog.Panel
            className="relative max-w-3xl w-full bg-transparent"
            {...swipeHandlers} // ⬅️ moved here to maximize swipe area
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="flex justify-between items-center gap-4 select-none">
              <button
                onClick={prev}
                className="text-white hover:text-gray-300 z-10"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>

              <img
                src={images[currentIndex]}
                alt={`Preview ${currentIndex + 1}`}
                className="rounded max-h-[80vh] mx-auto"
              />

              <button
                onClick={next}
                className="text-white hover:text-gray-300 z-10"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
