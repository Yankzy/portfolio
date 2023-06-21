import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { ChatGptContext, directChat, updateFireStore, useChatContext } from "./utils/chatUtils";
import { useContext, useState } from "react";
import { ChatContext } from "./ChatContext";


interface FormValues {
  message: string;
}

const convo = `


G
gee1
gee1
Mar 31, 2023, 1:15 AM

Hello there

I want to develop a life coach from training ChatGpt or an AI model.

I want the Chatbot to stay in Role, use a question by question approach and to stay within the extensive parameters of coaching models. Example, when the bot is asked about Gambling, space, teaspoons etc it will guide the conversation back to on-topic

Can you do and what does this consist?

This message relates to:

I will make fine tuned ai model
K
kuyatehyankz
Me
Mar 31, 2023, 1:15 AM
Hello thanks for contacting me.

I'm off the keyboard now, will reply as soon I see the message.

Thanks.

K
kuyatehyankz
Me
Mar 31, 2023, 4:44 AM
Hi, appreciate your message

K
kuyatehyankz
Me
Mar 31, 2023, 4:46 AM
The best approach to achieve your desired results will to use embeddings

K
kuyatehyankz
Me
Mar 31, 2023, 4:47 AM
I can help you with that

K
kuyatehyankz
Me
Mar 31, 2023, 4:50 AM
The tech I use:
- Openai embedding API to embed documents or conversal text
- Database to store and query embeddings
- GraphQL API for your embeddings
- Reactjs for web frontend
- React Native for a mobile app (Android & iPhone)

Prices:
- Full functional graphQL API that makes, stores and query embeddings using openai is $500.
- React web frontend $500 (Inference to Openai API & one page to chat).
- Mobile app is $750 one screen ($10 per screen for additional screens)

I do additional services:
- Deployment
- App submission (App store & Play store): $150
- Use specialized vector database for the embeddings (much faster for your users but more work): $150
- Site reliability engineering (SRE) to administer your system in production

K
kuyatehyankz
Me
Mar 31, 2023, 4:50 AM
Let me know which services interest you and I can answer your questions about that


G
gee1
gee1
Mar 31, 2023, 8:20 AM

As a client who is new to this and doesn't know the technical detail. I would like a total functional life coach that is like ChatGpt in fluid conversation but keeps user on topic and detects the appropriate times to present user with the option to take then through a step-by-step coaching session. I want to embed the app into a flutter app that I being developed for me


G
gee1
gee1
Mar 31, 2023, 8:22 AM

.So inform me what I need from your price menu (I do need the Vector Database?


G
gee1
gee1
Mar 31, 2023, 8:23 AM

apologies, I meant to say, So inform me what I need from your price menu (I think I need the Vector Database), others please ?

K
kuyatehyankz
Me
Mar 31, 2023, 8:31 AM
Life coach about what?

K
kuyatehyankz
Me
Mar 31, 2023, 8:32 AM
do you have articles, documents or chat history about the topic?


G
gee1
gee1
Mar 31, 2023, 8:33 AM

About life, Using a couple of frameworks/models


G
gee1
gee1
Mar 31, 2023, 8:33 AM

no I don't have


G
gee1
gee1
Mar 31, 2023, 8:33 AM

Im just tying to understand how this works? what you'd need? if possible?


G
gee1
gee1
Mar 31, 2023, 8:34 AM

Lets say I wanted TONY ROBBINS bot, he uses NLP, CBT models to take users through questioning and resolving issues

K
kuyatehyankz
Me
Mar 31, 2023, 8:39 AM
well if you don't any data to train or make embeddings, we would have use prompt engineering to get the result you want

K
kuyatehyankz
Me
Mar 31, 2023, 8:41 AM
you would give me all the topics you want the bot to answer, I will design the prompts and if a question is out of context, the bot will send a generic message like "That's out of scope of my knowledge"


G
gee1
gee1
Mar 31, 2023, 8:56 AM

So you think you can use prompt engineering to create a fluid conversational Life coach bot as described? without Data?

K
kuyatehyankz
Me
Mar 31, 2023, 8:56 AM
Yes!

K
kuyatehyankz
Me
Mar 31, 2023, 8:57 AM
I will use the knowledge base of chatgpt and prompts to ask questions and keep it within context

K
kuyatehyankz
Me
Mar 31, 2023, 9:00 AM
I will make a mobile app, integrate with openai for inference and prompt engineering to chat

K
kuyatehyankz
Me
Mar 31, 2023, 9:02 AM
I will give you unlimited revision to make it's perfect


G
gee1
gee1
Mar 31, 2023, 9:02 AM

So I will not be asked for any more money ?

K
kuyatehyankz
Me
Mar 31, 2023, 9:03 AM
From me, no


G
gee1
gee1
Mar 31, 2023, 9:04 AM

From who then?

K
kuyatehyankz
Me
Mar 31, 2023, 9:04 AM
Well you have to pay openai monthly


G
gee1
gee1
Mar 31, 2023, 9:05 AM

how much?

K
kuyatehyankz
Me
Mar 31, 2023, 9:06 AM
depends your usage

K
kuyatehyankz
Me
Mar 31, 2023, 9:07 AM
$0.002 per 1,000 tokens. You can think of tokens as words

K
kuyatehyankz
Me
Mar 31, 2023, 9:07 AM
it's really cheap!


G
gee1
gee1
Mar 31, 2023, 9:08 AM

no I don't mean that(running cost) but I mean set up

K
kuyatehyankz
Me
Mar 31, 2023, 9:10 AM
there's setup for openai

K
kuyatehyankz
Me
Mar 31, 2023, 9:10 AM
there's NO** setup for openai

K
kuyatehyankz
Me
Mar 31, 2023, 9:11 AM
only need API key


G
gee1
gee1
Mar 31, 2023, 9:11 AM

there are no extra, hidden fees apart from yours?

K
kuyatehyankz
Me
Mar 31, 2023, 9:11 AM
nope

K
kuyatehyankz
Me
Mar 31, 2023, 9:12 AM
well to submit your app to app store and play store

K
kuyatehyankz
Me
Mar 31, 2023, 9:12 AM
you have to for those

K
kuyatehyankz
Me
Mar 31, 2023, 9:13 AM
you have PAY for those


G
gee1
gee1
Mar 31, 2023, 9:14 AM

yes I know


G
gee1
gee1
Mar 31, 2023, 9:14 AM

great, thx for clarity

K
kuyatehyankz
Me
Mar 31, 2023, 9:14 AM
well that's it


G
gee1
gee1
Mar 31, 2023, 9:14 AM

have created a similar bot?

K
kuyatehyankz
Me
Mar 31, 2023, 9:14 AM
you are welcome

K
kuyatehyankz
Me
Mar 31, 2023, 9:15 AM
https://chatbot-ui-yankzy.vercel.app/

K
kuyatehyankz
Me
Mar 31, 2023, 9:15 AM
you cannot use it though, it require my API key


G
gee1
gee1
Mar 31, 2023, 9:16 AM

I can't see it functioning?


G
gee1
gee1
Mar 31, 2023, 9:17 AM

Video? or something?


G
gee1
gee1
Mar 31, 2023, 9:17 AM

I really want to be reassured that my idea can be achieved to high standard

K
kuyatehyankz
Me
Mar 31, 2023, 9:19 AM
https://meet.google.com/xzx-dxqs-cyu
K
kuyatehyankz
Me
Mar 31, 2023, 9:19 AM
let me show you

K
kuyatehyankz
Me
Mar 31, 2023, 9:23 AM
or you can get an API key from openai and use that to see for yourself

K
kuyatehyankz
Me
Mar 31, 2023, 9:26 AM
Are you going to join the Google meet?


G
gee1
gee1
Mar 31, 2023, 10:10 AM

So sorry im actually in the airport on my way to the UK,


G
gee1
gee1
Mar 31, 2023, 10:10 AM

I am checking phone but will board soon


G
gee1
gee1
Mar 31, 2023, 10:11 AM

I will contact you on my arrival


G
gee1
gee1
Mar 31, 2023, 10:11 AM

Thanks fo you time

K
kuyatehyankz
Me
Mar 31, 2023, 11:05 AM
You welcome

K
kuyatehyankz
Me
Apr 01, 2023, 10:05 AM
Good morning

K
kuyatehyankz
Me
Apr 01, 2023, 10:06 AM
Is there anything left to clarify?

K
kuyatehyankz
Me
Apr 01, 2023, 10:06 AM
I really want to work for you


G
gee1
gee1
Apr 04, 2023, 10:56 AM

Hey thank you for your time, I am discussing with partner but I would also like to work with you. Ill get back to you soon, thx

K
kuyatehyankz
Me
Apr 04, 2023, 11:04 AM
Will be my pleasure


G
gee1
gee1
Apr 04, 2023, 1:35 PM

Hi there, when can we do a Zoom?

K
kuyatehyankz
Me
Apr 04, 2023, 1:42 PM
I use google meet

K
kuyatehyankz
Me
Apr 04, 2023, 1:42 PM
https://meet.google.com/xzx-dxqs-cyu
Your message was blocked by our Trust and Safety team due to a Terms of Service violation. gee1 won't be able to see it.


K
kuyatehyankz
Me
Apr 04, 2023, 1:42 PM
I'm available now

K
kuyatehyankz
Me
Apr 04, 2023, 1:54 PM
Waited for you, let me know when you can join the meeting


G
gee1
gee1
Apr 04, 2023, 2:04 PM

Hi there, apologies


G
gee1
gee1
Apr 04, 2023, 2:04 PM

are you avaiable now?

K
kuyatehyankz
Me
Apr 04, 2023, 2:06 PM
Yes I'm on the meeting now


G
gee1
gee1
Apr 04, 2023, 2:06 PM

ok joining now


G
gee1
gee1
Apr 04, 2023, 3:16 PM

Hi there, It was a pleasure talking to you earlier on the Google Meets platform. As discussed I would like you you to Develop my entire Christian+Openai chatbot app. A combination of a trained openai model and a Bible app that contained these features ...1) Articles / blogs that can be added from database and will be displayed on mobile apps. 2) Notes, highlighting 3) Prayer requests. 4) Testimonie 5) Christian Books 6) Church Social platform 7) Bible versions to read, highlight, copy to notes *) Analytics page that graphically represents the users goals, milestones, daily tasks etc


G
gee1
gee1
Apr 04, 2023, 3:17 PM

Although I have applied for a patent, I would appreciate it if you would NOT disclose any of my ideas, concepts etc to others outside of you.


G
gee1
gee1
Apr 04, 2023, 3:17 PM

Appreciate it Yankz, thank you:)

K
kuyatehyankz
Me
Apr 04, 2023, 3:22 PM
You can count on total confidentiality from me

K
kuyatehyankz
Me
Apr 04, 2023, 3:24 PM
Appreciate your business

K
kuyatehyankz
Me
Apr 04, 2023, 3:24 PM
Will be sending you a message tomorrow and we can take from there


G
gee1
gee1
Apr 04, 2023, 4:00 PM

Excellent Yankz, looking forward to moving forward, thx

K
kuyatehyankz
Me
Apr 05, 2023, 1:34 PM
Here's your Custom Offer

$750
I will create a chatgpt ai chatbot for your website, app etc
Android & iOS chatbot with following functionalities:
1. Integrates with openai API
2. Gives counselling to users following a structured framework that the client will provide.
3. Sends daily devotionals and testimonies

Read more
Your offer includes
3 Revisions
7 Days Delivery
View Order

G
gee1
gee1
Apr 05, 2023, 2:16 PM

Hi Yankz I am happy to start now, I just wanted to clarify one thing.


G
gee1
gee1
Apr 05, 2023, 2:18 PM

When the bot goes into Coach session mode and takes the user through a structured framework, there will be important and standard information to be collected and sent to the Analytics page within the app, this information will be transformed into graphical representations.


G
gee1
gee1
Apr 05, 2023, 2:19 PM

Now, the developer will be connecting the bot to the app but can you create what needs to be created in order for the bot to send the information to the the analytics page?


G
gee1
gee1
Apr 05, 2023, 2:19 PM
Translate to English

API ?


G
gee1
gee1
Apr 05, 2023, 2:21 PM

Other than that , Im good to go

K
kuyatehyankz
Me
Apr 05, 2023, 2:39 PM
What specific information will the analytics need?

K
kuyatehyankz
Me
Apr 05, 2023, 2:39 PM
The daily devotionals?

K
kuyatehyankz
Me
Apr 05, 2023, 2:46 PM
oh ok, I didn't see the top message.

K
kuyatehyankz
Me
Apr 05, 2023, 2:47 PM
we can store the Coach session mode data and your developer can analyse it


G
gee1
gee1
Apr 05, 2023, 5:48 PM

I need to get these details clear because I want to simple, long and smooth working relationship with you, without the confusion at the end

K
kuyatehyankz
Me
Apr 05, 2023, 5:49 PM
sure

K
kuyatehyankz
Me
Apr 05, 2023, 5:50 PM
describe what you need and I will put it in the gig


G
gee1
gee1
Apr 05, 2023, 5:53 PM

I would like you to build the Api required to take the data to the end point

K
kuyatehyankz
Me
Apr 05, 2023, 5:53 PM
what?

K
kuyatehyankz
Me
Apr 05, 2023, 5:54 PM
describe the functionalities of the API

K
kuyatehyankz
Me
Apr 05, 2023, 5:55 PM
if you only need the coaching data, you don't need an API for that


G
gee1
gee1
Apr 05, 2023, 5:56 PM

Sorry for the delay, I am speaking to the developer at the same time

K
kuyatehyankz
Me
Apr 05, 2023, 5:56 PM
it's ok


G
gee1
gee1
Apr 05, 2023, 5:57 PM

Yes I am not sure what I am actually saying, Ive just heard that the specific data that will be taken from the Bot will need to transfer from bot to analytics page from an end point??

K
kuyatehyankz
Me
Apr 05, 2023, 6:00 PM
tell the developer that he will get the code for a bot which he will integrate into his code base so that you have one app that functions as one.

K
kuyatehyankz
Me
Apr 05, 2023, 6:01 PM
you don't an endpoint, the analytics page can query the firestore database for the coaching data

K
kuyatehyankz
Me
Apr 05, 2023, 6:01 PM
you don't need**


G
gee1
gee1
Apr 05, 2023, 6:04 PM

I see, thank you for that clarity, appreciated


G
gee1
gee1
Apr 05, 2023, 6:04 PM

Well brother im ready

K
kuyatehyankz
Me
Apr 05, 2023, 6:05 PM
let's do!

K
kuyatehyankz
Me
Apr 05, 2023, 6:10 PM
let's do it!


G
gee1
gee1
Apr 05, 2023, 6:11 PM

please send offer


G
gee1
gee1
Apr 05, 2023, 6:12 PM

sorry you have


G
gee1
gee1
Apr 05, 2023, 6:17 PM

I will start sending some content in 1 hour, thx


G
gee1
gee1
Apr 06, 2023, 9:09 AM

Good Morning Yankz. Has the Information helped you understand ... let me know your thoughts and what else you need, thanks


G
gee1
gee1
Apr 22, 2023, 2:22 PM

You've accused me of far too many things. I don't want your work, I will never download it, Im not interested in NOT PAYING FOR SOMETHING and then taking it... I don't know who you think you are dealing with. As I SAID before the cancelation request, Im Ok either way...you continue or you don't,


G
gee1
gee1
Apr 22, 2023, 2:22 PM

You think I need to try and take your work??? Please


G
gee1
gee1
Apr 22, 2023, 2:22 PM

Fiverr will prove I will not download any of it


G
gee1
gee1
Apr 22, 2023, 2:23 PM

I have been on this platform for over 13 years, spend probably well over $100,000, Ive always been honest

K
kuyatehyankz
Me
Apr 22, 2023, 2:25 PM
If you are honest, why are you trying to give me more under pretense of revision?


G
gee1
gee1
Apr 22, 2023, 2:37 PM

Yankz, you haven't been very attentive from the start. Even within the last few hours, I said I hadn't had time to review the bot extensively, l continued saying that ill send a few revisions later. Typical of your behaviour throughout... you sent screenshots and delivery without much explanation. Then afterwards Delivery.


G
gee1
gee1
Apr 22, 2023, 2:39 PM

This is similar to when we started to speak, I was attempting to share the big picture but you... Lets focus on this and then we can mover to other things afterwards. OK, I said, thinking that you will address the other things at some point BUT it always seemed to get to a place where you were looking to close the the Gig


G
gee1
gee1
Apr 22, 2023, 2:39 PM

GET the WHOLE picture from the client then section it up into a roadmap, so you and the client know where you are and what you've completed and where you're going next!


G
gee1
gee1
Apr 22, 2023, 2:41 PM

You leave so many things unclear that it becomes MiRKY and looks like Im wanting to extract blood from a stone, I am simply trying get to what the original vision was, simple! if you and I had sat down and you said no to this and yes to that ...ok


G
gee1
gee1
Apr 22, 2023, 2:41 PM

I am in no way playing games with , I don't , its not my character

K
kuyatehyankz
Me
Apr 22, 2023, 2:43 PM
Graham, you ask for all those revisions, but the moment you got my code, you asked to cancel the order. Stop talking about this and that. You have been testing the app for over a week now


G
gee1
gee1
Apr 22, 2023, 2:43 PM

PLease Yankz you have absolutely no idea who I am


G
gee1
gee1
Apr 22, 2023, 2:43 PM
Translate to English

no idea


G
gee1
gee1
Apr 22, 2023, 2:43 PM

seriously


G
gee1
gee1
Apr 22, 2023, 2:44 PM

FIVERR will inform you if I EVER DOWNLOAD ANY OF YOUR FILES


G
gee1
gee1
Apr 22, 2023, 2:44 PM

I WILL SPEAK TO THEM ALSO


G
gee1
gee1
Apr 22, 2023, 2:44 PM

I WILL NEVER!!!!!! DOWNLOAD THINGS THAT DO NOT BELONG TO ME

K
kuyatehyankz
Me
Apr 22, 2023, 2:45 PM
How will Fiverr know if you have downloaded it?


G
gee1
gee1
Apr 22, 2023, 2:45 PM

I have walked away from more money than you've EVER seen in your life ..I DONT NEED to prove anything to you. People who know me will laugh at you, telling then I wanted to take $800 from you

K
kuyatehyankz
Me
Apr 22, 2023, 2:46 PM
Tell me, why do you want to cancel?


G
gee1
gee1
Apr 22, 2023, 2:46 PM

Please send email to Fiverr I will do the same and I WILL DO the same


G
gee1
gee1
Apr 22, 2023, 2:46 PM

I will explain that I do not want the files


G
gee1
gee1
Apr 22, 2023, 2:47 PM

They can stop anyone from downloading and inform you if I have (which I havnt)


G
gee1
gee1
Apr 22, 2023, 2:47 PM

Yankz, my whole issue was that I know nothing about this industry, and I wanted to be lead by someone who cared enough to do that


G
gee1
gee1
Apr 22, 2023, 2:48 PM

not suggest I get a plan that would cost 70 per month ,


G
gee1
gee1
Apr 22, 2023, 2:48 PM

I don't know what to do with files and I don't care

K
kuyatehyankz
Me
Apr 22, 2023, 2:49 PM
The Pinecone free is for small apps like yours and is completely free to use


G
gee1
gee1
Apr 22, 2023, 2:49 PM

I KNOW

K
kuyatehyankz
Me
Apr 22, 2023, 2:50 PM
dude, I give your an offer to your app top to bottom, you said no just do the bot another developer will do the rest, now you want to sneak the rest of the work on me.


G
gee1
gee1
Apr 22, 2023, 2:51 PM

Please explain this Yankz, I have no clue about what you're saying here


G
gee1
gee1
Apr 22, 2023, 2:51 PM

Rest of the work??


G
gee1
gee1
Apr 22, 2023, 2:52 PM

Waiting???


G
gee1
gee1
Apr 22, 2023, 2:52 PM

You have only done the Bot? what other work?

K
kuyatehyankz
Me
Apr 22, 2023, 2:56 PM
you did ask me to submit to app store and setup digital ocean for the API. Asking me to do design work on the app, now you saying you want me to do add etra prompts that you are working on. I'm willing to work but for the right price


G
gee1
gee1
Apr 22, 2023, 2:56 PM

No No No Yankz, you actually got it wrong


G
gee1
gee1
Apr 22, 2023, 2:56 PM

Ill explain after you finish

K
kuyatehyankz
Me
Apr 22, 2023, 2:57 PM
why do you want to cancel the order?

K
kuyatehyankz
Me
Apr 22, 2023, 2:58 PM
and don't say I dont want or will not download, that's not an excuse for cancelation after you have my code


G
gee1
gee1
Apr 22, 2023, 3:00 PM

Yankz, do you remember this


Screenshot 2023-04-06 at 10.10.41.png
(224.51 kB)


G
gee1
gee1
Apr 22, 2023, 3:01 PM

These were the prompts I was originally spoke of. Coach and Chat were only 2 of them


G
gee1
gee1
Apr 22, 2023, 3:01 PM

there was QUIZ, and SERMON


G
gee1
gee1
Apr 22, 2023, 3:02 PM

I you early on 'should I explain more about the rest of the Prompts, you said no lets focus on these for now


G
gee1
gee1
Apr 22, 2023, 3:04 PM

The Chat and Coach took a long time and where more in-depth.. that's why it looks like I want more now

K
kuyatehyankz
Me
Apr 22, 2023, 3:04 PM
I said let's focus on what we agreed on. We agreed on a bot I made a bot for you.


G
gee1
gee1
Apr 22, 2023, 3:04 PM

its all the Bot ???


G
gee1
gee1
Apr 22, 2023, 3:05 PM

The Chat and the Coach ...is a Bot


G
gee1
gee1
Apr 22, 2023, 3:05 PM

they're personalities of the same bot (different functionalities)


G
gee1
gee1
Apr 22, 2023, 3:05 PM

skillsets

K
kuyatehyankz
Me
Apr 22, 2023, 3:06 PM
You sound like an educated man, from what we agreed on, what's left? (You look at the order to refresh your mind)


G
gee1
gee1
Apr 22, 2023, 3:07 PM

I have refreshed, Ive gone back to read everything and remember all that was said in our meetings ...my partner was there and tracked it all aswell


G
gee1
gee1
Apr 22, 2023, 3:08 PM

I understand were you're coming from(especially because you don't clarify as much as I feel you could), I also see where im coming from


G
gee1
gee1
Apr 22, 2023, 3:09 PM

LOOK

K
kuyatehyankz
Me
Apr 22, 2023, 3:12 PM
Look, I was late to deliver because I had to make an API to make pinecone work. You didn't cancel then. You asked for all the revisions and wait to have my code, then you ask for extra work, when I refused you want to cancel. That's the definition of fraud


G
gee1
gee1
Apr 22, 2023, 3:13 PM

What did I get out of it, if its fraud

K
kuyatehyankz
Me
Apr 22, 2023, 3:13 PM
Fraud is not tolerated on Fiverr


G
gee1
gee1
Apr 22, 2023, 3:13 PM
Translate to English

Go away


G
gee1
gee1
Apr 22, 2023, 3:14 PM

I was going to change my ...I don't like you


G
gee1
gee1
Apr 22, 2023, 3:14 PM
Translate to English

go away


G
gee1
gee1
Apr 22, 2023, 3:14 PM

Fraud.. what are talking about


G
gee1
gee1
Apr 22, 2023, 3:14 PM

What have I got?????? idiot !!


G
gee1
gee1
Apr 22, 2023, 3:14 PM
Translate to English

Go away!


G
gee1
gee1
Apr 22, 2023, 3:28 PM

No leave me alone


Screenshot 2023-04-22 at 16.28.11.png
(436.56 kB)


G
gee1
gee1
Apr 24, 2023, 4:52 PM

Hello Yankz, again I apologies for the misunderstanding, as I said I would do, Ive sent a message to Fiverr explaining my 360 turnaround, I didn't want any stains on your reputation


Screenshot 2023-04-24 at 16.49.43.png
(238.43 kB)


G
gee1
gee1
Apr 24, 2023, 4:54 PM

I will Complete the order as I trust you to correct or revise if anything is wrong or incorrect (which I don't think anything is), Will definitely use you as my Go-to-AI developer😊🙏

K
kuyatehyankz
Me
Apr 24, 2023, 5:32 PM
I appreciate that. I promise the same dedication and support whenever you need me


G
gee1
gee1
Apr 24, 2023, 8:28 PM
Translate to English

Thank you Yankz:)


G
gee1
gee1
Apr 26, 2023, 10:49 AM

Hi Yankz, Good morning brother


G
gee1
gee1
Apr 26, 2023, 10:50 AM

I was wondering, can you give me a price and timeframe to add Whisper to the Bot, basically the user can speak their responses aswell as type, let me know, thx

K
kuyatehyankz
Me
Apr 26, 2023, 11:07 AM
Hello


G
gee1
gee1
Apr 26, 2023, 11:08 AM
Translate to English

Hi

K
kuyatehyankz
Me
Apr 26, 2023, 11:10 AM
Adding voice functionality to the current architecture will make the bot too slow. You would need to transfer all chat functionality to the API so all the chattering happens on the API and the mobile app just communicates with the API.

K
kuyatehyankz
Me
Apr 26, 2023, 11:11 AM
so 90% of the code will remain the same but the same but the architecture would have to change if you care about speed


G
gee1
gee1
Apr 26, 2023, 11:12 AM

Oh I see, yes I would be concerned about speed, iT has to be reletively speedy


G
gee1
gee1
Apr 26, 2023, 11:15 AM

If the architect requires change, It might be best to change now

K
kuyatehyankz
Me
Apr 26, 2023, 11:19 AM
true


G
gee1
gee1
Apr 26, 2023, 11:21 AM

What would the cost and timeframe be to add this?

K
kuyatehyankz
Me
Apr 26, 2023, 11:24 AM
before we talk about my cost, consider the cost it will require run and maintain such an app

K
kuyatehyankz
Me
Apr 26, 2023, 11:25 AM
You will need a GPU so do some research of Google or AWS GPU

K
kuyatehyankz
Me
Apr 26, 2023, 11:26 AM
because you need some thing more powerful than digital ocean


G
gee1
gee1
Apr 26, 2023, 11:42 AM

Thank you for that info Yanks, I was unaware of the implications. I have applied for an AWS credits, however I will research. Although I have no clue what to ask... if it were your app, what question would you need to be answered to give you an idea of running costs?

K
kuyatehyankz
Me
Apr 26, 2023, 11:52 AM
just compare their cost per hour

K
kuyatehyankz
Me
Apr 26, 2023, 11:53 AM
Generally google is cheaper but harder to setup


G
gee1
gee1
Apr 26, 2023, 12:05 PM

I see ok great, thanks

K
kuyatehyankz
Me
Apr 26, 2023, 12:10 PM
You if like I can look at them in the evening, just on my computer at the moment

K
kuyatehyankz
Me
Apr 26, 2023, 12:11 PM
If you like*


G
gee1
gee1
Apr 26, 2023, 1:32 PM

Hey that would be great, I appreciate it, thank you

K
kuyatehyankz
Me
Apr 27, 2023, 12:30 PM
https://aws.amazon.com/sagemaker/pricing/?p=pm&c=sm&z=2
K
kuyatehyankz
Me
Apr 27, 2023, 12:32 PM
so the cloud providers really make it difficult to calculate cost before launching, but if go to this link and go to example 8, you have an idea

K
kuyatehyankz
Me
Apr 27, 2023, 12:33 PM
up to this point I have been giving you the option of hosting your own whisper model because it is open source

K
kuyatehyankz
Me
Apr 27, 2023, 12:35 PM
But I see cost will be a problem, so we revert back to openai and use their whisper instance. Probably much better for your app right now

K
kuyatehyankz
Me
Apr 27, 2023, 12:35 PM
if you grow and want your own instance of whisper, you can do it anytime

K
kuyatehyankz
Me
Apr 27, 2023, 12:37 PM
So, if you are going to use openai whisper then the architecture will still change but you can digital ocean


G
gee1
gee1
Apr 27, 2023, 12:39 PM

Thanks for the info and research, I appreciate it


G
gee1
gee1
Apr 27, 2023, 12:39 PM

I have done some research and calculations also ....


G
gee1
gee1
Apr 27, 2023, 12:41 PM

Assumptions:

Wholesale cost of using GPT3.5: $0.008 per text message
Wholesale cost of using Whisper: $0.0001 per second + $0.008 per message
Additional running costs: $500 per month


G
gee1
gee1
Apr 27, 2023, 12:44 PM

Let me know if you see anything wrong with these figures, otherwise, no worries


G
gee1
gee1
Apr 27, 2023, 12:46 PM

The Idea is to offer each user the option of Whisper (Audio Capabilities) with their plan, can this work in regards the ADD Whisper & NOT ADD Whisper feature?

K
kuyatehyankz
Me
Apr 27, 2023, 12:49 PM
What's ADD?


G
gee1
gee1
Apr 27, 2023, 12:56 PM

Adding Whisper


G
gee1
gee1
Apr 27, 2023, 1:03 PM

I believe its a task for the app developer - the create an option for users to select plans within the app, that provides users with the option of With OR Without Whisper?


G
gee1
gee1
Apr 27, 2023, 1:21 PM

Whats the cost to integrate Whisper?

K
kuyatehyankz
Me
Apr 27, 2023, 2:06 PM
Just so you know what will have to happen to power your app with Whisper:
first, recording and playing audio can be a project in itself. Once that's working, the following flow happens for every message.
1. Record voice on the app
2. send voice to API
3. Send voice to Whisper for conversion to text
4. Send a text to chatGPT
5. Receive text response from chatGPT
6. Send text response from chatGPT to Whisper
7. Whisper convert text to speech
8. API sends the speech to the app
9. Play speech on the app


G
gee1
gee1
Apr 27, 2023, 2:07 PM
Translate to English

Wow!


G
gee1
gee1
Apr 27, 2023, 2:08 PM

Sounds like it'll take a week to process one reply

K
kuyatehyankz
Me
Apr 27, 2023, 2:11 PM
If you have a high-memory digital ocean droplet, this will be quick, whisper and chatgpt are running on GPU so they are fast

K
kuyatehyankz
Me
Apr 27, 2023, 2:12 PM
my price is $1500


G
gee1
gee1
Apr 27, 2023, 2:12 PM

whats the benefit of using Digital Ocean over AWS?

K
kuyatehyankz
Me
Apr 27, 2023, 2:13 PM
digital ocean is using aws

K
kuyatehyankz
Me
Apr 27, 2023, 2:14 PM
the benefit is cost and simplified setup


G
gee1
gee1
Apr 27, 2023, 2:14 PM

GREAT


G
gee1
gee1
Apr 27, 2023, 2:15 PM

Last question.. why do you need to reconfigure the architecture?

K
kuyatehyankz
Me
Apr 27, 2023, 2:15 PM
Told you that yesterday

K
kuyatehyankz
Me
Apr 27, 2023, 2:16 PM
so that all this chattering between whisper and chatgpt happens on the API

K
kuyatehyankz
Me
Apr 27, 2023, 2:17 PM
If you want to rely on user device connection speed, that will bea very bad experience

K
kuyatehyankz
Me
Apr 27, 2023, 2:17 PM
be a*


G
gee1
gee1
Apr 27, 2023, 2:19 PM

Ok great, ill have a think taking everything into consideration, ill get back to you , thx

K
kuyatehyankz
Me
Apr 27, 2023, 2:19 PM
welcome

K
kuyatehyankz
Me
Apr 27, 2023, 2:33 PM
Also consider using third part API like voice.ai to convert chatgpt responses to quality voice


G
gee1
gee1
Apr 27, 2023, 2:57 PM

Yes I was thinking AZURE or Eleven Labs

K
kuyatehyankz
Me
Apr 27, 2023, 2:59 PM
Good choices


G
gee1
gee1
Apr 28, 2023, 2:07 PM

Hi Yankz, Ive looked into it a little more and have decided to make the Whisper the 2nd iteration (after launch and feedback)

K
kuyatehyankz
Me
Apr 28, 2023, 2:08 PM
Good decision


G
gee1
gee1
Apr 28, 2023, 2:08 PM

However, If you're still up for doing the Numerology bot for $200 Id push forward with that, let me know, thx

K
kuyatehyankz
Me
Apr 28, 2023, 2:09 PM
sure

K
kuyatehyankz
Me
Apr 28, 2023, 2:10 PM
let do that from monday


G
gee1
gee1
Apr 28, 2023, 2:47 PM

Ok, cool. Monday sounds great, thx

K
kuyatehyankz
Me
May 02, 2023, 3:15 PM
Here's your Custom Offer

$5
I will create a chatgpt ai chatbot for your website, app etc
integrate pinecone vector database with API code

Your offer includes
1 Day Delivery
Offer expires onMay 3, 2023 at 03:15 PM
View Order

G
gee1
gee1
May 03, 2023, 9:49 PM

Hi Yankz, big thanks, much appreciated🙏


G
gee1
gee1
May 03, 2023, 9:50 PM

Can you explain exactly what you've done and what I should now give to a developer (API ?) ??

K
kuyatehyankz
Me
May 03, 2023, 10:00 PM
now the API is complete: I made a vector database in Pinecone and then integrate Pinecone and Openai in the API. All he will do now is fire up it and the your bot should as normal

K
kuyatehyankz
Me
May 03, 2023, 10:01 PM
now the API is complete: I made a vector database in Pinecone and then integrate Pinecone and Openai in the API. All he will do now is FIRE IT** up and your bot should as normal

K
kuyatehyankz
Me
May 03, 2023, 10:01 PM
your bot should WORK* as normal


G
gee1
gee1
May 29, 2023, 9:42 AM
Translate to English

Hi Yankz

K
kuyatehyankz
Me
May 29, 2023, 9:52 AM
Good morning Graham


G
gee1
gee1
May 29, 2023, 9:53 AM

Good morning Yankz, hope you're well


G
gee1
gee1
May 29, 2023, 9:53 AM

I am at the end of the Christian App and the developer is integrating the API


G
gee1
gee1
May 29, 2023, 9:53 AM

HE IS ASKING .... 1) Have you deployed this model? (Chatbot).. 2) Have you developed the apis for chat and coach? If done please provide.

K
kuyatehyankz
Me
May 29, 2023, 9:56 AM
I don't understand the questions


G
gee1
gee1
May 29, 2023, 9:57 AM

He says ...

Yes, but communicate with him and tell him to provide api.. There are two things in the API: 1) Base URL. 2) endpoint.

K
kuyatehyankz
Me
May 29, 2023, 10:02 AM
I know what these words mean but in the context of what I made for you, you don't need a model. Doesn't he see the app is using firestore?


G
gee1
gee1
May 29, 2023, 10:04 AM

Ive sent your response, hopefully he realises something


G
gee1
gee1
May 29, 2023, 10:07 AM

The developer says ....One question from him 1) How does a user communicate with the chatbot?


G
gee1
gee1
May 29, 2023, 10:08 AM

He is asking if he can jump on a meeting with you?

K
kuyatehyankz
Me
May 29, 2023, 10:08 AM
Sure


G
gee1
gee1
May 29, 2023, 10:09 AM

Great Yankz, would 3:00 PM Pakistan standard time work?

K
kuyatehyankz
Me
May 29, 2023, 10:10 AM
That's in 50 minutes, sure


G
gee1
gee1
May 29, 2023, 10:11 AM

Yeah


G
gee1
gee1
May 29, 2023, 10:12 AM

what do you think?

K
kuyatehyankz
Me
May 29, 2023, 10:13 AM
Sure I can meet with


G
gee1
gee1
May 29, 2023, 10:14 AM

Thanks Yankz, Ill let him know and send you a link


G
gee1
gee1
May 29, 2023, 10:52 AM

https://meet.google.com/ppa-dvjr-xkg

G
gee1
gee1
May 29, 2023, 10:52 AM
Translate to English

10mins (3pm)


G
gee1
gee1
May 29, 2023, 11:01 AM

join when ready


G
gee1
gee1
May 29, 2023, 11:51 AM

Thanks Yankz for jumping on and clarifying, appreciated

K
kuyatehyankz
Me
May 29, 2023, 1:40 PM
Good luck but your developer is in over his head`


export default function Input() {

  // const { chatList, setChatList } = useChatContext();
  const { state, dispatch } = useContext(ChatContext);
  const { chatList, chatsRef, user } = state;
  const { email } = user;

  const onSubmit = async(values: FormValues, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    updateFireStore(chatsRef, values.message, email);
    const history = [...chatList, { role: 'user', content: values.message }]
    dispatch({ type: 'CHAT_LIST', payload: history });
    directChat(history).then((response) => {
      const newhistory = [...history, { role: 'assistant', content: response }]
      dispatch({ type: 'CHAT_LIST', payload: newhistory });
      updateFireStore(chatsRef, response, email, true);
    });
    
  };

  return (
    <div>
      <Formik initialValues={{ message: "" }} onSubmit={onSubmit}>
        <Form>
          <div className="flex items-center justify-between w-full p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <Field
              type="text"
              placeholder="Write a message"
              className="block w-full p-2 mx-3 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="message"
              required
            />
            <button type="submit">
              <FaTelegramPlane
                className="h-10 w-10 text-[#5f4def]"
                aria-hidden="true"
              />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
