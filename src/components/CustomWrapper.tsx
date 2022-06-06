import styled from 'styled-components';

interface ICustomWrapper {
    width?: string
    height?: string
    direction?: 'row' | 'column'
    justify?: string
    align?: string
}

export const CustomWrapper = styled.div<ICustomWrapper>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`