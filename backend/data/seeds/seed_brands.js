exports.seed = function (knex) {
  return knex('brands').del()
    .then(function () {
      return knex('brands').insert([
        { brand_id: 'brand-uuid-1', brand_name: 'Green Horizon' },
        { brand_id: 'brand-uuid-2', brand_name: 'Lush Grove' },
        { brand_id: 'brand-uuid-3', brand_name: 'Skyline Botanicals' }
      ]);
    });
};
