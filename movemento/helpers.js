const findNames = (listOfIds = [], data) => {
    const ids = listOfIds.map((id) => Number(id))
    const names = []
    for (const item of data) {
      if (ids.includes(Number(item.id))) {
        names.push(item.name)
      }
    }
    return names
  }

export { findNames };