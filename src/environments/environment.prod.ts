export const environment = {

  production: true,

  levels: [
    // 1
    {
      id: 1,
      type: 'match',
      from: [{id: 1, image: 'img1.png'}],
      to: [{id: 1, image: 'img1.png'}]
    },

    // 2
    {
      id: 2,
      type: 'match',
      from: [
        {id: 1, image: 'img1.png'},
        {id: 2, image: 'img2.png'}
      ],
      to: [
        {id: 2, image: 'img2.png'},
        {id: 1, image: 'img1.png'}
      ]
    },

    // 3
    {
      id: 3,
      type: 'match',
      from: [
        {id: 1, image: 'img1.png'},
        {id: 2, image: 'img2.png'},
        {id: 3, image: 'img3.png'}
      ],
      to: [
        {id: 2, image: 'img2.png'},
        {id: 3, image: 'img3.png'},
        {id: 1, image: 'img1.png'}
      ]
    },

    // 4
    {
      id: 4,
      type: 'match',
      from: [
        {id: 1, image: 'img1.png'},
        {id: 2, image: 'img2.png'},
        {id: 3, image: 'img3.png'},
        {id: 4, image: 'img4.png'}
      ],
      to: [
        {id: 4, image: 'img4.png'},
        {id: 3, image: 'img3.png'},
        {id: 2, image: 'img2.png'},
        {id: 1, image: 'img1.png'}
      ]
    }
  ]
};
