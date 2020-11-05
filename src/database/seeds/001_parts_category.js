exports.seed = knex => {
  return knex('parts_category').del()
    .then(function () {
      return knex('parts_category').insert([
        { title: 'Injeção Eletrônica' },
        { title: 'Freio' },
        { title: 'Motor' },
        { title: 'Suspensão' },
        { title: 'Acessórios' }
      ]);
    });
};