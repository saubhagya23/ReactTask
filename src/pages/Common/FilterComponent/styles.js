import styled from 'styled-components';
import { Form } from 'semantic-ui-react';


export const FormContainer = styled(Form)`{
  display: flex;
  flex-direction: column;
  > div {
    border: 1px solid rgba(34,36,38,.15);
    border-radius: 4px;
    margin: 12px 0;
  }
  div {
    .field {
      display: grid;
      padding: 1em;
    }
  }
}`;