const sortable = (pre, cur) => {
  return pre.point - cur.point
}

export const parseLyric = lyric => {
  const regx = /\[(\d{2}):(\d{2})\.(\d{0,4})\]/
  const lryicsParsed = lyric.trim().split('\n').map(item => {
    const result = regx.exec(item)
    const [, mm, ss, ms] = result
    return {
      time: mm * 60 * 1000 + ss * 1000 + ms * 1,
      lyric: item.replace(regx, '').trim()
    }
  })
  return lryicsParsed.sort(sortable)
}
