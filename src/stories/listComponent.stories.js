import ListComponent from "../components/list-component";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../../assests/styles.scss";

export default {
  title: "Components/ListComponent",
  component: ListComponent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  args: {
    listItemArray: [
      { value: "Test1", checkbox: false },
      { value: "Test2", checkbox: false },
    ],
    ind: 0,
    title: "Test Title",
  },
};

const Template = (args) => <ListComponent {...args} />;

export const Default = Template.bind({});
