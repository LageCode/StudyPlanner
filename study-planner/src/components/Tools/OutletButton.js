import {Navigate, redirect, useNavigate} from "react-router";

const OutletButton = ({label, path}) => {
  const navigate = useNavigate();
  const nav = () => navigate(path);
  return <button type={"button"} onClick={nav}>{label}</button>;
}

export default OutletButton;