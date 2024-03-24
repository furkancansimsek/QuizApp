import { useDispatch, useSelector } from "react-redux";
import { _removeAnswers, _removeUser, _setAnswers, _setUser } from "./index";
import { useCallback } from "react";

export default function useApp() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.app.user);
    const answers = useSelector((state) => state.app.answers);

    const setUser = useCallback((data) => dispatch(_setUser(data)), []);
    const removeUser = () => dispatch(_removeUser());
    const setAnswers = useCallback((data) => dispatch(_setAnswers(data)), []);
    const removeAnswers = () => dispatch(_removeAnswers());

    return {
        user,
        setUser,
        removeUser,
        answers,
        setAnswers,
        removeAnswers
    };
};