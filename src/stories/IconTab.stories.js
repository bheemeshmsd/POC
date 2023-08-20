import IconTab from "../components/icon-tab";
import listIcon from "../../assests/icons/list.png";
import '../../assests/styles.scss';
import { action } from '@storybook/addon-actions';


export default {
  title: "Components/IconTab",
  component: IconTab,
  args: {
    imgUrl: listIcon,
    handleTab: action('clicked'),
  },
};

const Template = (args) => <IconTab {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgUrl: listIcon,
  handleTab: action('clicked')
};
