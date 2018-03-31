# WebChat for OBS 2.0
Webchat is a set of scripts used to generate a clean, HTML twitch chat feed for Open Broadcaster Software.

It's fairly easy to set up, and customizable as well! (At the moment, there is only a windows release, sorry Apple users!)

## Changes from 1.0
* Added an option message expiration option to messages
* Added option for messages to appear from the top or the bottom
* Added option to delete messages on a full queue or not
* Moved queue length to constants.json
* Made initial connection or chat clear messages temporary
* Edited README

## Current Functionality
* Connects to chatrooms as you
* Creates a customizable HTML feed of a twitch chat
* Correctly displays name displayed in chat
* Shows badges and emotes

# To set up:
There are some requirements before you can run the scripts.
* Have Node.js installed (https://nodejs.org/en/download/)
* After that, install Socket.io and TMI.js (This can be done by manually installing each or installing through npm with instructions from their respective websites (https://docs.tmijs.org/v1.2.1/index.html#install and https://socket.io/docs/#installing))

1. After you have all the required nodes, open authorize.bat.
2. After this, Internet Explorer should open, and ask you to log in if you haven't already.
3. After logging in, it will ask you to authorize the application. Click "Authorize."
4. Once you've done that, you should be directed to localhost:8082. You will be shown a text box. If there is a link in the box, copy it, and save the link.
5. Close out of Internet Explorer and authorize.bat.
6. Open Open Broadcaster Software.
7. Add a new BrowserSource.
8. Paste the link in the URL input line. (I would also suggest pasting it into a txt file, for future use)
9. Customize how you see fit!

# Running the program
When you plan to use this in stream, first make sure that OBS is closed. Then, execute start.bat, it will start the http server, then you can open OBS. If you followed the above steps correctly, the chat should read *Connected to chatroom successfully!*

# Customize your Feed
There are a few places that the feed can be customized:
* Querystring
* In constants.json
* In the font.css file

### Querystring on the URL
As of 2.0, there is only one option that could be passed in the query string, which is channel. This defaults to your twitch account, but if you need to view somebody else's chat with Webchat, add '&channel=' andtheir channel username to the end of your url.

Example of url with querystring: 'http://localhost:8080/Output.html?oauth=[yourToken]&channel=[channelName]'

### In constants.json
In the constants.json file, I've put all the custom variables that I've implemented. With all of them in this file, you can make edits to the way the chat feed acts without editing the HTML. In this version, there are the following variables:
* badgeSize: determines how big the badges are compared to the names and text
* emoteSize: determines how big the emotes are compared to the names and text
* queueSize: how many messages can be onscreen at once
* messageLife: minimum amount of time a message is on screen
* topDown: if true, new messages appear at the top and make their way down, if false, new messages appear at the bottom and make their way up
* deleteIfNotFull: if true, after a message has lived its life, it will be deleted immediately, if false, a message will not be deleted until the chat is full

### In the font.css file
The css file determines what the text and the formatting of messages will be.
Open the file in your editor of choice, and edit the given variables or add some if you see fit!

# Edits
If there are extreme errors in my coding, please call me out! I also plan to add a bit more customization, like toggling timestamps. If there is anything that anyone thinks should be added, please tell me.

### Planned updates
* adding timestamps

## Final Words
Credit to AlcaDesign for the format emotes function, couldn't have made this without it!
Find it here: https://github.com/tmijs/tmi.js/issues/11#issuecomment-116459845


If you use this project, please provide a link back here!
