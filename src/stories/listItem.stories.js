import ListItem from "../components/list-item";
import { Provider } from "react-redux";
import store from "../redux/store";
import '../../assests/styles.scss';

export default {
  title: "Components/ListItem",
  component: ListItem,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  args: {
    content: {
      value: "Test",
      checked: true,
    },
    index: 1,
    toDoIndex: 1,
  },
};

const Template = (args) => <ListItem {...args}/>

export const Default = Template.bind({});