import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route, Switch, Redirect, wishRouter} from 'react-router-dom';
import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import {connect} from 'react-redux'
import Logout from "./components/Logout/Logout";

function App() {

  componentDidMount() {
    this.props.autoLogin()
  }

  let routs = (
    <Switch>
      <Route path={'/auth'} component={Auth} />
      <Route path={'/quiz/:id'} component={Quiz} />
      <Route path={'/'} component={QuizList} />
      <Redirect to={'/'} />
    </Switch>
  )

  if(this.props.isAuthenticated) {
    routs = (
      <Switch>
        <Route path={'/quiz-creator'} component={QuizCreator} />
        <Route path={'/quiz/:id'} component={Quiz} />
        <Route path={'/'} component={QuizList} />
        <Route path={'/logout'} component={Logout} />
        <Redirect to={'/'} />
      </Switch>
    )
  }

  return (
    <Layout>
      {routs}
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default wishRouter(connect(mapStateToProps)(App))
