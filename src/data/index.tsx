import { registerStore } from "@wordpress/data";

import {
  STORE_KEY as SETTINGS_STORE_KEY,
  STORE_CONFIG as settingsConfig
} from "./settings";

registerStore(SETTINGS_STORE_KEY, settingsConfig);

export { SETTINGS_STORE_KEY };
