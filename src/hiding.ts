export const textToBase64 = (text: string): [boolean, string] => {
  let result = "",
    success = false;
  try {
    result = window.btoa(unescape(encodeURIComponent(text)));
    success = true;
  } finally {
    return [success, result];
  }
};

export const base64ToText = (text: string): [boolean, string] => {
  let result = "",
    success = false;
  try {
    result = decodeURIComponent(escape(window.atob(text)));
    success = true;
  } finally {
    return [success, result];
  }
};
