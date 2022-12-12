const data = {
  a: 1,
  b: {
    c: {
      d: {
        e: 2,
      },
    },
  },
}

function copy(obj) {
  if (typeof obj !== 'object') return obj
  return { ...obj }
}

console.time('shallow_copy')

for (let i = 0; i < 1000000; i++) {
  const t = copy(data)
}

console.timeEnd('shallow_copy')

function deepCopy(obj) {
  if (typeof obj !== 'object') return obj
  const newObj = {}
  for (let key in obj) {
    newObj[key] = deepCopy(obj[key])
  }
  return newObj
}

console.time('deep_copy')

for (let i = 0; i < 1000000; i++) {
  const t = deepCopy(data)
}

console.timeEnd('deep_copy')
