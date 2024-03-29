import React from "react";
import { Provider } from "react-redux";
import { render } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Navigation from "../navigation";

const mockStore = configureMockStore([thunk]);

describe("Navigation", () => {
  it("should render with Query button being availible to press", () => {
    const store = mockStore({
      mediaReducer: { comments: [] },
    });
    const wrapper = render(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
    expect(wrapper);
  });
});
