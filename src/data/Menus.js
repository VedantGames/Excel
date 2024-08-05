import Alignment from "../components/Menus/Home/Alignment";
import Clipbord from "../components/Menus/Home/Clipbord";
import Font from "../components/Menus/Home/Font";
import Number from "../components/Menus/Home/Number";

const m = ['File', 'Home', 'Insert', 'Draw', 'PageLayout', 'Formulas', 'Data', 'Review', 'View', 'Help'];

const menus = [
  {
    label: 'File',
  },
  {
    label: 'Home',
    blocks: [
      {
        label: 'Clipboard',
        instance: Clipbord
      },
      {
        label: 'Font',
        instance: Font
      },
      {
        label: 'Alignment',
        instance: Alignment
      },
      {
        label: 'Number',
        instance: Number
      },
      {
        label: 'Font',
        instance: Font
      },
      {
        label: 'Alignment',
        instance: Alignment
      },
      {
        label: 'Number',
        instance: Number
      },
    ]
  },
  {
    label: 'Insert',
    blocks: []
  },
  {
    label: 'Draw',
    blocks: []
  },
  {
    label: 'PageLayout',
    blocks: []
  },
  {
    label: 'Formulas',
    blocks: []
  },
  {
    label: 'Data',
    blocks: []
  },
  {
    label: 'Review',
    blocks: []
  },
  {
    label: 'View',
    blocks: []
  },
  {
    label: 'Help',
    blocks: []
  },
]

export default menus;
