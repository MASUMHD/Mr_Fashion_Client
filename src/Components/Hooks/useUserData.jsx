/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const useUserData = () => {
    const { user, loading } = useAuth();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            const res = await axios.get(`https://mr-fashion-server.vercel.app/user/${user.email}`, {
                // withCredentials: true
            });
            setUserData(res.data);
        };

        if (user?.email && !loading) {
            fetchUserData();
        }
    }, [user, loading]);

    return userData;
};

export default useUserData;
