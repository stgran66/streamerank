import { FaKickstarter, FaTwitch, FaYoutube, FaTiktok } from 'react-icons/fa';
import { GiPoolTriangle } from 'react-icons/gi';

export const platforms = ['twitch', 'youtube', 'tiktok', 'kick', 'rumble'];

export const platformIcons = {
  twitch: <FaTwitch size={24} color='#9146ff' />,
  youtube: <FaYoutube size={24} color='#FF0000' />,
  tiktok: <FaTiktok size={24} />,
  kick: <FaKickstarter size={24} color='#6b9c3b' />,
  rumble: <GiPoolTriangle size={24} color='#85c742' />,
};
