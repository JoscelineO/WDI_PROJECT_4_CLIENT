angular
  .module('moodboardApp')
  .factory('Moodboard', moodboardFactory);

moodboardFactory.$inject = ['API', '$resource'];
function moodboardFactory(API, $resource) {
  return $resource(`${API}/moodboards/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
