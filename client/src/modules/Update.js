const update = (state, action, propertyFieldCopy, propertyFieldOrigin) => {
  return {
      ...state,
      [propertyFieldCopy]: [propertyFieldOrigin] = action.payload
  }
}

export default update