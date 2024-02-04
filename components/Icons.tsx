import {
    AiFillGithub,
    AiFillGoogleCircle,
    AiOutlineClose,
    AiOutlineEllipsis,
    AiOutlinePlus,
    AiOutlineWarning,
    AiOutlineDollarCircle,
    AiOutlineBank,
    AiOutlineDashboard,
} from "react-icons/ai";
import { BiCalendar, BiHistory } from "react-icons/bi";
import {
    BsActivity,
    BsCheck2,
    BsChevronDown,
    BsChevronLeft,
    BsChevronRight,
    BsChevronUp,
    BsFire,
} from "react-icons/bs";
import { FaRegStar, FaSort, FaUserAlt } from "react-icons/fa";
import { ImSpinner8, ImStatsBars } from "react-icons/im";
import { LuSettings } from "react-icons/lu";
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md";
import { RxDashboard, RxMixerHorizontal } from "react-icons/rx";
import { IoCopy } from "react-icons/io5";

export type IconKeys = keyof typeof icons;

type IconsType = {
    [key in IconKeys]: React.ElementType;
};

const icons = {
    // Providers
    google: AiFillGoogleCircle,
    github: AiFillGithub,

    // Sections Icons
    dashboard: RxDashboard,
    settings: LuSettings,
    holdings: AiOutlineDashboard,

    // Navigation
    back: BsChevronLeft,
    next: BsChevronRight,
    up: BsChevronUp,
    down: BsChevronDown,
    close: AiOutlineClose,

    // Common
    trash: MdDeleteForever,
    spinner: ImSpinner8,
    userAlt: FaUserAlt,
    ellipsis: AiOutlineEllipsis,
    warning: AiOutlineWarning,
    add: AiOutlinePlus,
    history: BiHistory,
    signout: MdOutlineLogout,
    calendar: BiCalendar,
    sort: FaSort,
    fire: BsFire,
    statsBar: ImStatsBars,
    mixer: RxMixerHorizontal,
    check: BsCheck2,
    star: FaRegStar,
    copy: IoCopy,
    dollar: AiOutlineDollarCircle,
    bank: AiOutlineBank,
    activity: BsActivity,
};

export const Icons: IconsType = icons;
