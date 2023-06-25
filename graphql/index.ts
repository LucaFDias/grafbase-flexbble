export const getUserQuery = `
query GetUser($email: String!) {
  user( by: { email: $email }) {
      _id
      email
      name
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;

export const createUserMutation = `
  mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        _id
        email
        name
        avatarUrl
        description
        githubUrl
        linkedinUrl
      }
    }
  }
`;