export class App {
  heading = "Wolf Register"
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['','table-overview'], name: 'table-overview', moduleId: './table-overview', nav: true, title:'Table Overview' }
    ]);

    this.router = router;
  }
}
