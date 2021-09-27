import { File } from 'resources/files/types'
import { MouseEvent } from 'react'
import LogoSrc from 'ui/icons/logo.png'
import FileIconSrc from 'ui/icons/file-icon-nonactive.png'
import FileActiveIconSrc from 'ui/icons/file-icon-active.png'
import PlusIconSrc from 'ui/icons/plus-icon.png'
import * as S from './aside-styles'

type AsideProps = {
  files: File[]
  addFileHandleClick: () => void
  handleClickFile: (id: string) => (e: MouseEvent) => void
  handleRemoveFile: (id: string) => void
}

export function Aside ({ files, addFileHandleClick, handleClickFile, handleRemoveFile }: AsideProps) {
  return (
    <S.MyAside>
      <S.Logo src={LogoSrc} />
      <S.LineFiles>
        <S.Line1 />
        <S.Text>Arquivos</S.Text>
        <S.Line2 />
      </S.LineFiles>
      <S.Button onClick={addFileHandleClick}><S.PlusIcon src={PlusIconSrc} />Adicionar arquivo</S.Button>
      <S.List>
        {files.map((file: File) => (
          <S.Item
            key={file.id}
            active={file.active}
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState(null, '', `/file/${file.id}`)
            }}
          >
            <S.ItemLink onClick={handleClickFile(file.id)}>
              <S.FileIcon src={file.active ? FileActiveIconSrc : FileIconSrc} />
              {file.name}
            </S.ItemLink>
            <S.ButtonWrapper>
              {file.active && file.Status === 'editing' && <S.EditingIconTest />}
              {file.active && file.Status === 'saving' && <S.SavingIconTest />}
              {file.active && file.Status === 'saved' && <S.SavedIconTest />}
              {!file.active && <S.CloseButton onClick={() => handleRemoveFile(file.id)}>x</S.CloseButton>}
            </S.ButtonWrapper>
          </S.Item>
        ))}
      </S.List>
    </S.MyAside>
  )
}
