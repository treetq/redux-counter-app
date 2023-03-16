import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";

const Theme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, [theme]);

  return (
    <button
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      Switch to {theme === "light" ? "dark" : "lignt"} Mode
    </button>
  );
};

export default Theme;
