import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Switch, useHistory} from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { api } from "../../utils/api";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isEducation, setIsEducation] = React.useState([]);
  const [isNews, setIsNews] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res)
        setIsLoggedIn(true)
        history.push('/')
      })
      .catch((err) => {
        console.log(err);
      })
    api
      .getCourse()
      .then((data) => {
        setIsEducation(data);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getNews()
      .then((data) => {
        setIsNews(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          title="Knomary"
          label="test"
          userName={currentUser.name}
          userStatus={currentUser.status}
          userImage={currentUser.image}
        />
        <Switch>
          <ProtectedRoute
            exact
            isNews={isNews}
            isEducation={isEducation}
            isLoggedIn={isLoggedIn}
            component={Main}
            path='/'
          />
          
        </Switch>
        <Footer title="Knomary" label="test" buttonHelpText="нужна помощь?" />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
