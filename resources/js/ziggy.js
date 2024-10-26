const Ziggy = {"url":"http:\/\/test-flower-advisor.edan","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"]},"password.email":{"uri":"password\/email","methods":["POST"]},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.update":{"uri":"password\/reset","methods":["POST"]},"home":{"uri":"{vue_capture?}","methods":["GET","HEAD"],"wheres":{"vue_capture":"[\\\/\\w\\.-]*"},"parameters":["vue_capture"]},"setLocale":{"uri":"set-locale","methods":["POST"]},"movie.search":{"uri":"movie\/search","methods":["GET","HEAD"]},"movie.show":{"uri":"movie\/{id}\/show","methods":["GET","HEAD"],"parameters":["id"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
