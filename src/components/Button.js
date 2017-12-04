import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.div`
text-align:center;
`;
export const LinkButton = styled(Link)`
color:white;
background-color:blue;
font-size:2em;
border: 1px dashed red;
border-radius: 5px;
padding:0.5em;
`;