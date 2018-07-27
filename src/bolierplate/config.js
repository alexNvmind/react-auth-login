export const getFullApiUrl = (api, GROUP_ID) => {
    if (typeof api !== 'string' || typeof GROUP_ID !== 'string') {
        throw new Error(
            "'api' and 'GROUP_ID' arguments passed should be a string!",
        );
    }

    return `${api}/${GROUP_ID}`;
};

const GROUP_ID = '6vf77z4hd5';
const TOKEN = 'rtASDLastuev77';

export const SOCKET_URL = 'https://lab.lectrum.io';
const ROOT_URL = 'https://lab.lectrum.io/react/api';
const MAIN_URL = getFullApiUrl(ROOT_URL, GROUP_ID);