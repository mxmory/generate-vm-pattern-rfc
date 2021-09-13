import connect from "react-redux";
import { createStructuredSelector } from "reselect";
import ExampleOne from "./ExampleOne";

const mapStateToProps = createStructuredSelector({
  // your selectors here
});

const dispatchToProps = {
  // your actions here
};

export default connect(mapStateToProps, dispatchToProps)(ExampleOne);
