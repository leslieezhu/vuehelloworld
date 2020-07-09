const book = {
  state: {
    number: 1
  },
  mutations: {
    SET_NUMBER: (state, number) => {
      state.number = number
    }
  },
  actions: {
    setNumber: ({    //
      commit,
      state
    }, number) => {
      // console.log(state.number, number)
      return commit('SET_NUMBER', number)
    }
  }
}

export default book