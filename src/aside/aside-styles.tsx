import styled, { css, keyframes } from 'styled-components/macro'
import SavedIcon from 'ui/icons/saved-icon.png'
import EditingIcon from 'ui/icons/editing-icon.png'
import SavingIcon from 'ui/icons/saving-icon.png'

export const MyAside = styled.aside`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  grid-area: aside;
  width: auto;
  height: 100%;
  background-color: ${theme.colors.black};
  align-items: center;
`}`

export const Logo = styled.img`
  width: 164px;
  height: 44.31px;
  padding: 40px 0px;
  margin-bottom: 30px;
  @media (max-width: 1000px) {
    width: 123px;
    height: 33px;
  }
`

export const LineFiles = styled.div`
  display: flex;
  flex-direction: row;
  width: 268px;
  margin-bottom: 10px;
  align-items: center;
  @media (max-width: 1000px) {
    width: 181px;
  }
`

export const Line1 = styled.div`${({ theme }) => css`
  width: 18.5px;
  height: 0px;
  /* Primary */
  border: 2px solid ${theme.colors.primary};
`}`

export const Line2 = styled.div`${({ theme }) => css`
  width: 178px;
  height: 0px;
  border: 2px solid ${theme.colors.primary};
`}`

export const Text = styled.span`${({ theme }) => css`
  width: 65px;
  height: 21px;
  margin: 0px 10px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${theme.colors.white};
`}`

export const Button = styled.button`${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 268px;
  line-height: 35px;
  padding: 0 20px;
  
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3.38806px;
  border: none;
  font-size: 1.3em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightBlack};
  cursor: pointer;
  :hover {
    background: ${theme.colors.primaryDark};
  }
  @media (max-width: 1000px) {
    width: 180px;
  }
`}`

export const PlusIcon = styled.img`
  margin-right: 10px;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 268px;
  margin: 20px 0px;
  flex-wrap: wrap;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1000px) {
    width: 180px;
    max-height: 600px;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
  @media (max-width: 1400px) {
    max-height: 600px;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
`

export const ButtonWrapper = styled.div`
  margin-left: auto;
`

export const CloseButton = styled.button`
  padding-right: 14px;
  font-family: 1.6em;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: transparent;
`

export type ActiveStatus = {
  active: boolean
}

export const Item = styled.li<ActiveStatus>`${({ theme, active }) => css`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 37px;
  background: ${active ? theme.colors.lightBlack : theme.colors.black};
  border-radius: 6px;
  list-style: none;
  color: ${theme.colors.white};
  font-size: 1.6em;
  align-items: center;
  &:hover {
    background: theme.colors.lightBlack;
    ${CloseButton} {
      color: ${theme.colors.white};
    }
  }
`}`

export const FileIcon = styled.img`
  margin-left: 14px;
  padding-right: 10px;
`

export const ItemLink = styled.a`
  display: inline-block;
  width: 230px;
  /* height: 100%; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const EditingIconTest = styled.img`
  margin-right: 14px;
`

EditingIconTest.defaultProps = {
  src: EditingIcon,
}

export const SavedIconTest = styled.img`
  margin-right: 14px;
`

SavedIconTest.defaultProps = {
  src: SavedIcon,
}

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SavingIconTest = styled.img`
  margin-right: 14px;
  animation: ${rotate} 1s linear infinite;
`

SavingIconTest.defaultProps = {
  src: SavingIcon,
}
