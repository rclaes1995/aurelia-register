import {Container} from 'aurelia-dependency-injection';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-firebase', (config) => {
      config.setFirebaseUrl('https://wolf-espressobar.firebaseio.com/');
    });

  aurelia.start().then(a => a.setRoot('app', document.body));
}
