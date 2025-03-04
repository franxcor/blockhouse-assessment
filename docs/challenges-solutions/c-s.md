# Challenges and Solutions

## Web-App Portion

### Challenge 1 : Figuring out the Crypto API
The first challenge I ran into was figuring out how to actually work the given Crypto API directly through the link. I had checked both CoinGecko and CoinCap to see which one seemed simpler, and settled on CoinCap because it had a link directly to their API. 

Then I began research on the CoinCap API, and got confused between CoinMarketCap and CoinCap. CoinMarketCap required a key of sorts, and I didn't know how to properly use it, so a lot of my time was wasted on a site that I wasn't even supposed to be using. 

Eventually I realized, and quickly followed the easy guide that CoinCap provided to set up my API on the coding end. I tested out different API calls I could use to grab the top 5 cryptos most efficiently, and decided that since it was only 5, manually setting 5 variables would probably be the easiest after retrieving a json of all assets. 

### Challenge 2: The Loading Indicator
For this challenge, I found that the actual solution was a lot simpler than I initially thought, and I was much more in my head about it. when creating this load indicator, I initially though that I would have to change the 'await' I had for the GET request, so I would basically need to rewrite my entire functionality.

I then realized it didn't need to be so complicted and I could just have a conditional text render with 'loading...' if a state variable was true or not. While doing this, I also thought it would be good to disable to refresh/submit buttons while the data is being load to prevent the site from crashing. 

## Docusaurus Portion

### Challenge 1: Navigating the Docusaurus Project

As I have never used docusaurus before, I had to do a lot of research on what it was, and what exactly was being asked of me before starting this portion. After creating the project, there were many built in docs and markdown files that I wasn't sure was connected to what, and what navigated to what, so I had to do a lot of testing and editing to get rid of all the tutorial things. Even now, I didn't want to mess with the css too much in case of messing things up. 

Basically All of the problems that I had stemmed from not knowing how docusaurus worked. For example, when creating the menu with all of the navigateable links, it was a lot more layed/complex than I thought, so there was a lot of trial and error invovled. Even though there were guides, because they were all tutorial related, and everything was named similarly in the project, it was actually hard to know exactly what was going where. 

## Both
### Making Decisions
Something I struggled with for both was making decisions, particularly in what to put on the page. Because the prompt was a little vauge, I could kind of add a lot more, but I also didn't want to waste too much time on things that were not relevant. It was hard to balance what I should include on the page and what I should leave off. At the end, I kind of settled for putting exactly what was asked of me on the page with a minimal amount of styling. 

### Styling
As slightly mentioned in the previous response, making stylistic decisions was kind of difficult, because the extend of how styled the page was supposed to be was not included. Even on my main page, the styling is very minimal and the page is quite empty, but I chose a nice color theme and made sure everything was neat and readable with large buttons and text so that it was at least user friendly.

I also struggled with styling the docusaurus page, but this was due to my limited knowledge of the site. Because everything was made with markdown files, it all came out quite neat, even though I provided little to no styling. 
