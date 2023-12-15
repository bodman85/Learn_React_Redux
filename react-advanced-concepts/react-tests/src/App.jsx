import { Calculator } from "components/Calculator/Calculator";
import s from "./App.module.css";
import { RandomUser } from "components/RandomUser/RandomUser";


export function App() {
  return (
    <div className={s.root}>
      {/*<Calculator defaultA={2} defaultB={"17.1"} defaultOperator={"+"} />*/}
      <RandomUser />
    </div>
  );
}
