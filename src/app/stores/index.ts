import { castToSnapshot } from 'mobx-state-tree';
import RootStore from './RootStore';
import DebugStore from './DebugStore';

export default RootStore.create(
    castToSnapshot({
        debug: DebugStore.create()
    })
);
