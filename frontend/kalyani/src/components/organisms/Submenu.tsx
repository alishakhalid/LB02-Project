import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarType } from "../../types/SidebarType";
import InstagramIcon from "@mui/icons-material/Instagram";

type SidebarLinkProps = {
  item: SidebarType;
};

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 2rem;
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: #e0f2f1;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding-left: 3rem;
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: #4db6ac;
  }
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}
        </div>
      </SidebarLink>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <DropdownLink to={subnavItem.path} key={index}>
              <SidebarLabel>{subnavItem.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Submenu;
