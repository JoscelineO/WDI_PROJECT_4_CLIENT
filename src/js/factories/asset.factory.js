angular
  .module('moodboardApp')
  .factory('Asset', assetFactory);

assetFactory.$inject = ['API', '$resource'];
function assetFactory(API, $resource) {
  return $resource(`${API}/assets/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
