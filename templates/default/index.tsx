import connect from "react-redux";
import { createStructuredSelector } from "reselect";
import TemplateName from "./TemplateName";

const mapStateToProps = createStructuredSelector({
  // your selectors here
});

const dispatchToProps = {
  // your actions here
};

export default connect(mapStateToProps, dispatchToProps)(TemplateName);
