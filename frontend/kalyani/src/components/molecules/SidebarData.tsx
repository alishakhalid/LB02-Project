import { SidebarType } from "../../types/SidebarType";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCog, FaOpencart } from "react-icons/fa";

export const SidebarData: SidebarType[] = [
  {
    title: "Formal Wear",
    path: "/clothes/formal-wear",
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: "Stitched",
        path: "/clothes/formal-wear-stitched/1",
      },
      {
        title: "Unstitched",
        path: "/clothes/formal-wear-unstitched/1",
      },
    ],
  },
  {
    title: "Casual Wear",
    path: "/clothes/casual-wear",
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: "Stitched",
        path: "/clothes/casual-wear-stitched/1",
      },
      {
        title: "Unstitched",
        path: "/clothes/casual-wear-unstitched/1",
      },
    ],
  },
];
