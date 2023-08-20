import ListComponent from "../components/list-component";
import { Provider } from "react-redux";
import store from "../redux/store";
import '../../assests/styles.scss';

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
    listItemArray: ["Test1","Test2"],
    ind: 0,
    title: "Test Title",
  },
};

const Template = (args) => <ListComponent {...args} />;

export const Default = Template.bind({});
