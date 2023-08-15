import IconTab from "../components/IconTab";
import listIcon from "../../assests/icons/list.png";
import '../../assests/styles.scss'

export default {
    title: "Componentss/IconTab",
    component: IconTab,
}

export const list = () => <IconTab imgUrl={listIcon}/>