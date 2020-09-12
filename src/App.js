import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  padding: 50
})

const FlexContainer = styled.div({
  display: "flex",
  justifyContent: "center"
})

const FlexItem = styled.div({
  paddingRight: 50,

})


function App() {
  return (
    <Container>
      <FlexContainer>
        <FlexItem>
          Item 1
        </FlexItem>
        <FlexItem>
          Item 2
        </FlexItem>
        <FlexItem>
          Item 3
        </FlexItem>
      </FlexContainer>
    </Container>
  );
}

export default App;
