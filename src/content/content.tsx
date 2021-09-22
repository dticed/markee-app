import { useState, ChangeEvent } from 'react'
import styled from 'styled-components/macro'
import InputFileIconSrc from 'ui/icons/input-icon.png'
import marked from 'marked'
// import highlight from 'highlight.js'

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

function Content () {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <Main>
      <TitleWrapper>
        <FileIcon src={InputFileIconSrc} />
        <InputFileName placeholder='Sem título' />
      </TitleWrapper>
      <ContentWrapper>
        <LeftArea>
          <TextArea
            placeholder='Digite o conteúdo'
            onChange={handleChange}
          />
        </LeftArea>
        <RightArea>
          <FormattedText>
            <Article dangerouslySetInnerHTML={{ __html: marked(content) }} />
          </FormattedText>
        </RightArea>
      </ContentWrapper>
    </Main>
  )
}

const Main = styled.main`
  grid-area: content;
  background-color: #e5e5e5;
  padding: 24px
`

const InputFileName = styled.input`
  font-size: 1.3em;
  font-weight: 500;
  background-color: transparent;
  border: none;
  outline: none;
`

const FileIcon = styled.img`
  margin-right: 15px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.8em;
  letter-spacing: -0.02em;
`

const ContentWrapper = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-areas:
    "leftarea rightarea";
  grid-template-columns: 0.7fr 1fr;
  grid-template-rows: auto;
  grid-gap: 40px;
`

const LeftArea = styled.div`
  grid-area: leftarea;
  height: 87vh;
  border-right: 2px solid rgba(30, 41, 59, 0.12);
`

const TextArea = styled.textarea`
  font-family: 'Inconsolata';
  font-size: 1.8em;
  width: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 98%;
  height: 100%;
  resize: none;
  line-height: 30px;
`

const RightArea = styled.article`
  grid-area: rightarea;
`

const FormattedText = styled.div`
  font-family: 'DM Sans';
`

const Article = styled.article`
  margin-top: 0px;
  font-size: 1.8em;
`

export { Content }
