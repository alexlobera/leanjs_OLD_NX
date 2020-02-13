const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  StaticQuery: jest.fn(props => props.render(props.data)),
  useStaticQuery: jest.fn(),
}
