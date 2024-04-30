import { ReactNode } from 'react';
import { columnsStyle } from './columns.css';
import classNames from 'classnames';

type ColumnsProps = {
  children?: ReactNode;
  css?: React.CSSProperties;
  vanillaCss?: string;
};

export const Columns = ({ children, css = {}, vanillaCss }: ColumnsProps) => {
  return (
    <div className={classNames(columnsStyle, vanillaCss)} style={css}>
      {children}
    </div>
  );
};
