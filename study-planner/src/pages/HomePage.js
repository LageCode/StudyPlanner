import {Navigate, Outlet} from "react-router";
import SignOut from "../components/Auth/SignOut";
import {AuthPage} from "./AuthPage";
import OutletButton from "../components/Tools/OutletButton";

export const HomePage = ({user}) => {
  if (!user) return <AuthPage />;
  return (
    <>
      <div>
        <h1>StudyPlanner - {user.email} Home Page</h1>
      </div>
      <div>
        <OutletButton label={"Recorder"} path={"/record"} />
        <OutletButton label={"Planner"} path={"/plan"} />
        <OutletButton label={"History"} path={"/history"} />
      </div>
      <div>
        <Outlet />
      </div>
      <footer>
        <SignOut user={user}/>
      </footer>
    </>
  );
}