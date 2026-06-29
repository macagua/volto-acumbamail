/**
 * Settings.
 * @module settings
 */

import type { ConfigType } from '@plone/registry';
import envelopeAtSVG from 'volto-acumbamail/icons/envelope-at.svg';

export default function install(config: ConfigType) {
  // Add the icon for the Acumbamail settings control panel
  config.settings.controlPanelsIcons = {
    ...config.settings.controlPanelsIcons,
    'acumbamail-settings': envelopeAtSVG,
  };
  return config;
}
