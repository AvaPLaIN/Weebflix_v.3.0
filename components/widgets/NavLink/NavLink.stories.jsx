import React from "react";
import NavLink from "./NavLink";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "NavLink",
  component: NavLink,
};

const Template = (args) => <NavLink {...args} />;

export const NavItem = Template.bind({});
NavItem.args = {
  href: "?path=/story/navlink--nav-item",
  children: <div>NavItem</div>,
};
