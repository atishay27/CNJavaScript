//Do not alter the starter code.
function main() {
  //Create your class "User" here with all the properties and methods
  class User {
    #name;
    #email;
    #password;
    #posts;
    constructor(name, email, password) {
      this.#name = name;
      this.#email = email;
      this.#password = password;
      this.#posts = [];
    }
    get name() {
      return this.#name;
    }
    get email() {
      return this.#email;
    }
    get password() {
      return this.#password;
    }

    set name(newName) {
      this.#name = newName;
    }
    set email(newEmail) {
      this.#email = newEmail;
    }
    set password(newPassword) {
      this.#password = newPassword;
    }

    addPost(post) {
      this.#posts.push(post);
    }
    deletePost(post) {
      let index = this.#posts.find((el) => el.title === post.title);
      if (index >= 0) {
        this.#posts.splice(index, 1);
      }
    }
    displayPosts() {
      console.log(`Posts by ${this.name}`);
      for (let el of this.#posts) {
        console.log(`- ${el.title}`);
      }
    }
  }

  class Post extends User {
    #title;
    #content;
    #date;
    #likeCount;
    constructor(name, email, password, title, content, date) {
      super(name, email, password);
      this.#title = title;
      this.#content = content;
      this.#date = date;
      this.#likeCount = 0;
    }
    get title() {
      return this.#title;
    }
    get content() {
      return this.#content;
    }
    get date() {
      return this.#date;
    }
    get likeCount() {
      return this.#likeCount;
    }
    set title(newTitle) {
      this.#title = newTitle;
    }
    set content(newContent) {
      this.#content = newContent;
    }
    set date(newDate) {
      this.#date = newDate;
    }
    set likeCount(newCount) {
      this.#likeCount = newCount;
    }
    addLike() {
      this.likeCount = this.likeCount + 1;
    }
    displayDetails() {
      console.log(`Owner: ${this.name}`);
      console.log(`Title: ${this.title}`);
      console.log(`Content: ${this.content}`);
      console.log(`Date: ${this.date}`);
      console.log(`Likes: ${this.#likeCount}`);
    }
  }
  //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );

  user1.addPost(post1);
  user1.addPost(post2);
  post1.addLike();
  post1.addLike();
  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post

  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return { User, Post };
}
main();
