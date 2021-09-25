import styled, { css, keyframes } from 'styled-components/macro'
import { File } from 'resources/files/types'
import { MouseEvent } from 'react'
import LogoSrc from 'ui/icons/logo.png'
import FileIconSrc from 'ui/icons/file-icon-nonactive.png'
import FileActiveIconSrc from 'ui/icons/file-icon-active.png'
import PlusIconSrc from 'ui/icons/plus-icon.png'
import SavedIcon from 'ui/icons/saved-icon.png'
import EditingIcon from 'ui/icons/editing-icon.png'
import SavingIcon from 'ui/icons/saving-icon.png'

type AsideProps = {
  files: File[]
  addFileHandleClick: () => void
  handleClickFile: (id: string) => (e: MouseEvent) => void
  handleRemoveFile: (id: string) => void
}

function Aside ({ files, addFileHandleClick, handleClickFile, handleRemoveFile }: AsideProps) {
  return (
    <MyAside>
      <Logo src={LogoSrc} />
      <LineFiles>
        <Line1 />
        <Text>Arquivos</Text>
        <Line2 />
      </LineFiles>
      <Button onClick={addFileHandleClick}><PlusIcon src={PlusIconSrc} />Adicionar arquivo</Button>
      <List>
        {files.map((file: File) => (
          <Item key={file.id} active={file.active}>
            <Anchor onClick={handleClickFile(file.id)}>
              <FileIcon src={file.active ? FileActiveIconSrc : FileIconSrc} />
              {file.name}
            </Anchor>
            <ButtonWrapper>
              {file.active && file.Status === 'editing' && <EditingIconTest />}
              {file.active && file.Status === 'saving' && <SavingIconTest />}
              {file.active && file.Status === 'saved' && <SavedIconTest />}
              {!file.active && <CloseButton onClick={() => handleRemoveFile(file.id)}>x</CloseButton>}
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
  padding-right: 10px;
`

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 240px;
  height: 100%;
`

const EditingIconTest = styled.img`
  margin-right: 14px;
`

EditingIconTest.defaultProps = {
  src: EditingIcon,
}

const SavedIconTest = styled.img`
  margin-right: 14px;
`

SavedIconTest.defaultProps = {
  src: SavedIcon,
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SavingIconTest = styled.img`
  margin-right: 14px;
  animation: ${rotate} 1s linear infinite;
`

SavingIconTest.defaultProps = {
  src: SavingIcon,
}

export { Aside }
