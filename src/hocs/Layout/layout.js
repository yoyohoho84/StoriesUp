import React from "react";
import { Panel, PanelHeader, Div } from "@vkontakte/vkui";

const Layout = (props) => {
  return (
    <Panel id={props.id}>
      <PanelHeader>{props.panelTitle}</PanelHeader>
      <Div className="panel-wrapper">{props.children}</Div>
    </Panel>
  );
};

export default Layout;
