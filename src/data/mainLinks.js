import logo from "@svg/logo.svg?raw";
import search from "@svg/search.svg?raw";
import favorites from "@svg/favorites.svg?raw";

import { catalogList } from "./catalogList.js";
import { collectionList } from "./collectionList.js";

export const mainLinks = [
  {
    icon: search,
    href: "/search",
  },

  {
    icon: logo,
    href: "/",
  },

  {
    list: catalogList,
    label: "Каталог",
    href: "/catalog",
    hidden: true,
  },

  {
    list: collectionList,
    label: "Коллекции",
    href: "/collections",
    hidden: true,
  },

  {
    label: "Акции",
    href: "/stocks",
    hidden: true,
  },

  {
    label: "Доставка и оплата",
    href: "/delivery",
    hidden: true,
  },

  {
    label: "О нас",
    href: "/about",
    hidden: true,
  },

  {
    icon: favorites,
    href: "/favorites",
    "data-count": 2,
  },
];
