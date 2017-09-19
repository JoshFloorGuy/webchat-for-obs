# WebChat for OBS
Webchat is a set of scripts used to generate a clean twitch chat feed for Open Broadcaster Software.

It's fairly easy to set up, and customizable as well! (At the moment, there is only a windows release, sorry Apple users!)

## Current Functionality
* Connects to chatrooms as you
* Creates a feed with customizable length
* Assigns random colors to users if color isn't set
* Correctly displays name displayed in chat
* Shows badges and emotes
* Most of the chat is very customizable

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
8. Paste the link in the URL input line.
9. Customize how you see fit!

# Running the program
When you plan to use this in stream, first make sure that OBS is closed. Then, execute start.bat, it will start the http server, then you can open OBS. If you followed the above steps correctly, the chat should read *Connected to chatroom successfully!*

# Customize your Feed
There are a few places that the feed can be customized:
* Querystring on the URL
* In the font.css file
* In constants.json

### Querystring on the URL
To customize the Querystring, just add a property and a value, each property has a default value.
Properties that can be set at the moment are:
* channel (sets which channel you connect to, default is your channel, the channel name is all lower case) Example: '&channel=joshfloorguy'
* queue (sets how many messages are visible at once, default is 100) Example: '&queue=20'
More will be added!

Example of url with querystring: 'http://localhost:8080/Output.html?oauth=[yourToken]&channel=[channelName]&queue=20'

### In the font.css file
The css file was included to allow easy customization of the font of the text.
Open the file in your editor of choice, and edit the given variables or add some if you see fit!

### In constants.json
constants.json is opened by home.js when Output.html connects to the HTTP server created. These hold miscellaneous constants, like the scale of badges to the text. Open the file in your text editor of choice, and edit the constants given.

# Edits
If there are extreme errors in my coding, please call me out! I also plan to add a bit more customization, like toggling timestamps. If there is anything that anyone thinks should be added, please tell me.
### Planned updates
* adding timestamps

## Final Words
If you use this, please provide a link!
