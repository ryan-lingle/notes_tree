import gql from "graphql-tag";

const QUERY_BRANCH = gql`
  query Branch($slug: String!) {
    branch(slug: $slug) {
      id
      body
      name
      slug
      image
      children {
        id
        name
        slug
        image
      }
      parents {
        id
        name
        slug
        image
      }
    }
  }
`

const MUTATE_BRANCH = gql`
  mutation Branch($id: ID, $name: String, $body: String, $image: Upload) {
    branch(id: $id, name: $name, body: $body, image: $image) {
      slug
    }
  }
`

export {
  QUERY_BRANCH,
  MUTATE_BRANCH
};
