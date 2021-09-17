import styled from 'styled-components/macro'
import LogoSrc from './logo.png'
import FileIconSrc from './file-icon.png'

type File = {
  id: string,
  name: string,
  content: string,
  active: boolean,
  status: 'editing' | 'saving' | 'saved'
}

const filesList: File[] = [
  {
    id: '1',
    name: 'README.md',
    content: 'content',
    active: true,
    status: 'editing',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: 'content',
    active: false,
    status: 'editing',
  },
  {
    id: '3',
    name: 'LICENSE.md',
    content: 'content',
    active: true,
    status: 'editing',
  },
  {
    id: '4',
    name: 'Links.md',
    content: 'content',
    active: false,
    status: 'editing',
  },
  {
    id: '5',
    name: 'roadmap.md',
    content: 'content',
    active: true,
    status: 'editing',
  },
]

function Aside () {
  return (
    <MyAside>
      <Image src={LogoSrc} />
      <LineFiles>
        <Line1 />
        <Text>Arquivos</Text>
        <Line2 />
      </LineFiles>
      <Button>
        Adicionar arquivo
      </Button>
      <List>
        {filesList.map((item: File) => (
          <Item key={item.id}>
            <FileIcon src={FileIconSrc} />
            <Anchor>{item.name}</Anchor>
            <CloseButton>x</CloseButton>
          </Item>
        ))}
      </List>
    </MyAside>
  )
}

const MyAside = styled.aside`
  display: flex;
  flex-direction: column;
  grid-area: aside;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  align-items: center;
`

const Image = styled.img`
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

const Line1 = styled.div`
  width: 13.5px;
  height: 0px;
  left: 32px;
  top: 157px;
  /* Primary */
  border: 2px solid ${({ theme }) => theme.colors.primary};
`

const Line2 = styled.div`
  width: 178px;
  height: 0px;
  left: 122px;
  top: 156px;
  /* Primary */
  border: 2px solid ${({ theme }) => theme.colors.primary};
`

const Text = styled.span`
  width: 65px;
  height: 21px;
  left: 51px;
  top: 146px;

  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white};
`

const Button = styled.button`
  position: absolute;
  top: 191px;
  width: 268px;
  height: 33.88px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3.38806px;
  font-size: 1.3em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightBlack};
`

const List = styled.ul`
  padding: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 256.88px;
  width: 268px;
`

const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 37px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6em;
  justify-content: flex-start;
  align-items: center;

`

const FileIcon = styled.img`
  margin-left: 14px;
`

const Anchor = styled.a`
  margin-left: 15px;
`

const CloseButton = styled.div`
  margin-left: 35px;
  font-family: 1.6em;
`

export { Aside }
