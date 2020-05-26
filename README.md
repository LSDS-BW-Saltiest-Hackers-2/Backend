# Backend Documentation:

**HEROKU LINK:**

**You have to login before it will let you access the other endpoints. Or register and then login.**

**BASE URL:**

## Endpoints:

### AUTH:

**/auth/register** - **POST** need to provide a username and password can only be alphanumeric.

Example of what to input:
![required fields for register]("register.PNG")

Example of response:
![response to register](registerRes.PNG)

**/auth/login** - **POST** will provide token upon successful login. need to provide a username and password can only be alphanumeric.

Example of what to input:
![required fields for login](login.PNG)

Example of response:
![response to login](loginRes.PNG)

### NON-AUTH:

### Schemas:

**User Schema:**

| name:    | Type:  | Required? |
| -------- | ------ | --------- |
| username | string | yes       |
| password | string | yes       |

**Comments Schema:**

| name:       | Type:   | Required? |
| ----------- | ------- | --------- |
| comment     | string  | yes       |
| likes_total | integer | no        |

**Child Comments AKA Replies Schema:**

| name:       | Type:   | Required? |
| ----------- | ------- | --------- |
| comment     | string  | yes       |
| likes_total | integer | no        |

Want to see what I'm currently working on? [Trello Board](https://trello.com/b/YnVywd2D/backend-saltyhackers2)

[^1]: Made by: Myco Sullivan
