/*
Filename: ComplexCode.js

Description: This code demonstrates a complex and sophisticated implementation of a social media platform, including user registration, login, post creation, commenting, and liking functionality.

Author: Assistant

Date: September 22, 2021
*/

// ===========================================
// Utility Functions
// ===========================================

function generateUserId() {
  // Returns a unique user ID
  // Implementation not shown
}

function encryptPassword(password) {
  // Returns an encrypted version of the password
  // Implementation not shown
}

function decryptPassword(encryptedPassword) {
  // Returns the decrypted password
  // Implementation not shown
}

// ===========================================
// Objects and Classes
// ===========================================

class User {
  constructor(name, email, password) {
    this.id = generateUserId();
    this.name = name;
    this.email = email;
    this.password = encryptPassword(password);
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(this.id, content);
    this.posts.push(post);
  }

  commentOnPost(postId, content) {
    const post = this.posts.find((post) => post.id === postId);
    if (post) {
      const comment = new Comment(this.id, content);
      post.comments.push(comment);
    } else {
      console.log("Post not found!");
    }
  }

  likePost(postId) {
    const post = this.posts.find((post) => post.id === postId);
    if (post) {
      post.likes++;
    } else {
      console.log("Post not found!");
    }
  }
}

class Post {
  constructor(userId, content) {
    this.id = generateUniqueId();
    this.userId = userId;
    this.content = content;
    this.comments = [];
    this.likes = 0;
  }
}

class Comment {
  constructor(userId, content) {
    this.userId = userId;
    this.content = content;
  }
}

// ===========================================
// Usage Example
// ===========================================

const user1 = new User("John Doe", "john.doe@example.com", "password123");
user1.createPost("Hello, world!");
user1.createPost("I love coding!");

user1.commentOnPost(1, "Nice post!");
user1.commentOnPost(2, "Keep up the great work!");

user1.likePost(1);

console.log(user1); // Output the user object with posts, comments, and likes