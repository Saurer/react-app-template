import { types } from 'mobx-state-tree';
import DebugStore from './DebugStore';

export default types.model({
    debug: DebugStore
});
