async function getGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();

    console.log("Name:", user.name);
    console.log("Username:", user.login);
    console.log("Bio:", user.bio);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getGitHubUser("octacat");