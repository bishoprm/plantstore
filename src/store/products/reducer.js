const initialState = [
  {
    id: 1,
    description: "",
    price: "",
    img: "",
    tags: [],
    popularity: "",
    name: "",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
