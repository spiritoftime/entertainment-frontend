# entertainment-frontend
# Deployed Link: https://spiritandtime-movie-app.onrender.com/

# Challenges faced:
Overall, the main problems I had was handling the fetching, routing as well as the query params.

1) I might have reused the same function & components too many times, making it very hard to debug. For example, I reused customFetch as well as Pagination for 
all the api fetches & the AllPages respectively. Everytime I added a new fetch, I would end up breaking the app as I would end up fetching to an invalid endpoint.
In order to fix this, I just kept adding new search & routing params (from react router), which resulted in a code that was very hard to debug.

2) My react router routes definitely could have used more planning 
3) The messy custom fetch, routes and params also caused me to be unable to refactor the code such that the server fetches from the tmdb api then returns the result


Overall, I really should have narrowed down the scope and got the basics right first (eg - fetching from the server at the start instead of trying to fix it at the end).
This was honestly a pretty bad project in my opinion as I spent way less time planning (compared to my holiday projects)
but trying to pump out the features. I feel like 90% of my time was really just spent on the same issues - handling fetching, routing, querying and just trying 
to prevent the whole app from crashing when I navigated to another page
