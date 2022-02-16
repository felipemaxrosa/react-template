import IMAGE from './assets/react-icon.png';
import SVG from "./assets/bookmark.svg";
import "./styles.scss";

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={IMAGE} alt="React Logo" />
      <img src={SVG} alt="React Logo" />
    </>
  )
}