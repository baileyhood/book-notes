/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($owner: String!) {
    onCreateBook(owner: $owner) {
      id
      title
      author
      isbn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($owner: String!) {
    onUpdateBook(owner: $owner) {
      id
      title
      author
      isbn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($owner: String!) {
    onDeleteBook(owner: $owner) {
      id
      title
      author
      isbn
      createdAt
      updatedAt
      owner
    }
  }
`;
