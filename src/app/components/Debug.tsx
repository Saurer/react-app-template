import { useContext } from 'react';
import { css } from '@emotion/core';
import { useObserver } from 'mobx-react-lite';
import StoreContext from './StoreContext';

const buttonStyle = css`
    background: #0072ff;
    border-radius: 2px;
    padding: 8px 15px;
    font-size: 14px;
    color: #fff;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px;
    transition: background 0.2s, box-shadow 0.2s;

    &:active,
    &:disabled {
        background: #3790ff;
        box-shadow: none;
    }

    &:disabled {
        background: #94c3fd;
        box-shadow: none;
    }
`;

const Debug: React.FC = () => {
    const storeContext = useContext(StoreContext);

    return useObserver(() => (
        <div>
            <h4>Debug panel</h4>
            <div>Pending: {String(storeContext.debug.pending)}</div>
            <div>
                <button
                    css={buttonStyle}
                    onClick={storeContext.debug.testAsync}
                    disabled={storeContext.debug.pending}
                >
                    testAsync
                </button>
            </div>
        </div>
    ));
};

export default Debug;
