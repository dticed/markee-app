import { ChangeEvent, RefObject } from 'react'
import { File } from 'resources/files/types'
import InputFileIconSrc from 'ui/icons/input-icon.png'
import marked from 'marked'
import * as S from './content.styles'

import 'highlight.js/styles/atom-one-light.css'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  file?: File
  inputRef: RefObject<HTMLInputElement>
  handleChangeTitleName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Content ({ file, inputRef, handleChangeTitleName, handleChangeContent }: ContentProps) {
  if (!file) {
    return null
  }

  return (
    <S.Main>
      <S.TitleWrapper>
        <S.FileIcon src={InputFileIconSrc} />
        <S.InputFileName
          value={file?.name}
          ref={inputRef}
          onChange={handleChangeTitleName(file.id)}
          autoFocus
        />
      </S.TitleWrapper>
      <S.ContentWrapper>
        <S.LeftArea>
          <S.TextArea
            placeholder='Digite o conteúdo'
            value={file.content}
            onChange={handleChangeContent(file.id)}
          />
        </S.LeftArea>
        <S.RightArea>
          <S.FormattedText>
            <S.Article dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
          </S.FormattedText>
        </S.RightArea>
      </S.ContentWrapper>
    </S.Main>
  )
}
