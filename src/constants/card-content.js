import happy_wooman from "../assets/card-images/happy_woman_1400.png";
import hands_shaking from "../assets/card-images/handshaking_1400.png?raw=true";
import passports from "../assets/card-images/documents_1400.png?raw=true";
import happy_woman_sm from "../assets/card-images/happy_woman_small.png?raw=true";
import hand_shaking_sm from "../assets/card-images/handshaking_small.png?raw=true";
import passports_sm from "../assets/card-images/documents_small.png?raw=true";
import { localization } from "./localization";

export const card = [
  {
    id: 1,
    img_sm: happy_woman_sm,
    IMG: happy_wooman,
    title: localization.title.status,
    desc: localization.description.status,
  },
  {
    id: 2,
    img_sm: hand_shaking_sm,
    IMG: hands_shaking,
    title: localization.title.job,
    desc: localization.description.job,
  },
  {
    id: 3,
    img_sm: passports_sm,
    IMG: passports,
    title: localization.title.addons,
    desc: localization.description.addons,
  },
];
