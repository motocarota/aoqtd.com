let windowRef = null;
let previousUrl = null;

const openPopup = ({ url, cb, name }) => {
  // remove any existing event listeners
  window.removeEventListener('message', cb);

  const windowFeatures = 'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

  if (windowRef === null || windowRef.closed) {
    /* if the pointer to the window object in memory does not exist
      or if such pointer exists but the window was closed */
    windowRef = window.open(url, name, windowFeatures);
  } else if (previousUrl !== url) {
    /* if the resource to load is different,
      then we load it in the already opened secondary window and then
      we bring such window back on top/in front of its parent window. */
    windowRef = window.open(url, name, windowFeatures);
    windowRef.focus();
  } else {
    /* else the window reference must exist and the window
      is not closed; therefore, we can bring it back on top of any other
      window with the focus() method. There would be no need to re-create
      the window or to reload the referenced resource. */
    windowRef.focus();
  }

  /* HACK to detect popup close on a different domain
  Even Facebook is using this "hack" in their Javascript SDK.
  https://stackoverflow.com/questions/9388380/capture-the-close-event-of-popup-window-in-javascript */
  const timer = setInterval(() => {
    if (windowRef.closed) {
      clearInterval(timer);
      cb('lma-login-redirect');
    }
  }, 1000);

  // add the listener for receiving a message from the popup
  window.addEventListener('message', cb, false);
  // assign the previous URL
  previousUrl = url;
};

export default openPopup;
