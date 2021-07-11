import React, { memo, useContext } from 'react';
import { PropsContext } from './Provider';

const StyleCenter = memo(() => {
  let { children } = useContext(PropsContext);
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {children ? children : null}
    </div>
  );
});

export default StyleCenter;
