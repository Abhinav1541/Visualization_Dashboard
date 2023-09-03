import {
  FaTh,
  FaPercent,
  FaRegCalendarAlt,
  FaBusinessTime,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineTopic } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";

export const SidebarData = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaTh />,
  },
  {
    path: "/filters",
    name: "Filters",
    icon: <FiSliders />,
  },
  {
    path: "/intensity",
    name: "Intensity",
    icon: <AiOutlineDashboard />,
  },
  {
    path: "/likelihood",
    name: "Likelihood",
    icon: <FaPercent />,
  },
  {
    path: "/relevance",
    name: "Relevance",
    icon: <FaBusinessTime />,
  },
  {
    path: "/year",
    name: "Year",
    icon: <FaRegCalendarAlt />,
  },
  {
    path: "/country",
    name: "Country",
    icon: <FaMapMarkedAlt />,
  },
  {
    path: "/topic",
    name: "Topic",
    icon: <MdOutlineTopic />,
  },
  {
    path: "/region",
    name: "Region",
    icon: <TbWorldSearch />,
  },
];
