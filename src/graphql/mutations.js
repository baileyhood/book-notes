/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReadLaterBook = /* GraphQL */ `
  mutation CreateReadLaterBook(
    $input: CreateReadLaterBookInput!
    $condition: ModelReadLaterBookConditionInput
  ) {
    createReadLaterBook(input: $input, condition: $condition) {
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
export const updateReadLaterBook = /* GraphQL */ `
  mutation UpdateReadLaterBook(
    $input: UpdateReadLaterBookInput!
    $condition: ModelReadLaterBookConditionInput
  ) {
    updateReadLaterBook(input: $input, condition: $condition) {
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
export const deleteReadLaterBook = /* GraphQL */ `
  mutation DeleteReadLaterBook(
    $input: DeleteReadLaterBookInput!
    $condition: ModelReadLaterBookConditionInput
  ) {
    deleteReadLaterBook(input: $input, condition: $condition) {
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
