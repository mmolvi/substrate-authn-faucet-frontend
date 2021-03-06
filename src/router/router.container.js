import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Router from './router';
// routes
import home from '../pages/home/home.routes';
import signup from '../pages/signup/signup.routes';
import privacyPolicy from '../pages/privacy-policy/privacy-policy.routes';

export const mapStateToProps = () => ({
  routes: [...home, ...signup, ...privacyPolicy]
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));
