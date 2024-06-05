

import{ Body, P,Form,H1,Input,Button, Section,H1login,Div1,Label,Div2} from '../Styles-Components/App';


const App = () => {
  return (
<> 
    
      <Body> 
        <Section>
          <H1>Control-Clean</H1>
          <P>Plataforma de apoio aos colaboradores na efetuação de suas tarefas.</P>
          <Div1>
          <Form>
            <Div2>
            <H1login>Login</H1login>
            <Label htmlFor="">CPF</Label>
            <Input type="CEP" />
            <Label htmlFor="">SENHA</Label>
            <Input type="SENHA" />
            <Button>ENTRAR</Button>
            </Div2>
          </Form>
          </Div1>
        </Section>
      </Body>
     
 </>
  );
}

export default App; 