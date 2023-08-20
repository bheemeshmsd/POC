import TitleContainer from "../components/title-container/titleContainer";
import { Provider } from "react-redux";
import store from "../redux/store";
import '../../assests/styles.scss';

export default {
  title: "Components/TitleContainer",
  component: TitleContainer,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

const Template = () => <TitleContainer />;

export const Default = Template.bind({});
