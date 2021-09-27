// To make the naming consistant and resolve typo's
export enum NumberMutationTypes {
  INCREASE_NUMBER = "increaseNumber",
  DECREASE_NUMBER = "decreaseNumber",
  SET_NUMBER = "setNumber"
}

export enum NumberGetterTypes {
  IS_ZERO = "isCountZero"
}

// Defining the type of the Initial State
export type NumberState = {
  count: number;
};

// Creating the Initial State
const initalState: NumberState = {
  count: 0
};

// Making our module to put in the Store
export default {
  // The initial state
  state: initalState,
  // The Mutations
  // Will contain the MutationTypes.
  // These will get the state and optionally some arguments
  mutations: {
    [NumberMutationTypes.DECREASE_NUMBER](state: NumberState) {
      state.count -= 1;
    },
    [NumberMutationTypes.INCREASE_NUMBER](state: NumberState) {
      state.count += 1;
    },
    [NumberMutationTypes.SET_NUMBER](state: NumberState, newValue: number) {
      state.count = newValue;
    }
  },
  actions: {},
  // Getters
  // Functions that can be send to the store to get a certain value/coputed value
  getters: {
    [NumberGetterTypes.IS_ZERO](state: NumberState) {
      return state.count === 0;
    }
  }
};
