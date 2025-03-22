import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

function ReduxProvider({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
