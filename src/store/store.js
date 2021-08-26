import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Cotton Turtle Neck',
        image: '@/assets/hoodie.png',
        price: 340
      },

      {
        id: 2,
        name: 'Cotton Turtle Neck',
        image: '@/assets/grey_turtleneck.png',
        price: 500
      },

      {
        id: 3,
        name: 'Cotton Turtle Neck',
        image: '@/assets/grey_turtleneck.png',
        price: 600
      },

      {
        id: 4,
        name: 'Cotton Turtle Neck',
        image: '@/assets/grey_turtleneck.png',
        price: 700
      }
    ],

    StoreCart: []
  },

  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart
  },

  mutations: {
    addItem (state, id) {
      state.StoreCart.push(id)
    },

    removeItem (state, index) {
      state.StoreCart.splice(index, 1)
    }
  },

  actions: {
    addItem (context, id) {
      context.commit('addItem', id)
    },

    removeItem (context, index) {
      context.commit('removeItem', index)
    }
  },
  modules: {
  }
})
