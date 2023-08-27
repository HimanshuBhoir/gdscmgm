import { GiProcessor } from '@react-icons/all-files/gi/GiProcessor';
import { VscCode } from '@react-icons/all-files/vsc/VscCode';
import { VscDeviceMobile } from '@react-icons/all-files/vsc/VscDeviceMobile';

export const JamList = [
  {
    icon: <VscCode />,
    description: 'Web Development',
    scrollTarget: '#fixed-element-web',
  },
  {
    icon: <VscDeviceMobile />,
    description: 'App Development',
    scrollTarget: '#fixed-element-server',
  },
  {
    icon: <GiProcessor />,
    description: 'Artificial Intelligence / Machine Learning',
    scrollTarget: '#fixed-element-ML',
  },
];
