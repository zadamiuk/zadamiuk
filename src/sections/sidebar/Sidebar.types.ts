export type SidebarProps = {
  navItemsActivityList: boolean[];
  navItemsRefsList: ((node?: Element | null | undefined) => void)[];
};
