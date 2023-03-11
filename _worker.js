export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="cdn.jsdelivr.net";  // 需要反代的域名
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // 否则，提供静态资产。
      return env.ASSETS.fetch(request);
    }
  };
