"use client";
// import { LogoutIcon } from "@/icon";

import * as React from "react";

import { Button } from "@/components/shared/button.component";

const Logout: React.FC = () => {
  return (
    <Button
      className="mr-2 flex flex-col items-center ps-1"
      type="button"
      text="logout"
    />
  );
};

export default Logout;
