import ButtonIcon from "../components/button-icon";
import listIcon from "../../assests/icons/list.png";
import '../../assests/styles.scss';

export default {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  args: {
    iconUrl: listIcon,
    height: "50px",
    width: "50px",
    padding:"5px",
  },
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});

