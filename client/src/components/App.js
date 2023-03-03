import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header"
import NavRectangle from "./NavRectangle"

import Menu from "../pages/menus/CreateMenu"
import MenuHistory from "../pages/menus/MenuHistory";
import MyRecipes from "../pages/recipe/MyRecipes";
import Recipes from "../pages/recipe/Recipes"
import CreateRecipe from "../pages/recipe/CreateRecipeForm";
import Stats from "../pages/stats/Stats"
import Friends from "../pages/friends/Friends"
import Profile from "../pages/profile/Profile"

import LoggedOut from "./LoggedOut"
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm";

import stir from '../images/Pot RICE blue.GIF'

import './App.css';

export const UserContext = createContext();
export const MenuContext = createContext();
export const PublishContext = createContext();
export const RecipeContext = createContext();

function App() {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  const [menus, setMenus] = useState(null)
  const [friends, setFriends] = useState([])
  const [myRecipes, setMyRecipes] = useState([])

  const [unpublish, setUnPublish] = useState(null)
  const [unpublishRecipes, setUnPublishRecipes] = useState([])
  const [unpublishMenuToRecipes, setUnpublishMenuToRecipes] = useState([])

  const [stats, setStats] = useState([]);


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setFriends(user.friends)
          setMyRecipes(user.recipes)
          setLoading(false)
        })
      }
    });
  }, []);

  useEffect(() => {
    fetch("/menu_history").then((r) => {
      if (r.ok) {
        r.json().then((menu) => {
          setMenus(menu)
        })
      }
    });
  }, []);

  useEffect(() => {
    fetch("/unpublish_menu").then((r) => {
      if (r.ok) {
        r.json().then((menu) => {
          setUnPublish(menu)
          setUnpublishMenuToRecipes(menu.menu_to_recipes)
          setUnPublishRecipes(menu.recipes)
        })
      }
    });
  }, []);

  ////////// Recipes //////////

  const [allRecipes, setAllRecipes] = useState([])

  useEffect(() => {
    fetch("/recipes").then((r) => {
      if (r.ok) {
        r.json().then((recipes) => {
          setAllRecipes(recipes)
        })
      }
    });
  }, []);

  function deleteRecipe(id) {
    const updatedRecipes = allRecipes.filter((recipe) => recipe.id !== id);
    setAllRecipes(updatedRecipes);
  }

  ////////////

  function updatedMyRecipes(update) {
    const updatedMyRecipes = myRecipes.map((recipe) => {
      if (recipe.id === update.id) {
        return update;
      } else {
        return recipe;
      }
    });
    setMyRecipes(updatedMyRecipes);
  }

  function deleteMyRecipe(id) {
    const updatedMyRecipes = myRecipes.filter((recipe) => recipe.id !== id);
    setMyRecipes(updatedMyRecipes);
  }

  return (
    <div className='App'>
      {user ? (
        <>
          {loading ? (
            <>
              <UserContext.Provider value={{ user, setUser }}>
                <Header />
              </UserContext.Provider>
              <div>
                <img src={stir} alt={stir} width="200" height="200" />
                <p>Welcome, {user.username}!</p>
              </div>
            </>
          ) : (
            <>
              <UserContext.Provider value={{ user, setUser, setLoading, stats, setStats, friends, setFriends, myRecipes, setMyRecipes, deleteMyRecipe, updatedMyRecipes }}>
                <MenuContext.Provider value={{ menus, setMenus }} >
                  <PublishContext.Provider value={{ unpublish, setUnPublish, unpublishRecipes, setUnPublishRecipes, unpublishMenuToRecipes, setUnpublishMenuToRecipes }} >
                    <RecipeContext.Provider value={{ allRecipes, setAllRecipes, deleteRecipe }}>
                      <Header />
                      <Routes>
                        <Route path="/menu" element={<Menu />}>
                        </Route>
                        <Route path="/menu_history" element={<MenuHistory />}>
                        </Route>
                        <Route path="/friends" element={<Friends />}>
                        </Route>
                        <Route path="/my_recipes" element={<MyRecipes />}>
                        </Route>
                        <Route path="/recipes" element={<Recipes />}>
                        </Route>
                        <Route path="/create_recipe" element={<CreateRecipe />}>
                      </Route>
                        <Route path="/stats" element={<Stats />}>
                        </Route>
                        <Route path="/profile" element={<Profile />}>
                        </Route>
                        <Route path="/" element={<NavRectangle />}>
                        </Route>
                      </Routes>
                    </RecipeContext.Provider>
                  </PublishContext.Provider>
                </MenuContext.Provider>
              </UserContext.Provider>
            </>
          )}
        </>
      ) : (
        <UserContext.Provider value={{ user, setUser, setLoading }}>
          <Header />
          <Routes>
            <Route path="/signup" element={<SignUpForm />}>
            </Route>
            <Route path="/login" element={<LoginForm />}>
            </Route>
            <Route path="/" element={<LoggedOut />}>
            </Route>
          </Routes>
        </UserContext.Provider>
      )}

    </div>
  );

}

export default App;
