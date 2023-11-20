"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
//return 값이 안정해지면 void로 정한다는거 기억하시나요?
//매개변수 리턴문이 없으니 void 그 값도 리턴이 없으니 void
//다른 js에서 쓰려면 모듈화를 해야 import를 할 수 있고 모듈화를 하려면 export를 앞에 붙여야한다.
const init = (callback) => {
    console.log("default initialization finished");
    callback();
    console.log("all initialization finished");
};
exports.init = init;
//# sourceMappingURL=init.js.map