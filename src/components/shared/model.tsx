import React, { forwardRef, useImperativeHandle } from "react";

export interface ModalRef {
  open: () => void;
  close: () => void;
}

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}
export const CustomModalExample = forwardRef<ModalRef, Props>(
  ({ children }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsVisible(true),
      close: () => setIsVisible(false),
    }));

  return (
    <div className="p-6">
      {isVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative animate-[fadeIn_0.2s_ease-in-out]">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            
            {children}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
})
