// import db from "../../firebase/config";
//! db заменить на app
import { app } from "../../firebase/config";

export const authSignUpUser = ({ email, password, nickname }) => async (
    dispatch,
    getState
) => {
    console.log("email, password, nickname", email, password, nickname);
    try {
        // const user = await db //! db заменить на app
        const user = await app
            .auth()
            .createUserWithEmailAndPassword(email, password);
        console.log("user", user);
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
    }
};

export const authSignInUser = () => async (dispatch, getState) => { };

export const authSignOutUser = () => async (dispatch, getState) => { };