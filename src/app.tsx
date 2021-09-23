import { useState, useRef, ChangeEvent } from 'react'
import { File } from 'resources/files/types'
import { Aside } from 'aside'
import { Content } from 'content'
import { Grid } from 'ui/grid'
import { v4 as uuidv4 } from 'uuid'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])

  const addFileHandleClick = () => {
    inputRef.current?.focus()
    removeActiveButton()
    setFile(files => [...files, {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      Status: 'saved',
    }])
  }

  const removeActiveButton = () => {
    files.forEach((file) => {
      file.active = false
    })
  }

  const handleChangeTitleName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFile(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
        }
      }

      return file
    }))
  }

  const handleChangeContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFile(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
        }
      }

      return file
    }))
  }

  return (
    <>
      <Grid>
        <Aside files={files} addFileHandleClick={addFileHandleClick} />
        <Content
          file={files.find(file => file.active === true)}
          inputRef={inputRef}
          handleChangeTitleName={handleChangeTitleName}
          handleChangeContent={handleChangeContent}
        />
      </Grid>
    </>
  )
}

export { App }
