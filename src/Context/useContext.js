import { useState } from "react";

export function UserContext() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataList, setDataList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    dataList,
    setDataList,
    favorites,
    setFavorites,
  };
}
