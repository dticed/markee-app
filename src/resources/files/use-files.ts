import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react'
import { File } from 'resources/files/types'
import { v4 as uuidv4 } from 'uuid'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFile] = useState<File[]>([])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.Status !== 'editing') {
        return
      }
      timer = setTimeout(() => {
        setFile(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              Status: 'saving',
            }
          }
          return file
        }))

        setTimeout(() => {
          setFile(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                Status: 'saved',
              }
            }
            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()
    return () => clearTimeout(timer)
  }, [files])

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

  const handleClickFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    inputRef.current?.focus()
    setFile(files => files.map((file) => ({
      ...file,
      active: file.id === id,
      content: file.content,
    })))
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
          Status: 'editing',
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
          Status: 'editing',
        }
      }

      return file
    }))
  }

  const handleRemoveFile = (id: string) => {
    setFile(files => files.filter(file => file.id !== id))
  }

  return {
    files,
    inputRef,
    addFileHandleClick,
    handleClickFile,
    handleChangeTitleName,
    handleChangeContent,
    handleRemoveFile,
  }
}
