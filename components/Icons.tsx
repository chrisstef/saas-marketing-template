import {
    AiFillGithub,
    AiFillGoogleCircle,
    AiOutlineClose,
} from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import {
    BsChevronDown,
    BsChevronLeft,
    BsChevronRight,
    BsChevronUp,
    BsFire,
} from "react-icons/bs";
import {
    FaRegStar,
    FaRegLightbulb,
    FaCheck,
    FaCode,
    FaProjectDiagram,
} from "react-icons/fa";
import { LuSettings } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { IoAccessibility, IoGameControllerOutline } from "react-icons/io5";
import { FaXTwitter, FaLinkedin, FaPeopleGroup } from "react-icons/fa6";
import { LuRadar, LuBarChartHorizontalBig } from "react-icons/lu";

export type IconKeys = keyof typeof icons;

type IconsType = {
    [key in IconKeys]: React.ElementType;
};

const icons = {
    // Providers
    google: AiFillGoogleCircle,
    github: AiFillGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter,

    // Sections Icons
    dashboard: RxDashboard,
    settings: LuSettings,

    // Navigation
    back: BsChevronLeft,
    next: BsChevronRight,
    up: BsChevronUp,
    down: BsChevronDown,
    close: AiOutlineClose,

    // Common
    calendar: BiCalendar,
    fire: BsFire,
    star: FaRegStar,
    bulb: FaRegLightbulb,
    check: FaCheck,
    radar: LuRadar,
    accessibility: IoAccessibility,
    people: FaPeopleGroup,
    scale: LuBarChartHorizontalBig,
    gamification: IoGameControllerOutline,
    code: FaCode,
    project: FaProjectDiagram,
};

export const Icons: IconsType = icons;
