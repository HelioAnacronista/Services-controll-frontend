import styled from 'styled-components';

import { mediaquery } from '../../utils/mediaquery';

const media = mediaquery;

export const Container = styled.div``;

export const ContentInputSearch = styled.div`
  ${media.mobile} {
    width: 210px;
    height: 30px;
    border: 2px solid transparent;
    border-color: #777;
    padding: 0.2rem 0;
    border-radius: 0.25rem;
    margin-right: 0.25rem;
  }

  border: 2px solid transparent;
  border-color: #777;
  padding: 0.2rem 0;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  input {
    padding-left: 0.25rem;
    outline: none;
    line-height: 28px;
    background-color: transparent;
    color: #0d0c22;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  input::placeholder {
    color: #777;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
`;
