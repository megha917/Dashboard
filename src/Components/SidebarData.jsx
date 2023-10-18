import {
  faBoxesPacking,
  faGaugeHigh,
  faUserGroup,
  faWallet,
  faPercent,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: faGaugeHigh,
    link: "/dashboard",
  },

  {
    title: "Product",
    icon: faBoxesPacking,
    link: "/product",
  },

  {
    title: "Customers",
    icon: faUserGroup,
    link: "/customer",
  },

  {
    title: "Income",
    icon: faWallet,
    link: "/income",
  },

  {
    title: "Promote",
    icon: faPercent,
    link: "/promote",
  },

  {
    title: "Help",
    icon: faCircleQuestion,
    link: "/help",
  },
];
