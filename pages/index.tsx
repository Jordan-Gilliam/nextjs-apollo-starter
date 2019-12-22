import React from 'react';
import styled from 'styled-components';
import { withApollo } from '../apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const IndexWrapper = styled.h1`
  color: red;
  font-size: 50px;
`;

const Index = () => {
  const { data } = useQuery(ViewerQuery);

  if (data.viewer) {
    return (
      <>
        <IndexWrapper>
          You're signed in as {data.viewer.name} and you're {data.viewer.status} goto{' '}
        </IndexWrapper>
        <Link href='/about'>
          <a>static</a>
        </Link>{' '}
        page.
      </>
    );
  }

  return null;
};

export default withApollo(Index);
