import { Route, Switch } from "react-router";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUpsPage from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";

// switch makes sure that one component is rendered at a time else all will render
function App() {
  return <div>
    <MainNavigation />
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
  </div>;
}

export default App;
