# Test Task Client-Side

## Video showing how the app works

https://drive.google.com/drive/folders/1AEuEJbHRHujgl828_7YU4PxbFcU6kp1I?usp=sharing

### Describe

Depending on the role you are applying for, please create an iOS, Android or React app using
the following requirements:
● Latest Swift on iOS, Kotlin on Android or TypeScript on React
● On main screen app shows list of people by listing only the first name
● On tapping on a list item show the profile view that displays: first name, last name, age,
gender and country
● Architect your code with care as we'll inspect for style and clean it is
● Make sure you write clean, beautiful code
● Make sure you write defensive code
● Make sure you have unit tests defined
● Handle service errors gracefully

### API

● API calls must use JWT authorization bearer using HMAC 256 and base64-encoded
secret: "$SECRET$"
● Example of JWT token that works:
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.y
OIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs
● The JWT payload should include an object with two properties "uid" and "identity" with
any values
● API domain: http://opn-interview-service.nn.r.appspot.com
● API call for listing of people ids: GET: /list
● API call for getting Detailed Profile: GET: /get/{id} where {id} is the id of the profile you
get back from the list.

### GitHub

● Upload completed test task to your own GitHub repository.
● Update README.md file with some description of the test task and video showing how
the app works.
