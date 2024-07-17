import React from "react";
import { HeaderComponent,NavBarComponent,FooterComponent } from "./components";
import classes from "./app-layout.module.css"

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent/>
      <NavBarComponent/>
      <main className={classes.mainContent}>{children}</main>
      <FooterComponent/>
    </>
  );
};
