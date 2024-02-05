import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import './DealerAdButton.css'
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import RegisterAgency from "../../pages/RegisterAgency/RegisterAgency";
import { getFromLocalStorage } from "../../utils";

export default function DealerAdButton() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const RegisterProperty = () => {
    if (getFromLocalStorage("isAgency") && getFromLocalStorage("isLogin")) {
      navigate("/create-new-ad", { replace: true });
    }
    else {
      localStorage.clear();
      navigate("/add-new-agency", { replace: true });
    }
  }
  return (
    <>
      <NavLink onClick={RegisterProperty} className="real-state-register-ad">
        {t("Register Ad for Real States")}
      </NavLink>
    </>
  )
}
