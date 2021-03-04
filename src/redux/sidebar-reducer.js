const SIDE_BAR='SIDE-BAR'
let initialState={

}
const sidebarReducer=(state=initialState,action)=>{
    switch (action.type){
        case SIDE_BAR:
            return state;
        default:
            return state;
    }
    return state;
};
export default sidebarReducer;