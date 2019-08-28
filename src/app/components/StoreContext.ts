import React from 'react';
import RootStore from 'stores/RootStore';
import { Instance } from 'mobx-state-tree';

export default React.createContext<Instance<typeof RootStore>>(null as any);
