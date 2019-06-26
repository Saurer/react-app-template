import { connect } from 'react-redux';
import { RootState } from 'modules/reducer';
import { testAsync } from 'modules/debug/actions';
import Debug from 'components/Debug';

const mapStateToProps = (state: RootState) => ({
    pending: state.debug.pending
});

export default connect(mapStateToProps, {
    onClick: () => testAsync.started({})
})(Debug);