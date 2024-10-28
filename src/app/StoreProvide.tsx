"use client";

import { store } from "../store/store";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
