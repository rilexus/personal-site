/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import SwitchTheme from "./src/providers/swith-theme/switch-theme"

// You can delete this file if you're not using it
export const wrapRootElement = ({element}) => {
  return (
    <SwitchTheme name={'default'}>
      {element}
    </SwitchTheme>
  )
}
