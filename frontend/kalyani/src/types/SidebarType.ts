export interface SidebarType {
  title: string;
  path: string;
  iconOpened?: any;
  iconClosed?: any;
  subnav?: SidebarType[];
}
