import { Route, Switch } from "react-router";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUpsPage from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";
import Layout from "./components/layout/Layout";

// switch makes sure that one component is rendered at a time else all will render
function App() {
  return <Layout>

    <Switch>
      <Route path='/' exact>
        <AllMeetUpsPage />
      </Route>
      <Route path="new-meetups">
        <NewMeetUps />
      </Route>
      <Route path="favorites">
        <Favorites />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
