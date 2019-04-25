import React from "react"
import PropTypes from "prop-types"

import styles from "./logo.module.styl"

const Logo = ({ title, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 123">
    <title>{title}</title>
    <path
      className={styles.colorTransition}
      fill={color}
      d="M94.51 117.14c-.6 0-1.07-.14-1.41-.41-.35-.27-.52-.64-.52-1.1 0-.48.17-.82.5-1.03.33-.21.85-.32 1.56-.32h2.75v.98c-.07.53-.37.97-.92 1.33-.55.37-1.2.55-1.96.55m5.49 1.91l-.02-7.12c-.01-1.22-.41-2.17-1.19-2.85-.78-.68-1.88-1.02-3.29-1.02-.94 0-1.75.11-2.45.32-.7.21-1.48.55-2.33 1.03l.96 1.83c1.13-.68 2.2-1.02 3.24-1.02.8 0 1.41.18 1.83.53.42.35.63.85.63 1.49v.29H94.2c-1.32.01-2.33.31-3.05.88-.72.58-1.08 1.37-1.08 2.39 0 .64.16 1.21.47 1.73.31.52.76.92 1.33 1.21.58.29 1.24.44 2 .44.77 0 1.46-.12 2.06-.37.6-.24 1.09-.6 1.47-1.08v1.32h2.6zm-10.41 0l-4.27-6.67 4.03-4.19H86.3l-4.48 4.52v-8.75h-2.64v15.1h2.64v-3.01l1.67-1.75 2.95 4.76h3.15zm-14.42-15.56c-.43 0-.79.15-1.08.45-.29.3-.43.68-.43 1.14 0 .45.14.82.43 1.12.29.3.64.45 1.08.45.43 0 .79-.15 1.08-.45.29-.3.43-.67.43-1.12 0-.46-.14-.84-.43-1.14-.29-.3-.65-.45-1.08-.45m-1.3 15.56h2.65v-10.89h-2.65v10.89zm-5.54-8.79v-2.1h-2.65v10.89h2.65v-5.25c0-1 .34-1.8 1.01-2.39.67-.59 1.57-.85 2.7-.78v-2.56c-.84.01-1.58.21-2.21.58-.63.37-1.13.91-1.5 1.61m-10.47.08c.9 0 1.63.3 2.2.92.57.61.85 1.4.85 2.38s-.29 1.77-.85 2.38c-.57.61-1.3.91-2.2.91-.92 0-1.67-.3-2.24-.91-.57-.61-.85-1.4-.85-2.38s.28-1.77.85-2.38c.57-.61 1.32-.92 2.24-.92m0-2.25c-1.14 0-2.14.23-3.01.69a4.97 4.97 0 0 0-2.02 1.94c-.48.83-.72 1.79-.72 2.88 0 1.1.24 2.07.72 2.91.48.84 1.16 1.49 2.02 1.95.87.46 1.87.69 3.01.69 1.13 0 2.12-.23 2.98-.69.86-.46 1.53-1.11 2.01-1.95.48-.84.72-1.81.72-2.91 0-1.09-.24-2.05-.72-2.88a5.006 5.006 0 0 0-2.01-1.94c-.86-.46-1.85-.69-2.98-.69m-11.67-.02c-1.87.03-3.18.75-3.93 2.18v-6.29h-2.64v15.1h2.64v-5.35c0-.91.26-1.65.77-2.24.52-.58 1.21-.88 2.1-.9.75 0 1.34.22 1.77.66.43.44.65 1.04.65 1.8v6.02h2.67v-6.8c0-1.29-.36-2.31-1.08-3.06-.72-.75-1.7-1.12-2.95-1.12m-14.48 8.81c-.91 0-1.65-.31-2.22-.92-.57-.61-.85-1.4-.85-2.38 0-.96.28-1.75.85-2.36s1.31-.92 2.22-.92c.9 0 1.63.31 2.2.92.57.61.85 1.4.85 2.36s-.29 1.75-.85 2.37c-.58.62-1.31.93-2.2.93m.59-8.79c-.81 0-1.53.16-2.15.48-.62.32-1.12.78-1.52 1.39v-1.79h-2.65V123h2.65v-5.72c.41.61.92 1.08 1.55 1.39.62.32 1.34.48 2.16.48 1.02 0 1.91-.23 2.69-.69.77-.46 1.37-1.1 1.79-1.93s.63-1.78.63-2.87c0-1.1-.21-2.07-.64-2.91-.43-.84-1.03-1.5-1.81-1.96-.79-.47-1.69-.7-2.7-.7m-11.94.08v5.37c0 .9-.24 1.63-.73 2.22-.49.58-1.15.88-1.99.9-.73 0-1.31-.22-1.72-.65-.41-.43-.62-1.03-.62-1.79v-6.04h-2.67V115c0 1.29.35 2.31 1.06 3.05.71.75 1.67 1.12 2.89 1.12 1.79 0 3.05-.71 3.78-2.12v2.01h2.67v-10.89h-2.67zm-17.72 4.6c.12-.81.44-1.45.97-1.92.52-.47 1.17-.7 1.94-.7.83 0 1.49.24 1.99.71.5.48.77 1.11.79 1.91H2.64zm2.89-4.68c-1.07 0-2.03.23-2.87.7-.84.47-1.5 1.12-1.96 1.96-.47.84-.7 1.8-.7 2.89s.23 2.05.69 2.88a4.88 4.88 0 0 0 1.96 1.94c.85.46 1.83.69 2.94.69.95 0 1.81-.16 2.59-.49.78-.33 1.44-.79 1.98-1.38l-1.42-1.48c-.38.39-.82.7-1.33.91-.51.21-1.04.32-1.6.32-.8 0-1.48-.22-2.02-.66-.55-.44-.91-1.05-1.09-1.82h8.04c.01-.18.02-.44.02-.79 0-1.79-.44-3.18-1.31-4.17-.87-1.01-2.18-1.5-3.92-1.5M16.67 66.67H100v16.67H16.67zM16.67 0H100v16.67H16.67zM0 33.33h83.33V50H0z"
    />
  </svg>
)

Logo.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
}

Logo.defaultProps = {
  color: "#000",
}

export default Logo
