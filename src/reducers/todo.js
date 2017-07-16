const todo = (state = [], action)=>{
  switch (action.type){
    case 'ADD-TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    default:
      return state;
  }
}

export default todo;
