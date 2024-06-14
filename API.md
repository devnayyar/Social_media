Sure! Here's the API documentation based on the project requirements. This documentation includes the endpoints, their descriptions, request parameters, and sample request/response formats.

### API Documentation

#### Auth Endpoints

**Signup**
- **Endpoint**: `POST /auth/signup`
- **Description**: Create a new user account.
- **Request Body**:
  ```json
  {
    "username": "john_doe123",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User successfully registered",
    "user": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "username": "john_doe123",
      "email": "user@example.com"
    }
  }
  ```

**Login**
- **Endpoint**: `POST /auth/login`
- **Description**: Authenticate a user and return a JWT token.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "token": "jwt_token_here"
  }
  ```

#### User Endpoints

**Create User**
- **Endpoint**: `POST /users`
- **Description**: Create a new user.
- **Request Body**:
  ```json
  {
    "username": "john_doe123",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User created successfully",
    "user": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "username": "john_doe123",
      "email": "user@example.com"
    }
  }
  ```

**Update User**
- **Endpoint**: `PUT /users/:id`
- **Description**: Update user details.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the user to be updated.
- **Request Body**:
  ```json
  {
    "username": "john_doe_updated",
    "email": "updated@example.com"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User updated successfully",
    "user": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "username": "john_doe_updated",
      "email": "updated@example.com"
    }
  }
  ```

**Delete User**
- **Endpoint**: `DELETE /users/:id`
- **Description**: Delete a user by ID.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the user to be deleted.
- **Response**:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

**List Users**
- **Endpoint**: `GET /users`
- **Description**: Retrieve a list of all users.
- **Response**:
  ```json
  {
    "users": [
      {
        "id": "60c72b2f9b1d8e5e2f8d1d8e",
        "username": "john_doe123",
        "email": "user@example.com"
      },
      ...
    ]
  }
  ```

**Search User by Name**
- **Endpoint**: `GET /users/search/:name`
- **Description**: Search for users by name.
- **Request Parameters**: 
  - `name` (Path Parameter) - The name of the user to search for.
- **Response**:
  ```json
  {
    "users": [
      {
        "id": "60c72b2f9b1d8e5e2f8d1d8e",
        "username": "john_doe123",
        "email": "user@example.com"
      },
      ...
    ]
  }
  ```

#### Discussion Endpoints

**Create Discussion**
- **Endpoint**: `POST /discussions`
- **Description**: Create a new discussion.
- **Request Body**:
  ```json
  {
    "userId": "60c72b2f9b1d8e5e2f8d1d8e",
    "text": "This is a new discussion",
    "imageUrl": "http://example.com/image.jpg",
    "hashtags": ["#example", "#discussion"]
  }
  ```
- **Response**:
  ```json
  {
    "message": "Discussion created successfully",
    "discussion": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "userId": "60c72b2f9b1d8e5e2f8d1d8e",
      "text": "This is a new discussion",
      "imageUrl": "http://example.com/image.jpg",
      "hashtags": ["#example", "#discussion"],
      "createdOn": "2023-06-13T12:34:56.789Z"
    }
  }
  ```

**Update Discussion**
- **Endpoint**: `PATCH /discussions/:id`
- **Description**: Update an existing discussion.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the discussion to be updated.
- **Request Body**:
  ```json
  {
    "text": "This is an updated discussion",
    "imageUrl": "http://example.com/updated_image.jpg",
    "hashtags": ["#updated", "#discussion"]
  }
  ```
- **Response**:
  ```json
  {
    "message": "Discussion updated successfully",
    "discussion": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "userId": "60c72b2f9b1d8e5e2f8d1d8e",
      "text": "This is an updated discussion",
      "imageUrl": "http://example.com/updated_image.jpg",
      "hashtags": ["#updated", "#discussion"],
      "createdOn": "2023-06-13T12:34:56.789Z"
    }
  }
  ```

**Delete Discussion**
- **Endpoint**: `DELETE /discussions/:id`
- **Description**: Delete a discussion by ID.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the discussion to be deleted.
- **Response**:
  ```json
  {
    "message": "Discussion deleted successfully"
  }
  ```

**Get Discussions by Hashtag**
- **Endpoint**: `GET /discussions/hashtag/:hashtag`
- **Description**: Get discussions by hashtag.
- **Request Parameters**: 
  - `hashtag` (Path Parameter) - The hashtag to search for.
- **Response**:
  ```json
  {
    "discussions": [
      {
        "id": "60c72b2f9b1d8e5e2f8d1d8e",
        "userId": "60c72b2f9b1d8e5e2f8d1d8e",
        "text": "This is a discussion",
        "imageUrl": "http://example.com/image.jpg",
        "hashtags": ["#example", "#discussion"],
        "createdOn": "2023-06-13T12:34:56.789Z"
      },
      ...
    ]
  }
  ```

**Get Discussions by Text**
- **Endpoint**: `GET /discussions/search`
- **Description**: Get discussions by text.
- **Request Query Parameters**:
  - `text` (Query Parameter) - The text to search for.
- **Response**:
  ```json
  {
    "discussions": [
      {
        "id": "60c72b2f9b1d8e5e2f8d1d8e",
        "userId": "60c72b2f9b1d8e5e2f8d1d8e",
        "text": "This is a discussion",
        "imageUrl": "http://example.com/image.jpg",
        "hashtags": ["#example", "#discussion"],
        "createdOn": "2023-06-13T12:34:56.789Z"
      },
      ...
    ]
  }
  ```

#### Comment Endpoints

**Create Comment**
- **Endpoint**: `POST /comments`
- **Description**: Create a new comment on a discussion.
- **Request Body**:
  ```json
  {
    "discussionId": "60c72b2f9b1d8e5e2f8d1d8e",
    "userId": "60c72b2f9b1d8e5e2f8d1d8e",
    "text": "This is a comment"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Comment created successfully",
    "comment": {
      "id": "60c72b2f9b

1d8e5e2f8d1d8e",
      "discussionId": "60c72b2f9b1d8e5e2f8d1d8e",
      "userId": "60c72b2f9b1d8e5e2f8d1d8e",
      "text": "This is a comment",
      "createdOn": "2023-06-13T12:34:56.789Z"
    }
  }
  ```

**Delete Comment**
- **Endpoint**: `DELETE /comments/:id`
- **Description**: Delete a comment by ID.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the comment to be deleted.
- **Response**:
  ```json
  {
    "message": "Comment deleted successfully"
  }
  ```

#### Like Endpoints

**Like a Discussion or Comment**
- **Endpoint**: `POST /likes`
- **Description**: Like a discussion or comment.
- **Request Body**:
  ```json
  {
    "discussionId": "60c72b2f9b1d8e5e2f8d1d8e",
    "userId": "60c72b2f9b1d8e5e2f8d1d8e",
    "commentId": "60c72b2f9b1d8e5e2f8d1d8e" // Optional, if liking a comment
  }
  ```
- **Response**:
  ```json
  {
    "message": "Like added successfully",
    "like": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "discussionId": "60c72b2f9b1d8e5e2f8d1d8e",
      "userId": "60c72b2f9b1d8e5e2f8d1d8e",
      "commentId": "60c72b2f9b1d8e5e2f8d1d8e"
    }
  }
  ```

**Unlike a Discussion or Comment**
- **Endpoint**: `DELETE /likes/:id`
- **Description**: Unlike a discussion or comment.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the like to be removed.
- **Response**:
  ```json
  {
    "message": "Like removed successfully"
  }
  ```

#### Follow Endpoints

**Follow a User**
- **Endpoint**: `POST /follow`
- **Description**: Follow a user.
- **Request Body**:
  ```json
  {
    "followerId": "60c72b2f9b1d8e5e2f8d1d8e",
    "followedId": "60c72b2f9b1d8e5e2f8d1d8e"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User followed successfully",
    "follow": {
      "id": "60c72b2f9b1d8e5e2f8d1d8e",
      "followerId": "60c72b2f9b1d8e5e2f8d1d8e",
      "followedId": "60c72b2f9b1d8e5e2f8d1d8e"
    }
  }
  ```

**Unfollow a User**
- **Endpoint**: `DELETE /follow`
- **Description**: Unfollow a user.
- **Request Body**:
  ```json
  {
    "followerId": "60c72b2f9b1d8e5e2f8d1d8e",
    "followedId": "60c72b2f9b1d8e5e2f8d1d8e"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User unfollowed successfully"
  }
  ```

#### View Endpoints

**Increment View Count**
- **Endpoint**: `PUT /views/:id/increment`
- **Description**: Increment the view count of a discussion.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the discussion.
- **Response**:
  ```json
  {
    "message": "View count incremented successfully",
    "viewCount": 10
  }
  ```

**Get View Count**
- **Endpoint**: `GET /views/:id`
- **Description**: Get the view count of a discussion.
- **Request Parameters**: 
  - `id` (Path Parameter) - The ID of the discussion.
- **Response**:
  ```json
  {
    "viewCount": 10
  }
  ```

### Postman Collection

To facilitate testing, you should create a Postman collection with the above endpoints. Here’s how you can structure the collection:

1. **Environment Variables**:
   - `baseUrl`: `http://localhost:3000`
   - `token`: `{{token}}`

2. **Requests**:
   - **Auth**
     - Signup
     - Login
   - **Users**
     - Create User
     - Update User
     - Delete User
     - List Users
     - Search User by Name
   - **Discussions**
     - Create Discussion
     - Update Discussion
     - Delete Discussion
     - Get Discussions by Hashtag
     - Get Discussions by Text
   - **Comments**
     - Create Comment
     - Delete Comment
   - **Likes**
     - Like
     - Unlike
   - **Follows**
     - Follow
     - Unfollow
   - **Views**
     - Increment View Count
     - Get View Count

Export this Postman collection and make it publicly accessible, then include the link in your project’s README.md file.
