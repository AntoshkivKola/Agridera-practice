const app = new Vue({
  el: '#article',
  data: {
    products: [
      {
        id: 1,
        title: 'Super potato 1',
        short_text: 'short_text for Super potato',
        image: 'potato1.jpg',
        desc: 'Full description'
      },
      {
        id: 2,
        title: 'Super potato 2',
        short_text: 'short_text for Super potato',
        image: 'potato2.jpg',
        desc: 'Full description'
      },
      {
        id: 3,
        title: 'Super potato 3',
        short_text: 'short_text for Super potato',
        image: 'potato3.jpeg',
        desc: 'Full description'
      },
      {
        id: 4,
        title: 'Super potato 4',
        short_text: 'short_text for Super potato',
        image: 'potato4.jpeg',
        desc: 'Full description'
      },
      {
        id: 5,
        title: 'Super potato 5',
        short_text: 'short_text for Super potato',
        image: 'potato5.jpg',
        desc: 'Full description'
      }
    ]
  },
  mounted: function(){
    console.log(window.localStorage.getItem('prod'));
  },
  methods: {
    addItem: function (id) {
      window.localStorage.setItem('prod', id)
    }
  }
})
