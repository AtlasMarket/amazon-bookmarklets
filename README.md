# Tracking Bookmarklet

Due to latest changes in Amazon tracking presentation, this bookmarklet is designed
to extract the tracking information and automatically submit it to Atlas Market.

## How to use

* Drag the following link to your bookmarks: <a href="javascript:(function()%7Bconst%20script=document.createElement('script');script.setAttribute('src','https://atlasmarket.github.io/amazon-tracking-bookmarklet/index.js');document.body.appendChild(script);%7D());">Retrieve Tracking</a>
  
* Navigate to the tracking page of the tracking you want to submit
  
* Click on the bookmark you just added

* Press "OK" and continue the process on the site

## Troubleshooting

In case you can't drag the link to your bookmarks, you can create it manually this way:

* Name: Retrieve Tracking
* Location:
  ```js
  javascript:(function()%7Bconst%20script=document.createElement('script');script.setAttribute('src','https://atlasmarket.github.io/amazon-tracking-bookmarklet/index.js');document.body.appendChild(script);%7D());
  ```
