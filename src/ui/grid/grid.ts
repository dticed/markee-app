import styled from 'styled-components/macro'

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "aside content";
  grid-template-rows: 100vh;
  grid-template-columns: 300px auto;
  @media (max-width: 1000px) {
    grid-template-columns: 200px auto;
  }
`
