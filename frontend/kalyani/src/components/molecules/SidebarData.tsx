import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { SidebarType } from "../../types/SidebarType";

export const SidebarData: SidebarType[] = [
  {
    title: "Formal Wear",
    path: "/clothes/formal-wear",
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: "Stitched",
        path: "/clothes/formal-wear/eee3dac1-8301-4093-ab01-0f191c745db2",
      },
      {
        title: "Unstitched",
        path: "/clothes/formal-wear/eee3dac1-8301-4093-ab01-0f191c745db2",
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
        path: "/clothes/casual-wear/eee3dac1-8301-4093-ab01-0f191c745db2",
      },
      {
        title: "Unstitched",
        path: "/clothes/casual-wear/eee3dac1-8301-4093-ab01-0f191c745db2",
      },
    ],
  },
];
