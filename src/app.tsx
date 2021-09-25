import { Aside } from 'aside'
import { Content } from 'content'
import { Grid } from 'ui/grid'
import { useFiles } from 'resources/files/use-files'

function App () {
  const {
    files,
    inputRef,
    addFileHandleClick,
    handleClickFile,
    handleChangeTitleName,
    handleChangeContent,
    handleRemoveFile
  } = useFiles()
  return (
    <>
      <Grid>
        <Aside
          files={files}
          addFileHandleClick={addFileHandleClick}
          handleClickFile={handleClickFile}
          handleRemoveFile={handleRemoveFile}
        />
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
