---
title: What is a client-side app and why should I care?
date: '2012-06-02'
spoiler: Move the presentation of data and business logic from the server to the client, and more.
---

_This article is part of [The full Javascript stack for beginners series](/the-full-javascript-stack-for-beginners/)._

For years, we have been developing websites and applications that run on the server, using the language of our choice (Python, PHP, Ruby, etc). The server took care of all the hard work in order to respond to users' requests.

A typical workflow of a server-side app is:

1. User requests http://example.com/page
2. Server (let's say Apache) identifies /page as the requested resource and delegates the task of handling the request to a back-end language; PHP for example.
3. PHP loads its config files, makes all the necessary queries to the database (e.g. MySQL), loads and parses templates, constructs the page's HTML code and populates it with data from the database.
4. PHP gives the prepared /page back to Apache, which in turn sends the page along with all its assets (images, javascript & css files, etc) back to the user as a response.
5. In the meantime, the server keeps track of the user's session and credentials, the application's state and more.

So why is this wrong? It's not, but it can be better.

In the aforementioned example, the server takes all the burden of handling every single user request. That leaves the user waiting between each request for the server to render a whole new page and respond.

Think for example, a page where you have a list of products that you want to sort in a specific order (by price, by popularity, etc). Every time you choose a sorting option, your browser needs to make a server request and wait for the whole page to be rendered from scratch. Various techniques like server-side caching help to speed up this process, but still is not efficient.

When Ajax was introduced some years ago, it enabled the creation of more dynamic and interactive web apps. Users didn't have to wait for whole pages to reload when interacting with partial aspects of them. Extending on the product page example, most websites now allow you to sort products without waiting for a full-page refresh. Instead, your browser sends the sorting request to the server, which responds with a list of products, in the order that you asked for, that replaces the current product view in your browser. This is more efficient, as the amount of data that travel back and forth between the client and the server is reduced to the absolute minimum. All while you can continue interacting with the website with no interruptions.

Now, that looks way more efficient, but even with Ajax, there are many redundant and repetitive tasks. We still need the server to manage URLs, load and parse templates, construct the HTML code, populate it with data, keep track of the user's session, credentials and do all sorts of related housekeeping. Furthermore, if we want to develop a mobile app, our server-side code is practically useless and we have to code everything from scratch for each mobile platform (Android, iOS, etc).

A client-side app, lets you move to the next level and further decouple the presentation of data and business logic from the server to the client, and more! Essentially, a single-page Javascript app can run on the client, be completely self-contained in its business logic and user interactions and connect to an API server only for user authorization and data exchange. When designed properly, this app can be ported to multiple platforms (Android, iOS, Windows 8) with minimal modifications and maintenance cost.

Now, if you try to start developing your app from scratch using plain old javascript and/or jQuery, you will soon find out that it can get very messy. This is why it's a good idea to follow a well-established design pattern, like the MVC.

Go to the series index: [The full Javascript stack for Beginners](/the-full-javascript-stack-for-beginners/)
