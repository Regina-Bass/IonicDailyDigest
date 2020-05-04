# IonicDailyDigest


### Category: News/Productivity

#### Summary of Features
Daily Digest uses Third Party APIs to display the weather of your city choice and will remember your last search for the next time you run the app. It also recommends a popular news story. It’s the perfect app for a daily digest.

#### THIRD PARTY APIs USED: 
- Weatherstack
    - Real-Time & Historical World Weather Data API
    - https://weatherstack.com/
- New York Times
    - A collection of Real-time data regarding articles, archives, books, news, RSS feed, Covid-19 Information and more 
    - https://developer.nytimes.com/apis

#### Cordova Plugin :https://www.npmjs.com/package/@ionic/storage
Ionic Storage that stores session data (for search)

#### Link to Github Repo: https://github.com/Regina-Bass/IonicDailyDigest
Includes complete downloadable project, documented version control, and a README file with an app demo gif.

#### Link to Prototype and Wireframes: https://www.figma.com/file/QAkcpfGso4j6L1lDfvyOZH/Ionic-Daily-Digest?node-id=0%3A1

#### Successes
Honestly, my successes were mostly just being able to work through (not all but) a lot of my issues so please read that part instead.
 - Being able to run on android platform (see issue #1)
 - Being able to generate services and pages and navigate.
 - Being able to pull some data from an API
 - Being able to work through this calmly without pulling all my hair out
 - Getting more famililarity with working in the CLI for FE (I just switched from a Mac to a Windows so I had to get accustomed to all the different commands I was unfamiliar with e.g. clear vs cls, rm vs del)

#### Issues
 - My biggest problem was the gradle! I spent hours and hours trying to figure out how to run even just the "Hello World" app on an android emulator on my laptop. I didn't understand because it told me to install Android Studio but it was already installed and updated to the latest version. I had to read a lot about system environment variables and paths to finally figure it out.
 - Had a lot of problems with APIs. Some were just not working, some were limited in functionality (on a free plan), and some had problems with the access key. 
 - I had some problems trying to figure out how to integrate both cordova and ionic. I had to restart the project a few times because I kept thinking the reason things weren't working (including the gradle) was because I set up my project wrong. Wasn't sure if I was suposed to create the Ionic or the cordova first.
 - Had some other issues Navigation and displaying API data.
 - For some reason a part of my css for android was not working.
 - cordova plugin works but I can't figure out how to delete sesison storage even when I deleted or cleared it in Inspect Element.

#### Future Development
I already Submitted my project but I am still continuing to implement and work on this project because I feel like I just need more time to figure out how to work through some of the issues I'm having. I want to finish implementing my News Page because that page was having some navigation problems which was making my entire app not work, so I deleted it for my submission. but I'd still like to see it.
