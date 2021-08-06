/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReadLaterBook = /* GraphQL */ `
  query GetReadLaterBook($id: ID!) {
    getReadLaterBook(id: $id) {
      id
      title
      author
      isbn
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listReadLaterBooks = /* GraphQL */ `
  query ListReadLaterBooks(
    $filter: ModelReadLaterBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadLaterBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        isbn
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
