import { types, flow } from 'mobx-state-tree';

export default types
    .model({
        pending: types.optional(types.boolean, false)
    })
    .actions(self => ({
        testAsync: flow(function*() {
            self.pending = true;
            yield new Promise(resolve => setTimeout(resolve, 3000));
            self.pending = false;
        })
    }));
