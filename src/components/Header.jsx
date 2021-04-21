import React, { useContext } from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { AppContext } from "../App";
import GoToPageButton from "./GoToPageButton";

import colors from "../config/colors";
import PagePalette from "../config/PagePalette";

export default function Header({ color }) {
  const { manageAppContext } = useContext(AppContext);

  const pageNumber = manageAppContext.page;
  const textColor = color ? colors.black : colors.white;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        borderTop: `1px solid ${color}`,
        color: textColor,
        fontSize: "20px",
        backgroundColor: "rgba(248, 248, 248, 0.85)",
      }}
    >
      <div style={styles.wrapper}>
        <div
          className="logo"
          style={{
            display: "grid",
            justifyItems: "start",
            paddingLeft: "20px",
            fontSize: "32px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => manageAppContext.setPage(false)}
        >
          Ed Ancerys
        </div>
        <div
          style={{
            display: "grid",
            justifyItems: "end",
            paddingRight: "20px",
            cursor: "pointer",
          }}
        >
          <GoToPageButton
            icon={<IoMdFingerPrint size="4vh" />}
            color={PagePalette[pageNumber].primary}
            hoverColor={PagePalette[pageNumber].secondary}
            page={false}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    padding: "10px 20px",
  },
};
