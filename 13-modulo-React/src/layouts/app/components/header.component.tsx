import React from "react";
import LogoHeader from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";
import { useProfileContext } from "@/core/profile";
import { appRoutes } from "@/core/router";

export const HeaderComponent: React.FC = () => {
  const { userName } = useProfileContext();

  return (
    <header className={classes.header}>
      <div>
        <a href={appRoutes.accountList}>
          <img src={LogoHeader} className={classes.headerLogo} />
        </a>
        <div className={classes.usuario}>
          <p>{`Bienvenido ${userName}`}</p>
        </div>
      </div>
    </header>
  );
};
