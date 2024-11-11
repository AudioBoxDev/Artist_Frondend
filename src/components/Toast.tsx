import React from "react";
import * as Toast from "@radix-ui/react-toast";

interface ToastNotificationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  message: string;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ open, setOpen, title, message }) => {
    const backgroundColor = title === "Error" ? "bg-red-600" : "bg-[#1A3F35]";
  const borderColor = title === "Error" ? "border-red-500" : "border-[#32D190]";

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className={`${backgroundColor} ${borderColor} text-white p-2 rounded-lg shadow-lg  font-roboto flex flex-col space-y-2`}
      >
        <Toast.Title className="font-bold text-lg">{title}</Toast.Title>
        <Toast.Description className="text-sm">{message}</Toast.Description>
        <Toast.Action asChild altText="Close toast">
          <button className="text-sm font-medium border border-white p-1 px-3 rounded-xl  text-white self-end">Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col space-y-2 w-80 z-50" />
    </Toast.Provider>
  );
};

export default ToastNotification;
