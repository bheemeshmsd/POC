import IconTab from "../Components/IconTab";
import listIcon from "../../assests/icons/list.png";
import '../../assests/styles.sass'

export default {
    title: "Componentss/IconTab",
    component: IconTab,
}

export const list = () => <IconTab imgUrl={listIcon}/>