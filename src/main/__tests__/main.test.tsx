import * as React from "react";
import { Main } from "../component";
import renderer from "react-test-renderer";

it("component renders", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
});
