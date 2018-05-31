// TableCell with custom styles

import React from 'react';
import { TableCell } from '@material-ui/core';

const style = {
  padding: '1em',
  whiteSpace: 'nowrap'
};

const StyledCell = ({ children, ...props }) => (
  <TableCell style={style} {...props}>
    {children}
  </TableCell>
);

export default StyledCell;