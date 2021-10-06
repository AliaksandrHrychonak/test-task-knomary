import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Main } from "../../pages/Main";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
const App = () => {
  const [currentUser, setCurrentUser] = React.useState({ name: "Виталий Лавов", status: "Сотрудник", image: process.env.PUBLIC_URL + "/image/user.png" });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header title="Knomary" label="test" userName={currentUser.name} userStatus={currentUser.status} userImage={currentUser.image}/>
        <Switch>
          <ProtectedRoute
            exact
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
