import React from "react";
import styled from "styled-components";
import { TMenu } from "../types/api";

type TProps = {
  menuData: TMenu;
};

const Nav = ({ menuData }: TProps) => {
  return (
    <Container>
      <p className="title">Our Menu</p>

      <div className="navList">
        {menuData.sections.map((c) =>
          c.items.length ? (
            <a className="nav" href={`#${c.id}`}>
              {c.label}
            </a>
          ) : null
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .title {
    padding: 0;
    margin: 0;
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    /* tablets and desktop */
    margin: 12px;

    .navList {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 767px) {
    /* phones */
    margin: 6px;

    .navList {
      display: inline-flex !important;
      flex-direction: row !important;
      overflow-inline: scroll;
    }

    .nav {
      margin-right: 6px;
      color: inherit;
    }
  }
`;

export default Nav;
