import { render } from "react-dom";
import "./index.css";
import "./index.less";
import "./index.scss";
import { AppRouter } from "@/router";

function bootstrap() {
  render(<AppRouter />, document.getElementById("root"));
}

bootstrap();
