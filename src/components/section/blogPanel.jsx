import { Col, Row } from "react-flexbox-grid";
import styled from "styled-components";

import { Container } from "../../styles";
import Button from "../Button";
import Card from "../Card";

const BlogPanel = ({blogs}) => {
  const blogList = blogs.map((item) => {
    return (
      <Col md={3} sm={6}>
        <Card key={item.id} {...item} />     
      </Col>
    );
  });

  return(
    <StyledBlogPanel>
      <Container>
        <h1>What do we do?</h1>
        <p>You might not have heard of us, but we're the people behind the following impactful programmes.</p>
        <Row>{blogList}</Row>
        <div className="cta-button">
          <Button url="#" label="More about what we do" />
        </div>
      </Container>
    </StyledBlogPanel>
  );
}

const StyledBlogPanel = styled.section`
  padding: 50px 0;
  color: white;
  background-color: var(--blue);
  .cta-button {
    margin: 30px 0 0;
    display: flex;
    justify-content: center;
  }
`;

export default BlogPanel;