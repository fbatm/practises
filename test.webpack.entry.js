// const {show, log} = require('./test.webpack.entryCall.js');
// const img = require('./章.png');
require('./test.webpack.css');
// import './test.webpack.css';
// import img from './章.png';
import * as seal from './章.png';
console.warn(seal);
console.warn(require('./章.png'));
import('./章.png').then((res) => console.warn(res));
import x, { test } from './application/containers/index.jsx';
console.warn(x, test);
const requiredIndex = require('./application/containers/index.jsx');
console.warn('requiredIndex,', requiredIndex.default, requiredIndex.test);

// const entryCall = require('./test.webpack.entryCall.js');
import entryCall from './test.webpack.entryCall.js';
console.warn(entryCall.a, entryCall.b, entryCall);
import('./test.webpack.entryCall.js').then((res) => console.warn(res));
// import * as call2 from './test.webpack.entryCall2';
// call2.fun(call2.default.d1);
import { d1 } from './test.webpack.entryCall3';
console.info(d1);

setTimeout(
  () =>
    console.warn(
      x,
      test,
      entryCall.a,
      entryCall.b,
      requiredIndex.default,
      requiredIndex.test
    ),
  1000
);

function getComponent() {
  return import(/*webpackChunkName: 'lodash'*/ 'lodash')
    .then(({ default: _ }) => {
      const el = document.createElement('div');
      el.innerHTML = _.join(['hello', 'world'], ' ');
      const btn = document.createElement('button');
      btn.innerText = 'click me';
      btn.onclick = (e) => {
        console.log('clicked');
        import(
          /*webpackChunkName: 'entryCall'*/ './test.webpack.entryCall.js'
        ).then(({ default: { show, log } }) => {
          console.log('imported');
          log();
          show(require('./seals/tjcfp.png').default);
          show(require('./seals/czcfp.png').default);
          show(require('./seals/tjhuagaiF.png').default);
        });
      };
      el.appendChild(btn);

      return el;
    })
    .catch((e) => `${e.toString()}`);
}

getComponent().then((element) => {
  document.body.appendChild(element);
});

if (module.hot) {
  module.hot.accept('./test.webpack.entryCall.js', function () {
    console.warn('accepting hot update.', arguments);
    // log();
  });
}
