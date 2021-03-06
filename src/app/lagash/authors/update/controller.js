export class LagashAuthorsUpdateController {

  constructor(
    $state,
    WError,
    Authors,
    UUID,
    Country,
    ImageService,
    author
  ) {
    'ngInject';
    this.author_id = $state.params.author_id;
    this.$state = $state;
    this.WError = WError;
    this.Authors = Authors;
    this.UUID = UUID;
    this.ImageService = ImageService;

    this.countries = Country.get();
    this.item = author;
  }

  openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }

  upload(file) {
    const self = this;
    this.ImageService.upload(file, (res) => {
      self.item.image = res.name;
    });
  }

  delete(item) {
    this.Authors.remove({
      _id: item._id
    }, item).$promise
    .then(() => {
      this.$state.go('lagash.authors.list.main', {}, { reload: true });
    })
    .catch((err) => {
      this.WError.request(err);
    });
  }

  update(item) {
    this.Authors.update({
      _id: item._id
    }, item)
    .$promise
    .then(() => {
      this.$state.go('lagash.authors.list.main', {}, { reload: true });
    })
    .catch((err) => {
      this.WError.request(err);
    });
  }
}
