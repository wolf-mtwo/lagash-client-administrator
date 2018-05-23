import LagashHelpers from './helpers/module';

// thesis
import { Thesis } from './thesis/thesis.service';
import { ThesisOption } from './thesis/option.service';
import { ThesisEjemplares } from './thesis/ejemplares.service';
import { ThesisCatalog } from './thesis/catalog.service';
// books
import { Books } from './books/books.service';
import { BookOption } from './books/option.service';
import { BooksEjemplares } from './books/ejemplares.service';
import { BooksCatalog } from './books/catalog.service';

// magazines
import { Magazines } from './magazines/magazines.service';
import { MagazineOption } from './magazines/option.service';
import { MagazinesEjemplares } from './magazines/ejemplares.service';
import { MagazinesCatalog } from './magazines/catalog.service';

import { Author } from './author.service';
import { Editorial } from './editorial.service';
import { AuthorMap } from './author.map.service';
import { EditorialMap } from './editorial.map.service';

import { Ejemplares } from './history/ejemplares.service';

angular.module('wolf.lagash.services', [
  'wolf.lagash.helpers'
])
// thesis
.service('Thesis', Thesis)
.service('ThesisOption', ThesisOption)
.service('ThesisEjemplares', ThesisEjemplares)
.service('ThesisCatalog', ThesisCatalog)
// books
.service('Books', Books)
.service('BookOption', BookOption)
.service('BooksEjemplares', BooksEjemplares)
.service('BooksCatalog', BooksCatalog)
// magazines
.service('Magazines', Magazines)
.service('MagazineOption', MagazineOption)
.service('MagazinesEjemplares', MagazinesEjemplares)
.service('MagazinesCatalog', MagazinesCatalog)

.service('Author', Author)
.service('Editorial', Editorial)
.service('AuthorMap', AuthorMap)
.service('Ejemplares', Ejemplares)
.service('EditorialMap', EditorialMap)
.run(($log) => {
  $log.debug('run lagash end');
});
