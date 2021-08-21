import React from "react";
import Tab from "./Tab";

export default function Tabs({tabs}) {
    const Tabs = tabs.map((tab, index) => <Tab key={index} href={tab.href} size={tab.size} text={tab.text} />)
    return(
        <ul className="tabs">
            {Tabs}
        </ul>
    )
}