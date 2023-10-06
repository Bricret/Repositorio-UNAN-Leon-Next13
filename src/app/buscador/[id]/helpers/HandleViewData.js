'use client'

import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../firebase";

export const HandleViewData = (val = '') => {

    const [tesis, setTesis] = useState([]);

    //Extraer los datos de la base de datos

    const showData = async () => {
      console.log(val);
      const q = query(collection(db, "tesis"), where("titulo", ">=", val));
      const querySnapshot = await getDocs(q);
      const tesisData = [];
      querySnapshot.forEach((doc) => {
          tesisData.push({ ...doc.data(), id: doc.id });
      });
      setTesis(tesisData);
  }

    useEffect(() => {
        showData();
    }, []);

    return {
        tesis,
    }
}


