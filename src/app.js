export class App {
  configureRouter(config, router) {
    config.title = 'Wolf Espressobar';
    config.map([
        { route: ['','table-overview'], name: 'table-overview', moduleId: './table-overview', nav: true, title:'Table Overview' },
        { route: ['open-order'], name: 'open-order', moduleId: './open-order', nav: true, title:'Open Order' }
    ]);

    this.router = router;
  }
}
