export interface IDebugProps {
    pending: boolean;
    onClick: () => void;
}

const Debug: React.FC<IDebugProps> = props => (
    <div>
        <h4>Debug panel</h4>
        <div>Pending: {String(props.pending)}</div>
        <div>
            <button onClick={props.onClick} disabled={props.pending}>testAsync</button>
        </div>
    </div>
);

export default Debug;