import { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import LogoSrc from 'ui/icons/logo.png'
import FileIconSrc from 'ui/icons/file-icon-nonactive.png'
import FileActiveIconSrc from 'ui/icons/file-icon-active.png'
import PlusIconSrc from 'ui/icons/plus-icon.png'
import SavedIcon from 'ui/icons/editing-icon.png'
import { v4 as uuidv4 } from 'uuid'

export type Status = 'editing' | 'saving' | 'saved'

export type File = {
  id: string
  name: string
  content: string
  active: boolean
  Status: 'editing' | 'saving' | 'saved'
}

const filesList: File[] = [

]

function Aside () {
  const [files, addFile] = useState(filesList)

  const handleClick = () => {
    removeActiveButton()
    addFile(files => [...files, {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      Status: 'saved',
    }])
  }

  const removeActiveButton = () => {
    files.forEach((item) => {
      item.active = false
    })
  }
  return (
    <MyAside>
      <Logo src={LogoSrc} />
      <LineFiles>
        <Line1 />
        <Text>Arquivos</Text>
        <Line2 />
      </LineFiles>
      <Button onClick={handleClick}><PlusIcon src={PlusIconSrc} />Adicionar arquivo</Button>
      <List>
        {files.map((item: File) => (
          <Item key={item.id} active={item.active}>
            <FileIcon src={item.active ? FileActiveIconSrc : FileIconSrc} />
            <Anchor>{item.name}</Anchor>
            <ButtonWrapper>
              {item.active
                ? <ActivedButton src={SavedIcon} />
                : <CloseButton>x</CloseButton>}
            </ButtonWrapper>
          </Item>
        ))}
      </List>
    </MyAside>
  )
}

const MyAside = styled.aside`${({ theme }) => css`
  display: flex;
  flex-direction: column;
  grid-area: aside;
  height: 100vh;
  background-color: ${theme.colors.black};
  align-items: center;
`}`

const Logo = styled.img`
  position: absolute;
  top: 45px;
  width: 164px;
  height: 44.31px;
`

const LineFiles = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 268px;
  align-items: center;
  top: 156px;
`

const Line1 = styled.div`${({ theme }) => css`
  width: 13.5px;
  height: 0px;
  left: 32px;
  top: 157px;
  /* Primary */
  border: 2px solid ${theme.colors.primary};
`}`

const Line2 = styled.div`${({ theme }) => css`
  width: 178px;
  height: 0px;
  left: 122px;
  top: 156px;
  border: 2px solid ${theme.colors.primary};
`}`

const Text = styled.span`${({ theme }) => css`
  width: 65px;
  height: 21px;
  left: 51px;
  top: 146px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: ${theme.colors.white};
`}`

const Button = styled.button`${({ theme }) => css`
  position: absolute;
  display: flex;
  top: 191px;
  width: 268px;
  height: 33.88px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3.38806px;
  font-size: 1.3em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightBlack};
  align-items: center;
  justify-content: center;
  :hover {
    background: ${theme.colors.primaryDark};
  }
`}`

const PlusIcon = styled.img`
  margin-right: 10px;
`

const List = styled.ul`
  padding: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 256.88px;
  width: 268px;
`

const ButtonWrapper = styled.div`
  margin-left: auto;
`

const ActivedButton = styled.img`
  margin-right: 14px;
`

const CloseButton = styled.button`
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

type ActiveStatus = {
  active: boolean
}

const Item = styled.li<ActiveStatus>`${({ theme, active }) => css`
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

const FileIcon = styled.img`
  margin-left: 14px;
`

const Anchor = styled.a`
  margin-left: 15px;
`

export { Aside }
