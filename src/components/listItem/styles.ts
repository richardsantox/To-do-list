import styled from 'styled-components';

type CotainerProps = {
    done: boolean;
}

export const Cotainer = styled.div(({done}: CotainerProps) => (
`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));