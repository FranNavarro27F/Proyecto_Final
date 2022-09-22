import { useAuth0 } from "@auth0/auth0-react";
import s from "./UserProfile.module.css";
import React, { useState } from "react";
import SideMenu from "../Landing/SideMenu/SideMenu";
import Logout from "../Login/Logout";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDevUsers, getUsersBd } from "../../Redux/Actions/DevUser";
import { getCountries } from "../../Redux/Actions/Countries";
import { GrEdit } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../DevUsersCreate/Img-file/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function DevProfile() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsersBd());
  }, [dispatch]);

  const allUsers = useSelector((state) => state.devUser.allUsers);
  const country = useSelector((state) => state.countries.allCountries);
  const email = user?.email;
  const [edit, setEdit] = useState(true);

  const userDb = allUsers?.filter((e) => e.email === email);

  const handleEdit = () => {
    setEdit(false);
  };

  const handleSubmitEdit = () => {
    setEdit(true);
  };

  const userAuth0Db = {
    name: `${userDb.length ? userDb?.map((e) => e.name) : user?.given_name} ${
      userDb.length ? userDb?.map((e) => e.lastName) : user?.family_name
    }`,
    image: `${userDb.length ? userDb.map((e) => e.picture) : user?.picture}`,
    email: `${userDb.length ? userDb?.map((e) => e.email) : user?.email}`,
    country: `${userDb.length && userDb.map((e) => e.paiseId)}`,
    id: `${userDb.length && userDb.map((e) => e.id)}`,
  };

  console.log(userAuth0Db?.id);
  const [input, setInput] = useState({
    name: `${userAuth0Db?.name}`,
    image: `${userAuth0Db?.image}`,
    email: `${userAuth0Db?.email}`,
    country: `${userAuth0Db?.country}`,
  });

  const handleRedirect = () => {
    if (userAuth0Db?.id !== 0) {
      return navigate(`/create`);
    } else {
      return navigate(`/work/details/${userAuth0Db?.id}`);
    }
  };

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const [loader, setLoader] = useState(false);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return isAuthenticated ? (
    <div className={s.body}>
      <SideMenu />
      <article className={s.modal}>
        <div className={s.container}>
          {
            <div>
              <img src={user.picture} alt={user.name} className={s.picture} />
            </div>
          }

          <h3>{userAuth0Db.name}</h3>
          <div className={s.email}>
            <h6>{userAuth0Db.email}</h6>
            <p
              className={
                user?.email_verified ? s.verificacionT : s.verificacionF
              }
            >
              {user?.email_verified ? "  ✔" : " ❌"}
            </p>
          </div>

          {/* {userDb && <p>Pais: {userAuth0Db?.country} </p>} */}
          <div className={s.buttons}>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className={s.buttonPrimary}
            >
              <span>Salir</span>
            </button>

            <button className={s.buttonSecondary} onClick={handleRedirect}>
              MI POSTULACION
            </button>
          </div>
        </div>
      </article>
    </div>
  ) : (
    loginWithRedirect()
  );
}

/*         <div>
            <input
              disabled={edit}
              name="name"
              // value={input.name}
              type="text"
              // readonly="true"
              onChange={(e) => handleChangeInput(e)}
              defaultValue={userAuth0Db?.name}
            />
            {edit ? (
              <button onClick={handleEdit}>
                <GrEdit />
              </button>
            ) : (
              <button onClick={handleSubmitEdit}>
                <FcCheckmark />
              </button>
            )}
            {/* <h2>{`${userDb ? userDb?.map((e) => e.name) : user?.given_name} ${
            userDb ? userDb?.map((e) => e.lastName) : user?.family_name
          }`}</h2> */
// }
// </div> */
