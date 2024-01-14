import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';
import Register from './pages/Register';
import { asyncPreloadProcess } from './state/isPreload/action';
import { asyncUnsetAuthUser } from './state/authUser/action';
import Detail from './pages/Detail';
import AddThread from './pages/AddThread';
import Leaderboards from './pages/Leaderboards';
import NotFound from './pages/NotFound';
import Loading from './components/Loading';

function App() {
  const { isPreload = false, authUser } = useSelector((states) => states);
  console.log(`isPreload: ${isPreload}`, `authUser: ${authUser}`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  if (isPreload) {
    return null;
  }
  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />
      <Navigation authUser={authUser} signOut={onSignOut} />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddThread />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/thread/:threadId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
