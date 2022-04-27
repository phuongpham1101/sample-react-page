import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const Dropdown = ({open, children}) => {
  const closed = !open;
  return(
    <SlideDown closed={closed}>
      {open && children}
    </SlideDown>
  );
}

export default Dropdown;