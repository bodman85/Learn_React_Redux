import s from "./style.module.css";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";

export function AuthLayout({ children }) {
  const header = (
    <div className={s.header}>
      <LogoSVG className={s.logoTop} />
      <h2 className={s.logoTitle}>Notomatic</h2>
    </div>
  );
  const background = (
    <div>
      <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.backgroundTitle}>Notomatic</h1>
      </div>
      <p style={{ color: "white" }}>One place for the team notes</p>
    </div>
  );

  return (
    <div className={s.root}>
      {header}
      <div className={s.leftSection}>{children}</div>
      <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  );
}
