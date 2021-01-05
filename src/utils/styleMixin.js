export const backGroundMixin = (width, height, posX, poxY) => `
  vertical-align: middle;
  display: inline-block;
  width: ${width}px;
  height: ${height}px;
  background-position: ${posX}px ${poxY}px;
  cursor: pointer
`

export const backGroundHover = (width, height, posX, posY, hPosX, hPosY) => `
  ${backGroundMixin(width, height, posX, posY)};
  &:hover {
    ${backGroundMixin(width, height, hPosX, hPosY)};
  }
`
