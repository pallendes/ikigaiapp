export const convertToCsv = (items, separator = ',') => {
  const replacer = (key, value) => value === null ? '' : value
  const header = Object.keys(items[0])
  let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(separator))
  csv.unshift(header.join(separator))
  csv = csv.join('\r\n')

  return csv
}
