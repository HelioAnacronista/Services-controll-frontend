import { createBrowserHistory } from "@remix-run/router";
//instaciando um obj do tipo broserhistory
//https://github.com/remix-run/react-router/issues/9422#issue-1400657355
export const history = createBrowserHistory({ v5Compat: true });
