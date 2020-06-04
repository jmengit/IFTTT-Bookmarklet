# IFTTT Bookmarklet
Browser bookmarklet to send up to 3 user-selectable values to IFTTT webhooks service

## Configuration
### First - Choose 'silent' or 'window' version

The silent version sends your data to IFTTT with no confirmation. The window version will open a new tab or window showing IFTTT's confirmation of receipt of your GET command.

### Second - Configure "params" variable

Event: Put your IFTTT EventName between the quotes
Event: Put your IFTTT WEbhook Key between the quotes
val1-3: Put whatever you want to be sent to IFTTT in your HTTP GET body

### Third - Create a bookmarklet

-Create a new bookmark in your browser
-Copy all code from "javascript:" through to the last semicolon
-Past this as the link in your new bookmark

### Use

Simply click the bookmarklet and you should see IFTTT receive the data you sent

## Wishlist

If you know anything about javascript you will quickly see my implentation to get this to work is brutally bad. I'm a python guy and I dont know the first thing about javascript. To that end if you stumble accross this and can contribute with some better code PLEASE do so. I would really like to get the following working at some point:
- Get a poper JSON body sent via a XMLHttpRequest POST command
- Implement code to receive responses from IFTTT via XMLHttpRequest.status/.response, etc.

PLEASE submit pull requests if you can improve this in any way.

## Relevent IFTTT documentation can be found here

https://ifttt.com/maker_webhooks

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
