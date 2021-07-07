import React from "react";
import Clients from "../Components/clients/Clients";
import { ClientsPageStyled } from "./ClientsPageStyled";

const ClientsPage = () => {
  return (
    <ClientsPageStyled>
      <Clients />
    </ClientsPageStyled>
  );
};

export default ClientsPage;
