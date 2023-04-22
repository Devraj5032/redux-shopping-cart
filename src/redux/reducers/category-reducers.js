let category = 'electronics'

export const categoryReducer = (state = category , action) => {
    if (action.type === 'CHANGE_CATEGORY') {
        category = action.payload
        return category
        // return category = action.payload
    } else {
        return state;
    }
}