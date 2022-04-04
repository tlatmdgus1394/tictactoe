import React, { useCallback, memo } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = memo(({ cellData, rowIndex, cellIndex, dispatch }) => {
  console.log("td rendered");
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
