import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUser, login } from "../../../store/slices/user";

export default function ProtectedRoute({ children }) {
  let location = useLocation();
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) dispatch(login(JSON.parse(localUser)));
  }, []);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
