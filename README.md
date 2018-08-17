# Visual Tab Manager 
*Forked from TabsPane Chrome Extension*

This fork is is a complete overhaul of the original, more compact, more pleasant for the eyes (in my taste) 😉. It is also optimized for users who use many many tabs and that also use the "discard" function in Chrome to save memory.

Most other extension of this type use screenshoot thumbnails to show you the tabs but when you use the discard function to save memory throught extension slike "The grat Discarder" instead of seeing thumbnails you just see a white empty thubnail  so it tell you nothing about the tabs and it's a waste of screenspace.

Technically the problem is that when a tab is "discarded" there is no way to take a screenshot of those tabs so you end with a lot of empty white squares in Tabulator extension and it's really annoying. Here's the URL for this issue I've opened with Chromium: https://bugs.chromium.org/p/chromium/issues/detail?id=852239

Also since I use lot of tabs I don't want big thumbnails/cards to see the content of my tabs, I prefer to have smaller tabs witt all the informations I need and be able to se more tabs at the same time instead of having to scroll to see which tabs I have in my session. 

Another problem I'e found with screenshoot is that you can't write readable information over the pictures/screenshot since their color can be any color from dark to white so it make it hard to read. If you put a solid background over the screenshot you hide it, and translucent background is not efficient to be able to read it easily. There is no CSS property that can adapt automatically to change the color of the text over pictures that change dynamically.  

So after many test I've opted to remove the screenshot function for the extension and to use the Favicons that the websites use to identify themselve and make it bigger instead of the screenshot. With the big favicons it's easy to identify from which website the tabs is originataing, also the favicon don't cover all the "cards" so just belor there is the Tittle of the page and just below there is the firs 20 character of the URL. 

**Main features of Visual Tab Manager:**

- See all of most of your tabs inside one tab.
- Move your tabs to reorder them by drag and drop.
- Close any tabs by clicking the small "X" inthe upper right corner of the "card".
- You can also send tab(s) to a new window by right cliking via the context menu.
- You can also select multiple tabs/cards by positioning your mouse beside a tab in the main screen and then dragging your mouse over all the tabs/tiles you want to select. A red lasso will appear to show you what tiles/tabs are selected. Onnce you are done juste release the mouse button and the selected tabs will be higlighted to show you they are selected. 
- With the tabs selected via the context menu you can choose to close them or send them to another window.
- You can search all your tabs from the search bar and the search bar will also search in your browser history to hel;p you to find the tabs you are looking for in case the tab was closed. The result of the search in the history will appear just below the tabs that match your search query if it matched some tabs or directly if the result did not match any tabs. 

***A little Trick:*** If you have many "Youtube" tabs just write youtube.com to see all your youtube openned tabs at once. 

To see the interface just click on the button extension in the toolbar:

![](https://i.imgur.com/vYDHenz.png)  

## Enough talk this is what the main screen looks like: 

![](https://i.imgur.com/Di0oNUL.png)

## Search function:

![](https://i.imgur.com/Ugzds7m.png)

