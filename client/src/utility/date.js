const settingDate = () => {
  let date = new Date()
  return date.toLocaleDateString() + ", " + date.getHours() + ":" + date.getMinutes();
}

export default settingDate