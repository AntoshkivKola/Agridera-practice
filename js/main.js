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
    ],
    product: [],
    btnVisible: false
  },
  mounted: function () {
    this.getProduct(), this.checkInCart()
  },
  methods: {
    addItem: function (id) {
      window.localStorage.setItem('prod', id)
    },
    getProduct: function () {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '')
        if (this.products?.length) {
          this.product = this.products.filter(p => p.id === Number(id))[0]
        }
      }
    },
    addToCart: function (id) {
      const cart = []

      if (window.localStorage.getItem('cart')) {
        cart.push(...window.localStorage.getItem('cart').split(','))
      }
      if (!cart.find(i => i === String(id))) {
        cart.push(id)
        window.localStorage.setItem('cart', cart.join())
        this.btnVisible = true
      }
    },
    checkInCart: function () {
      if (
        window.localStorage
          .getItem('cart')
          .split(',')
          .find(i => i === String(this.product.id))
      ) {
        this.btnVisible = true
      }
    }
  }
})
