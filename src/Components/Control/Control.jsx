import React from "react";
import { Tabs } from "antd";
import cover from "../../Assets/copy.gif";
import Departments from "../Departments/Departments";

export default function Control() {
  const items = [
    {
      key: "1",
      label: "الأفرع",
      children: <Departments />,
    },
    {
      key: "2",
      label: "المستخدمين",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "مسار الأرشيف",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <div className="container">
        <Tabs className="direction mt-5" defaultActiveKey="1" items={items} />
        <div className="position-fixied-bottom image-holder text-center mt-5">
          <img className="w-25" src={cover} alt="" />
        </div>
      </div>
    </>
  );
}
