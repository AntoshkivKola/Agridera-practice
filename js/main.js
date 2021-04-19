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
    cart: [],
    contactFields: [],
    btnVisible: false,
    isSubmitted: false
  },
  mounted: function () {
    this.getProduct(), this.checkInCart(), this.getCart()
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
      console.log(cart)
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
    },
    getCart: function () {
      const productsId = [...window.localStorage.getItem('cart').split(',')]
      productsId.forEach(productId => {
        this.cart.push(...this.products.filter(p => p.id === Number(productId)))
      })
      if (this.cart?.length) {
        this.cart.sort((a, b) => a.id - b.id)
      }
    },
    removeFromCart: function (id) {
      const cart = [...window.localStorage.getItem('cart').split(',')]

      this.cart = [...this.cart.filter(cartItem => cartItem.id !== id)]

      cart.splice(
        cart.findIndex(cartItem => cartItem === String(id)),
        1
      )

      window.localStorage.setItem('cart', cart.join())

    }, 
    makeOrder: function () {
      this.cart = []
      window.localStorage.setItem('cart', '')
   

    },
    makeOrder: function () {
      this.cart = []
      window.localStorage.setItem('cart', '')
      this.isSubmitted = true;
    }
  }
})
