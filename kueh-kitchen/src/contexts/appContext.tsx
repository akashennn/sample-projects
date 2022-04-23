import { notification } from "antd";
import Axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { TMenu } from "../types/api";

type TProps = {
  children: JSX.Element;
};

type TContext = {
  menuData: TMenu | null;
};

const initState = {
  menuData: null,
};

export const AppContext = createContext<TContext>(initState);

export const AppContextProvider = ({ children }: TProps): JSX.Element => {
  // menu data
  const [menuData, setMenuData] = useState<TMenu | null>(null);

  // get initial data
  useEffect(() => {
    getMenuData();
  }, []);

  // API call to get menu data
  const getMenuData = async () => {
    try {
      const { data } = await Axios.get(
        "https://atlas-fe-menu.atlas-kitchen.workers.dev/menu"
      );
      setMenuData(data);
    } catch (error) {
      notification.error({
        message: "Menu Data Not Available!",
        description: "Please refresh the page in few minutes",
        placement: "bottomLeft",
      });
    }
  };

  // export states and functions
  const context = {
    menuData,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
