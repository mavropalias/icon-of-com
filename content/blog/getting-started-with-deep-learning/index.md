---
title: Getting started with Deep Learning in 2019
date: '2019-01-17'
spoiler: What you need to know and how to go about learning it.
---

Artificial Intelligence is one of most future-proof career fields. Deep Learning--a subfield of Machine Learning, which is itself a subfield of AI--is a very exciting place to be right now. It's where most AI innovation currently happens.

Nvidia made this video to showcase some of the advancements of AI and Deep Learning:

`youtube: https://www.youtube.com/watch?v=GiZ7kyrwZGQ`

Learning Deep Learning requires time, effort and commitment. Fortunately, there is an abundance of online resources to help you learn. However, the sheer amount of information, concepts and tools that you need to comprehend and internalise can be overwhelming.

This article is far from a comprehensive list of all Deep Learning resources. My goal is to give you a primer on what you can expect to encounter as you're starting out with Deep Learning and point you to a few possible starting points--many of whom I used myself when I was starting out and found valuable.

If I'm successful, you should get a good understanding around `what` you need to know and `how` to go about learning it. I provide alternative options where possible, so that you can choose what works best for you and create your own learning plan.

## Table of contents

1. [How long will it take to learn Deep Learning?](#how-long-will-it-take-to-learn-deep-learning)
1. [What do I need to know in advance?](#how-long-will-it-take-to-learn-deep-learning)
1. [Languages for Deep Learning](#languages-for-deep-learning)

   - [Deep Learning with Python](#deep-learning-with-python)
   - [Deep Learning with JavaScript](#deep-learning-with-javascript)

1. [Maths for Deep Learning](#maths-for-deep-learning)
1. [Data Science courses](#data-science-courses)
1. [Deep Learning libraries and frameworks](#deep-learning-libraries-and-frameworks)
1. [Deep Learning courses](#deep-learning-courses)
1. [More Deep Learning resources](#more-deep-learning-resources)
1. [Conclusion](#conclusion)

## How long will it take to learn Deep Learning?

Generally, expect to spend a few months to learn the basics and get to an intermediate level. Depending on your experience and level of commitment, you should be comfortable exploring various aspects of Deep Learning and working on small projects after 6-12 months.

## What do I need to know in advance?

Prior experience in Python, probability theory, linear algebra and Machine Learning is beneficial and will help you progress faster with Deep Learning. **Don't worry if you don't have that experience.** I will explain how they all fit together, where to focus and how to learn things gradually.

## Languages for Deep Learning

The overwhelming majority of code in anything Deep Learning related (courses, articles, tutorials, papers, libraries, etc) is written in Python. JavaScript has seen significant growth recently, but it still has ways to go.

### Deep Learning with Python

Python has an amazing ecosystem and a long tradition in statistics and data science. Very quickly in your Deep Learning journey, you will stumble upon tools like:

- [NumPy](http://www.numpy.org), a Python package for scientific computing
- [Pandas](https://pandas.pydata.org), a powerful Python data analysis toolkit built on top of NumPy
- [Jupyter Notebooks](https://jupyter.org), a popular web app that allows you to create and share documents that contain code, equations, visualizations and text--and its cousin in the cloud [Google Colab](https://colab.research.google.com).

These are tools that you'll use **a lot**.

#### How to learn Python

I recommend the following resources to learn or freshen-up your Python:

- [LearnPython.org](https://www.learnpython.org) interactive course (free)
- [Introduction to Python](https://udacity.com/course/introduction-to-python--ud1110) Udacity course (free)
- [Free Code Camp](https://www.youtube.com/watch?v=rfscVS0vtbw) YouTube course (free)
- Quick 87-page book: [Lean Python: Learn Just Enough Python to Build Useful Tools](https://www.apress.com/gp/book/9781484223840)
- Learn by doing: [Learn Python the hard way](https://learnpythonthehardway.org/python3/)

You don't need to do a deep-dive in Python. Just get a good understanding of the basic concepts--it's a straightforward language, anyway. You will spend more time looking up documentation for Pandas/NymPy and your Deep Learning library, rather that worrying about Python's intricacies.

### Deep Learning with JavaScript

Why even mention JavaScript, in a article about Deep Learning? Mainly due to its meteoric rise in [popularity](https://insights.stackoverflow.com/survey/2018#most-popular-technologies) across the full-stack. Many developers are familiar with it and it's a great, low-barrier, entry into DL.

You can now do some Deep Learning in JavaScript with [Tensorflow.js](https://js.tensorflow.org) (and if that's too low-level for you, hold your tensors, [there's an abstraction for it](https://ml5js.org/)) and [Brain.js](https://github.com/BrainJS/brain.js).

If JavaScript is your thing, **this is the path of least resistance** to get your feet wet. You can experiment with these libraries and be amazed with what you can achieve with a few lines of JS. Here is a [course for Tensorflow.js](http://deeplizard.com/learn/playlist/PLZbbT5o_s2xr83l8w44N_g3pygvajLrJ-) and [one for Brain.js](https://scrimba.com/g/gneuralnetworks). There is also a [Deep Learning with JavaScript](https://www.manning.com/books/deep-learning-with-javascript) book, by the authors of TensorFlow.

It's positively impressive that we can do Deep Learning in JavaScript, but the learning resources are limited, _for now_. As mentioned earlier, Python rules Deep Learning, in terms of its [ecosystem](https://github.com/josephmisiti/awesome-machine-learning/blob/master/README.md#python), learning-resources, finding help online and **performance**.

DL depends on massive data sets, which in turn require significant processing power--namely, powerful GPUs. JavaScript libraries typically use WebGL from within the browser to access the GPU, but that doesn't unleash the GPU's full potential.

> "In our experience, for inference, TensorFlow.js with WebGL is 1.5-2x slower than TensorFlow Python with AVX. For training, we have seen small models train faster in the browser and large models train up to 10-15x slower in the browser, compared to TensorFlow Python with AVX." --[Tensorflow.js](https://js.tensorflow.org/faq/)

As the [JavaScript DL ecosystem](https://github.com/josephmisiti/awesome-machine-learning/blob/master/README.md#javascript) and browser GPU support matures, I expect JavaScript's significance in Deep Learning to grow.

## Maths for Deep Learning

> Do you need to know advanced linear algebra to do Deep Learning?
> **No.**

Similarly, to play piano you don't need to understand the physics of how strings vibrate and produce sound when they are hit by a hammer. **That knowledge will give you a better appreciation of piano's internals, but you can play piano regardless**.

Deep Learning is a vast field and you can work in it in many different ways. Like software engineering, there are many layers of abstraction where each layer requires different skills.

On the lower levels you have:

- Research scientists that push the boundaries of Deep Learning, invent new techniques and methodologies, and write papers with their findings ([Deepmind](https://deepmind.com), [IBM Watson](https://www.ibm.com/watson/), etc).
- Authors of tools like Tensorflow and PyTorch and cloud services like [Google Cloud AI](https://cloud.google.com/products/ai/) and [Amazon SageMaker](https://aws.amazon.com/sagemaker/).

If you want to do that or similar low-level work, you absolutely need strong mathematical knowledge.

If not, at least in the beginning, then don't worry. Most courses listed in the upcoming sections include a refresher on linear algebra and probability theory to help you understand the underlying concepts. Later, you will probably be using libraries that handle all that stuff for you.

I _do_ recommend doing the hard work, though. Spruce up your maths and try to understand how ML and DL work under the hood **because it's just so interesting**.

My favourite learning resource for maths, is [Khan Academy](https://www.khanacademy.org/math).

When you get to linear algebra--or if you're still intimidated by it and are looking for some intuition--do yourself a favour and check out this masterpiece: [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) series, by 3Blue1Brown on YouTube.

If you want to dig deeper, here are some free resources:

1. [Derivatives of multivariable functions](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives) by Khan Academy
1. [Linera Algebra](https://www.youtube.com/watch?v=ZK3O402wf1c&list=PLE7DDD91010BC51F8) by Prof. Gilbert Strang (MIT)
1. [Linear Algebra Refresher course (with Python)](https://eu.udacity.com/course/linear-algebra-refresher-course--ud953) by Udacity
1. [Mathematics for Machine Learning Specialization](https://www.coursera.org/specializations/mathematics-machine-learning) by Imperial College London (Coursera)

## Data Science courses

One of the challenges in Deep Learning is working with data. As mentioned earlier, expect to spend much of your time gathering, cleaning up and preparing data with [Pandas](https://pandas.pydata.org/)/[Jupyter Notebooks](https://jupyter.org)/etc for your models.

For that reason, a good understanding of Python's data science toolbox will be beneficial to your DL workflow.

Here are a few resources that I found useful. They're not of critical importance as you're starting out with Deep Learning. Keep them in mind for later use, when you feel there are gaps in your knowledge that you need to fill.

1. The [Data Scientist with Python](https://www.datacamp.com/tracks/data-scientist-with-python) DataCamp career-track is good. It will cover all the bases (including introduction to Python) but it's not free and will take some time out of your main studies--it took me a little less than a month to complete.
   <br/><br/>
   Check out their [Cleaning Data in Python](https://www.datacamp.com/courses/cleaning-data-in-python) and [Pandas Foundations](https://www.datacamp.com/courses/pandas-foundations) courses for more succinct alternatives.
1. [Introduction to Pandas with Practical Examples](https://www.pythonforengineers.com/introduction-to-pandas/) (free)

## Deep Learning libraries and frameworks

Before starting with DL courses and getting bombarded with new terminology and concepts, let's take some of the unknowns out to lessen the load.

Generally, a DL course will teach you fundamental concepts such as the [backpropagation algorithm](https://www.youtube.com/watch?v=Ilg3gGewQ5U), [Neural Networks](https://www.youtube.com/watch?v=aircAruvnKk)(NN) and Deep Neural Networks (DNN) like RNNs and CNNs. It will probably include homework where you'll have to implement some of that yourself, from scratch.

That's great for learning and you should absolutely do it. Frameworks will abstract that functionality in an heavily optimised, efficient way. When working with abstractions of _things_, it's beneficial to have an understanding of the _thing_. That gives you a powerful and valuable insight into the system you are working on.

Current popular Deep Learning frameworks, are:

- [TensorFlow](https://www.tensorflow.org) (TS) by Google. Very popular, with special libraries for mobiles and JavaScript. TensorFlow's API is not its greatest strength--it's verbose and confusing--and most people use [Keras](https://keras.io/), which sits on top of TS, abstracts its API and provides a more ergonomic interface.
- [PyTorch](https://pytorch.org) by Facebook. Newer framework that has grown rapidly in popularity. [FastAI](http://www.fast.ai/) provides a Keras-like API for PyTorch.

Other DL frameworks include [Caffe](http://caffe.berkeleyvision.org/), [Theano](http://www.deeplearning.net/software/theano/), [MXNET](https://mxnet.apache.org/), [CNTK](https://github.com/Microsoft/CNTK) and [DL4J](https://deeplearning4j.org/).

I would recommend sticking with PyTorch/FastAI or TensorFlow/Keras--all courses listed below use one of the two.

## Deep Learning courses

Knowledge of Machine Learning is beneficial before starting with Deep Learning courses. You can prepare with THE [Machine Learning course](https://www.coursera.org/learn/machine-learning) (free), by Andrew Ng. His ability to teach complex topics in an accessible and reassuring way is truly remarkable. Alternatively, for a brief introduction see [Kaggle's 4-hour Machine Learning](https://www.kaggle.com/learn/machine-learning) course (free).

I also want to bring [Neural Networks and Deep Learning, by Michael Nielsen](http://neuralnetworksanddeeplearning.com) (free) into this section, although it's an online book and not a course. It is a great learning resource that will teach you many of the core concepts behind NN and DL.

Without further ado, here are the courses. I've included a video of either the first lesson or the course's trailer--where available--so that you can get a feel for it.

#### 1. [Machine Learning & Deep Learning Fundamentals](http://deeplizard.com/learn/playlist/PLZbbT5o_s2xq7LwI2y8_QtvuXZedL6tQU)

Provider: **[DeepLizard](http://www.deeplizard.com/)<br/>**
Focus: **General**<br/>
Duration: **4 hours**<br/>
Level: **Fundamentals**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=gZmobeGL0Yg`
This series covers and explains concepts that are fundamental to Deep Learning and Artificial Neural Networks for beginners. In addition to covering these concepts, they also show how to implement some of the concepts in code using Keras.

You will learn about layers in an Artificial Neural Network, activation functions, backpropagation, Convolutional Neural Networks (CNNs), data augmentation, transfer learning and much more!

I highly recommend you start with this course, followed by #2 in this list. They're concise, accessible and will get you up to speed quickly.

#### 2. [Neural Network Programming - Deep Learning with PyTorch](http://deeplizard.com/learn/playlist/PLZbbT5o_s2xrfNyHZsM6ufI0iZENK9xgG)

Provider: **[DeepLizard](http://www.deeplizard.com/)<br/>**
Focus: **General**<br/>
Duration: **4 hours**<br/>
Level: **Beginner**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=v5cngxo4mIg`
This series is all about Neural Network programming and PyTorch. You will see how the process works from scratch and get a better understanding of NNs and Deep Learning.

Like #1 on this list, this mini-course is concise and beginner-friendly.

#### 3. [Practical Deep Learning for Coders](http://course.fast.ai/)

Provider: **[Fast.ai](https://www.fast.ai/)<br/>**
Focus: **General**<br/>
Duration: **7 weeks** (10 hours/week)<br/>
Level: **Beginner**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=IPBSB1HLNLo`
Learn how to build state of the art models without needing graduate-level maths--but also without dumbing anything down.

This 7-week course is designed for anyone with at least a year of coding experience, and some memory of high-school math. You will start with step one--learning how to get a GPU server online suitable for deep learning--and go all the way through to creating state of the art, highly practical, models for computer vision, natural language processing, and recommendation systems.

#### 4. [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)

Provider: **[Coursera](https://www.coursera.org)<br/>**
Focus: **General**<br/>
Duration: **3 months** (10 hours/week)<br/>
Level: **Intermediate**<br/>
Cost: **Free or ~\$49/month**<br/>
Certificate: **Yes, if paid**

`youtube: https://www.youtube.com/watch?v=CS4cs9xVecg`
This course is taught by Andrew Ng, co-founder of Coursera and one of the pioneers in ML/DL. He taught the first online Machine Learning course back in 2011, when he was a professor at Stanford.

In five courses, you will learn the foundations of Deep Learning, understand how to build neural networks, and learn how to lead successful machine learning projects. You will learn about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm, Xavier/He initialization, and more. You will work on case studies from healthcare, autonomous driving, sign language reading, music generation, and natural language processing. You will master not only the theory, but also see how it is applied in industry. You will practice all these ideas in Python and in TensorFlow, which you will also learn.

When you enroll, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course _for free_.

#### 5. [Deep Learning Nanodegree](https://eu.udacity.com/course/deep-learning-nanodegree--nd101)

Provider: **[Udacity](https://udacity.com/)<br/>**
Focus: **General**<br/>
Duration: **4 months** (12 hours/week)<br/>
Level: **Intermediate**<br/>
Cost: **~\$900**<br/>
Certificate: **Yes**

`vimeo: https://vimeo.com/239555907`
In this program, you’ll cover Convolutional and Recurrent Neural Networks, Generative Adversarial Networks, Deployment, and more. You’ll use PyTorch, and have access to GPUs to train models faster. You'll learn from promiment people in the DL field like Sebastian Thrun, Ian Goodfellow, Jun-Yan Zhu, and Andrew Trask.

This is the only non-free course that I recommend. It's also the closest you can get to a structured college course. Your employer might be willing to pay it for you, ask them--it has worked for me in the past.

#### 6. [Reinforcement Learning - Introducing Goal Oriented Intelligence](http://deeplizard.com/learn/playlist/PLZbbT5o_s2xoWNVdDudn51XM8lOuZ_Njv)

Provider: **[DeepLizard](http://www.deeplizard.com)**<br/>
Focus: **Reinforcement Learning (RL)**<br/>
Duration: **2 hours**<br/>
Level: **Intermediate**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=nyjbcRQ-uQ8`
This series is all about reinforcement learning (RL). Here, you'll gain an understanding of the intuition, the math, and the coding involved with RL. You'll first start out with an introduction to RL where you'll learn about Markov Decision Processes (MDPs) and Q-learning.

You'll then move on to deep RL where you'll learn about deep Q-networks (DQNs) and policy gradients. You'll also build some cool RL projects in code using Python, PyTorch, and OpenAI Gym.

#### 7. [Move 37 - Deep Reinforcement Learning](https://www.theschool.ai/courses/move-37-course/)

Provider: **[The Schoof of AI, by Siraj Raval](https://www.theschool.ai)**<br/>
Focus: **Reinforcement Learning (RL)**<br/>
Duration: **10 weeks** (5 hours/week)<br/>
Level: **Intermediate**<br/>
Cost: **Free**<br/>
Certificate: **Yes**

`youtube: https://youtu.be/Ei1YBf6qQAw`
This course will take you on a journey through the basics up to modern day techniques. Every week, you'll build apps together that will cover both toy and industry problems. You’ll be able to measure your progress along the way by chatting with your peers both online and offline at the School of AI chapters globally, taking quizzes, coding challenges, and 2 graded projects. Siraj will have weekly coding live streams to help answer any questions, and his assistant instructors are available to help in their community slack channel.

#### 8. [Cutting Edge Deep Learning for Coders](http://course.fast.ai/part2.html)

Provider: **[Fast.ai](https://www.fast.ai/)<br/>**
Focus: **General**<br/>
Duration: **7 weeks** (10 hours/week)<br/>
Level: **Advanced**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=Z0ssNAbe81M`
Learn the latest developments in Deep Learning, how to read and implement new academic papers, and how to solve challenging end-to-end problems such as natural language translation. You'll develop a deep understanding of neural network foundations, the most important recent advances in the fields, and how to implement them in the world's fastest deep learning libraries, fastai and pytorch.

#### 9. [Convolutional Neural Networks for Visual Recognition (CS231n)](http://cs231n.stanford.edu)

Provider: **[Stanford University](https://stanford.edu/)<br/>**
Focus: **Computer Vision**<br/>
Duration: **10 weeks**<br/>
Level: **Advanced**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=vT1JzLTH4G4`
Computer Vision has become ubiquitous in our society, with applications in search, image understanding, apps, mapping, medicine, drones, and self-driving cars. Core to many of these applications are visual recognition tasks such as image classification, localization and detection. This course is a deep dive into details of the deep learning architectures with a focus on learning end-to-end models for these tasks, particularly image classification. During the 10-week course, students will learn to implement, train and debug their own neural networks and gain a detailed understanding of cutting-edge research in computer vision.

The course focuses on teaching how to set up the problem of image recognition, the learning algorithms (e.g. backpropagation), practical engineering tricks for training and fine-tuning the networks and guide the students through hands-on assignments and a final course project. Much of the background and materials of this course will be drawn from the [ImageNet Challenge](http://image-net.org/challenges/LSVRC/2014/index).

The course material (including lecture videos) are available for free.

#### 10. [Deep Learning for Natural Language Processing](https://github.com/oxford-cs-deepnlp-2017/lectures)

Provider: **[University of Oxford](https://www.cs.ox.ac.uk/)<br/>**
Focus: **Language**<br/>
Duration: **n/a**<br/>
Level: **Advanced**<br/>
Cost: **Free**<br/>
Certificate: **No**

`youtube: https://www.youtube.com/watch?v=RP3tZFcC2e8`
This is an advanced course on natural language processing. Automatically processing natural language inputs and producing language outputs is a key component of Artificial General Intelligence. The ambiguities and noise inherent in human communication render traditional symbolic AI techniques ineffective for representing and analysing language data. Recently statistical techniques based on neural networks have achieved a number of remarkable successes in natural language processing leading to a great deal of commercial and academic interest in the field.

This is an applied course focussing on recent advances in analysing and generating speech and text using recurrent neural networks. The course covers a range of applications of neural networks in NLP including analysing latent dimensions in text, transcribing speech to text, translating between languages, and answering questions.

The course material (including lecture videos) are available online for free.

## More Deep Learning resources

The following is a list of helpful and interesting resources to further your knowledge in Deep Learning.

### Articles & Papers

1. [A guide to convolution arithmetic for deep learning](https://arxiv.org/abs/1603.07285)
1. [The Unreasonable Effectiveness of Recurrent Neural Networks](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)
1. [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/)--also check his [other articles](http://colah.github.io/)

### Books

1. [Deep Learning](http://www.deeplearningbook.org): You will find many mentions of "The Deep Learning book" during your studies. This is it; an _advanced_ resource for students and practitioners of DL.
1. [Deep Learning with Python](https://www.manning.com/books/deep-learning-with-python): An excellent introduction to DL, written by the creator of Keras.
1. [Machine Learning Yearning, by Andrew Ng](http://www.mlyearning.org): This book is focused not on teaching you ML algorithms, but on how to make ML algorithms work. Some technical AI classes will give you a hammer; this book teaches you how to use the hammer. If you aspire to be a technical leader in AI and want to learn how to set direction for your team, this book will help.
1. [Natural Language Processing with Python](https://www.nltk.org/book/): It provides a highly accessible, practical, introduction to the field of NLP.

### Social media

1. [Articifial Intelligence & Deep Learning](https://www.facebook.com/groups/DeepNetGroup/) Facebook group
1. [Deep Learning](https://www.facebook.com/groups/DeepLearnng/) Facebook group
1. [r/LearnMachineLearning](https://reddit.com/r/learnmachinelearning/) subreddit
1. [r/MachineLearning](https://reddit.com/r/MachineLearning/) subreddit

### Websites

1. [Deepmind](https://deepmind.com/): A world leader in AI research--you might have heard of their [Alpha Go project](https://deepmind.com/research/alphago/). Their website contains lots of interesting material.
1. [Google AI](https://ai.google): AI-related stories, research, education and tools from Google.
1. [Kaggle](https://www.kaggle.com): _The_ place for data science projects and competitions. If you are looking to get your hands on a number of DL projects, look no further. They also have a set of [brief learning courses](https://www.kaggle.com/learn/overview).
1. [Machine Learning Mastery](https://machinelearningmastery.com/start-here/): An accessible learning resource for all areas of ML and DL.

### YouTube channels

1. [3Blue1Brown](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw): As discussed earlier, this is an excellent learning resource for linear algebra, calculus, neural networks and more.
1. [Rachel Thomas](https://www.youtube.com/channel/UC_pSCYWbMn4JcsxbWOzkgEQ): High quality, Deep Learning related talks, by the founder of Fast.ai.
1. [Siraj Raval](https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A): Very accessible and educational material on DL and related areas.
1. [Two Minute Papers, by Károly Zsolnai-Fehér](https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg): Károly spends hours reading the latest research literature so that we can _watch_ the most interesting papers in his amazing two-minute videos.

## Conclusion

Deep Learning is a vast field with many opportunities for learning, exploring and discovering exciting new things.

There is no one correct way that you _should_ go about learning Deep Learning. Start where you feel comfortable and let your desire for knowledge and the things that you discover guide you along your learning path.

I will leave you with this talk by Rachel Thomas:

`youtube: https://www.youtube.com/watch?v=FfQ90Q8czzQ`
