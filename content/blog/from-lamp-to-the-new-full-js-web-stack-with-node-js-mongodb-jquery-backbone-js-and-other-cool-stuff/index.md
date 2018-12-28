---
title: From LAMP to the new full-JS stack
date: '2011-11-02'
spoiler: Since 1999 I have been developing my websites on the LAMP stack. Time for a change.
---

Since 1999 I have been developing my websites on the LAMP (Linux, Apache, MySQL, PHP) stack, and it has served me well. It was very easy to learn and get up to speed with PHP (a bit too easy maybe), while setting up Apache/MySQL for development work is trivial. The best part was, and still is, the plethora of straightforward and affordable LAMP hosting solutions, which have played a key role in the widespread adoption of PHP and its accompanying technologies.

As I like to keep myself up-to-date with new technologies and design/development paradigms, every time I want to learn a new technology I just create a new project (works better that a 'hello world' tutorial). When I was learning PHP/MySQL, I developed two gaming community websites: Noobwars and The-Core (the former has changed hands since then and the latter is no longer active), both full-blown news/community/CMS applications handwritten end-to-end. Then, as I was delving deeper into Flash & ActionScript, I redesigned my portfolio website in full-Flash (I know ... I have seen the light since then!). When I wanted to get a better understanding of jQuery/CSS3/HTML5, I developed [Penguspy](http://penguspy.com).

Recently, I had an idea for a new project (more complex and involved), so I went out shopping for the latest and greatest in web technologies. With my background in PHP I started looking at PHP frameworks and one managed to impress me: [Symfony](http://www.symfony-project.org/) 1.4. I went ahead, read the documentation, completed the tutorials and I was quite happy with it. But at that time (around May), a new version of Symfony was in the works; version 2.0. Based on the fact that my project will take about a year to go live, I thought it would be a good opportunity to start developing on the newer Symfony version, which is backwards-incompatible, in order to rip its benefits. Again, I went through the [documentation](http://symfony.com/doc/current/) of the second version ... twice. I want to emphasize their excellent documentation, where I learned lots of new things that will be useful to me even outside of Symfony. I particularly enjoyed the section on [caching](http://symfony.com/doc/current/book/http_cache.html). In the end, I found Symfony 2 to be an amazing PHP framework, but it is so amazing (and so different than regular PHP) that in order to use it I basically have to re-learn everything from scratch and do things the Symfony-way. Well, if I have to learn everything from scrath I may as well go ahead and learn another language/framework.

I always had an interest in Python, which led me to the sexiness of [Django](https://www.djangoproject.com/). Django is great and coding in it is enjoyable. However, as the architecture of my project was maturing, I realised that I don't really need an MVC framework running in the backend. I need my clients to run autonomously on many platforms (Android, iOS, Windows 8, Mac OS) and scale well across devices (mobiles, tablets, desktops), making HTML5/Javascript the only viable write once (almost), run anywhere solution.

Ultimately, I decided to develop a RESTful API on the server-side and move most of the business logic to the client, writing a middleware JavaScript library that will handle the client integration between the OS/device and the API, and creating the MVC architecture, again, on the client. This way, I only need to develop what is really needed on the backend (the API) and have a client code-base that is easily maintainable and can be ported to multiple platforms with little effort.

While I was deciding on the API approach. I came across [Node.js](http://nodejs.org/) and immediately fell in love with it. Its high responsiveness, asynchronous nature and performance, make Node an amazing platform to develop the API. As an added bonus I can re-use my experience in JavaScript on the server-side.

For the MVC client part I am using jQuery + jQueryMobile with [Backbone.js](http://documentcloud.github.com/backbone/) and [Mustache](http://mustache.github.com/). Backbone.js has gained lots of momentum as the framework for client-side MVC apps, while Mustache provides a very good template engine for your HTML code. I also evaluated [Sencha Touch](http://www.sencha.com/products/touch/) as an alternative MVC engine, but I found that its cons (the significant learning curve,  the large file-size of the library and the fact that I would have to do everything the Sencha-way) outweighed the pros.

In regards to the database, the project requires lots of data manipulation due to its social nature and I was worried that a traditional relational database might not be the best solution, performance-wise, thus a [NoSQL](http://en.wikipedia.org/wiki/NoSQL) database seemed like a more appropriate fit (and of course, an opportunity to learn more about NoSQL DBs).

It was time to go out for NoSQL database shopping. [Cassandra](http://cassandra.apache.org/) turned out to be the perfect match for the project's requirements, however little support for Node exists as of yet. Instead, I settled down with the very close second choice [MongoDB](http://www.mongodb.org/). What I find fascinating about MongoDB is that you get JSON objects as query results. Coming from a MySQL background, this is something very new for me and very welcome! With such a JavaScript-heavy app, getting JSON objects from the database makes the development process so much easier.

So, there it is, a full JS stack of technologies I am working with (and learning!) for the project:

- Server:
  - MongoDB (database)
  - Node (web server & development platform)
- Client:
  - jQuery + jQueryMobile
  - Backbone.js
  - Mustache (templating)
  - customProjectLibrary.js

This post turned out to be longer that I anticipated so I will leave out the part about choosing the right IDE, code repo/versioning, CSS/JS enhancers, hosting and more for a part 2. Overall, it is an extremely satisfying experience to work with and learn so many cutting-edge technologies on a very exciting project! I have learned so many new things in a very short period of time and although I had to spend some time searching for the most appropriate solutions, it was time well spent as it helped me improve my understanding on a number of development-related areas.

Although I am not an expert in Node (I am still learning), if you have been developing on LAMP since forever and want to try something cutting-edge and challenging (in a satisfactory way), I encourage you to give the full JS stack a try. It is a very different experience that might seem chaotic and overwhelming at first, but once you get used to it and understand the logic you will have a hard time going back.
