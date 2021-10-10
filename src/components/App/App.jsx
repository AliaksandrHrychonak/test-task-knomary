import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Switch, useHistory} from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { api } from "../../utils/api";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const App = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isEducation, setIsEducation] = React.useState([]);
  const [isNews, setIsNews] = React.useState([]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const history = useHistory();

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
          isActive={isMenuOpen}
          onOpenClick={handleOpenMenu}
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
        <MobileMenu isActive={isMenuOpen} onOpenClick={handleOpenMenu}/>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
