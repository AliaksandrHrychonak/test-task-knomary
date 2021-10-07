import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Main } from "../Main/Main";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { api } from "../../utils/api"
const App = () => {
  const [currentUser, setCurrentUser] = React.useState({ name: "Виталий Лавов", status: "Сотрудник", image: process.env.PUBLIC_URL + "/image/user.png" });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isEducation, setIsEducation] = React.useState([])
  const [isNews, setIsNews] = React.useState([])

  React.useEffect(() => {
    api.getCourse()
    .then((data) =>  {
      // console.log(data);
      setIsEducation(data)
    })
    .catch((err) => {
      console.log(err);
    })
    api.getNews()
    .then((data) => {
      // console.log(data);
      setIsNews(data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header title="Knomary" label="test" userName={currentUser.name} userStatus={currentUser.status} userImage={currentUser.image}/>
        <Switch>
          <ProtectedRoute
            exact
            isNews={isNews}
            isEducation={isEducation}
            isLoggedIn={isLoggedIn}
            component={Main}
            path="/"
          />
        </Switch>
        <Footer title="Knomary" label="test" buttonHelpText="нужна помощь?"/>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
