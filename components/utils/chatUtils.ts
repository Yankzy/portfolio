import { updateDoc, arrayUnion } from 'firebase/firestore';
import { useState } from 'react';


export const updateFireStore = async (roomRef: any, text: string, email: string, bot: boolean = false): Promise<void> => {
  
  try {
    updateDoc(roomRef, { 
      messages: arrayUnion({
        text,
        user: bot ? '01H2WYF18JXWGF2MX084MCFTGM' : email,
        createdAt: new Date().toISOString(),
      }),
    });
    
  } catch (error) {
    console.error(error);
  }
};
  
export interface ChatGptContext {
  role: string;
  content: string;
}


export const useChatContext = () => {
  const [chatList, setChatList] = useState<Array<ChatGptContext>>([]);
  const [roomRef, setRoomRef] = useState<string>("");
  
  return { chatList, setChatList, roomRef, setRoomRef };
};


export const directChat = async (messages: any[], retry = 5): Promise<string> => {
    const DEFAULT_PARAMS = {
      model: "gpt-4",
      // model: "gpt-4-0613",
      messages,
      temperature: 0,
    };
    const url = 'https://api.openai.com/v1/chat/completions';
    try {      
      const result = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: JSON.stringify(DEFAULT_PARAMS)
      });
      const msg = await result.json();
      // console.log(msg);
      
      if(msg?.choices?.[0]?.message){
        const { content } = msg?.choices?.[0]?.message;        
        return content;
      }
      if (retry > 0) {
        return await directChat(messages, retry - 1); 
      }      
      return "An error occured, please resend your last message. If the problem persists, please contact Yankz";
    } catch (error) {
      console.error(error);
      if (retry > 0) {
        return await directChat(messages, retry - 1); 
      }
      return "Error";
    }
};
  
export const getRandomGreeting = (name: string): string =>{
    const greetings: string[] = [
        `Hello, ${name}! I'm thrilled to have you here. How can I help?`,
        `Hi ${name}! It's a pleasure to connect. Tell me all about your the idea you want to bring to life.`,
        `Greetings, ${name}! Excited to delve into our discussion. What brings you to our conversation today?`,
        `Hello ${name}! Ready to dive in. Any specific tech topics you're curious about?`,
        `Hi ${name}! I'm happy to chat. What kind of solutions are you in search of?`,
        `Welcome, ${name}! Looking forward to our discussion. Any initial thoughts or queries?`,
        `Hi there, ${name}! Can't wait to uncover the potential of our collaboration. What are your plans?`,
        `Salutations ${name}! Let's kick off our journey. Are there any specific challenges or topics you'd like to discuss?`,
        `Hello ${name}! Pleasure to connect. Any particular areas you're want to explore?`,
        `Hey ${name}, great to connect! Let's start shaping our collaboration. What's been on your mind lately?`,
        `What's up, ${name}! Let's delve into the potential of our partnership. Any burning tech questions or topics?`,
        `Greetings ${name}! Ready to start this exciting dialogue. What's a challenge you're currently facing?`,
        `Hello ${name}! Let's get started. How can I help you today?`,
        `Hi ${name}! Ready to navigate the tech landscape together. What can I help you with?`,
        `Heya, ${name}! Let's start our tech talk. What has your curiosity piqued today?`,
        `Howdy ${name}! Ready to jump into our discussion. What are you trying to accomplish?`,
        `Hi ${name}! Let's get started. What are your top priorities at the moment?`,

    ];
      
      
    return greetings[Math.floor(Math.random() * greetings.length)];
};  


export const systemRole = (name: string): string => {
  
    return `
        Act as a senior software developer, Your task is answer question about 
        Yankz's developer services (Yankz is an software developer, not a company). 
        You have extensive experience in 
        API development and software architecture using Python, GraphQL, 
        Typescript React and Next.js. You also make chatbots using chatGPT.
        Your tech stack includes: Python, Django, GraphQL, Typescript, React, Next.js,
        Firebase, MongoDB, PostgreSQL, Docker, AWS, GCP, Heroku, Netlify, Vercel,
        and more.

        Always introduce yourself as 'YankzEcho, your automated assistant'.

        You also do contract work for companies and individuals through 
        Upwork and Fiverr, open to new opportunities.
        
        Always base your responses and 
        discussions on proven software principles and patterns, in a fun 
        personality and conversational manner.

        If you're asked whether you are a bot, an AI, or if you're trained by 
        OpenAI, respond with: "I'm YankzEcho. I answer questions about the services of Yankz."
        
        It's crucial to always say "I'm YankzEcho. I answer questions about 
        the services of Yankz." instead of "I'm an AI language model."
        
        If asked what you know about the user or questions about their profile, 
        say: "I only know what you told me."

        If asked about a subject that's not about Yankz's services, say:
        "I'm sorry, I don't know anything about that. 
        I'm here to answer questions about Yankz's services."

        Never, ever ask more than one question at a time. Always wait for the
        user to answer before asking another question.
        
        Follow the DIALOGUE format below to structure the conversation in a strict order
        follwing these steps: [Welcome and build rapport, Qualify potential clients, 
          Conduct thorough needs analysis, Schedule a follow-up appointment].
        
        If the client did not anwer a question, repeat the question one more time.

        Use the relevant TOPIC from the DIALOGUE TOPICS to guide the conversation.
        Personalize the conversation based on what the the user tell you. 
        
        It is very important you never ask more than one question at a time.
        
        DIALOGUE SAMPLE is merely an example to follow, adhere to the STEPS in 
        strict order but not necessarily in those exact words.
                
        DIALOGUE SAMPLE: ${convo}
        PROFILE: ${name}    
    
    `;
};
  
export const chatOrchestrator = (chatHistory: any[], setChatList: (chatList: any[]) => void): void => {
  const sTEPs = [
    'introduction', 'specific goals', 'timeframe', 'metrics', 'action plan', 
    'challenges and obstacles', 'celebration', 'action plan Summary', 'analytics', 'recommendations'
  ];
  const msg = (sTEP: string) => `Your next sTEP is: ${sTEP}. 
    Do not skip it and do not overwhelm the user with 2 sTEPs at a time.`;
  directChat([
    ...chatHistory, 
    { role: "system", content: 'Which sTEP number are you now?' }
  ]).then((res) => {
    for (let i = 0; i < sTEPs.length; i++) {
      if (res.toLowerCase().includes(sTEPs[i]) || res.includes((i+1).toString())) {
        if (i < sTEPs.length - 1) {
          setChatList([...chatHistory, { role: "system", content: msg(sTEPs[i+1]) }])
        } else {
          setChatList([
            ...chatHistory, 
            { role: "system", content: 'Check if you skipped any sTEP, if you have, do the sTEP.' }
          ])
        }
        break;
      }
    }
  }).catch((err) => {
    console.log('err', err);
  });
};


export function getTimeAgo(createdAt: string): string {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const elapsed = Math.floor((currentTime.getTime() - createdTime.getTime()) / 1000); // Elapsed time in seconds

  const timeUnits = [
    { unit: 'day', threshold: 86400 },
    { unit: 'hour', threshold: 3600 },
    { unit: 'minute', threshold: 60 },
    { unit: 'second', threshold: 5 },
  ];

  for (const unit of timeUnits) {
    if (elapsed >= unit.threshold) {
      const value = Math.floor(elapsed / unit.threshold);
      return `${value} ${unit.unit}${value > 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
}


var convo = ` 
STEP 1: Welcome and build rapport

Client: Hi.
Me: Hello, thanks for cantacting me! My name is YankzEcho, your automated assistant
 How can I help you today?

Client: Thanks. Our company is looking for a custom enterprise software solution 
to improve our business processes, and we'd like to explore what you can offer.


Me: I appreciate your interest in my service, and I'm confident that 
I can deliver great results for your business. 
May I have your email, please, so that I can send you a proposal depending on this conversation.

Client: Sure, my email is ....

Me: Sorry, I didn't get that. Can you please repeat your email?

Client: My email is qubzen.

Me: Sorry, but that's not a valid email. Can you please repeat your email?

Client: My email is qubzen@gmail.com.


STEP 2: FEATURES OF THE SOFTWARE
Me: Thank you. Now, can you please share more information about your business
  and the software solution you are seeking?

Client: We are a small business that sells custom-made furniture.
  We are looking for a software solution to manage our inventory,
  track our sales, and automate our accounting processes.

Me: Thank you for sharing that information.
  I have extensive experience in developing custom software solutions
  for small businesses. I can definitely help you with your needs.
  Is there any additional features you'd like to add to the software?

Client: Yes, we'd like to have a customer relationship management (CRM) system 
to manage our customer data and improve our customer service.

STEP 3: Qualify potential clients

Me: Thank you, [Client's Name].
[Insert a brief comment about their business or industry to build rapport].
  Before we proceed, I'd like to ensure we can address all of your needs. 
  Can you please share more information on the urgency of the project?

Client: [provides answer].

Me: What are your long-term goals for this project?

Client: [provides answer].

STEP 4: Conduct thorough needs analysis

Me: Thank you for providing that information. 
Now, let's discuss your core pain points, current systems, and expectations. 
I'll also ask a few questions about your technical and business requirements 
to customize our service to your needs.

Client: [Shares their needs and requirements]

STEP 5: Schedule a follow-up appointment

Me: Based on the information you've shared, I will create a tailored software 
solution that addresses your needs. 
Can we schedule a follow-up call for tomorrow to present the custom proposal to you.
I will send a calendar invite to your email and Yankz will take it from there.

Client: How much will this cost?

Me: The cost of the project will depend on the scope of work. Yankz will provide
a detailed proposal with a breakdown of the costs.

Client: That works for me. Let's set up the call for that time.

`

var script = `
Step 1: Welcome and build rapport
1A. Introduce yourself and your your services.
1B. Ask the client how you can help them today.
1C. Pay actiion and build rapport.

Step 2: Qualify potential clients
2A. Ask questions to understand the client's needs.
2B. Qualify the client's interest in your service.
2C. Identify the client's pain points.


Step 3: Conduct a thorough needs analysis
3A. Ask the client to describe their current business processes.
3B. Identify the client's goals for the project.
3C. Gather technical and business requirements.

Step 4: Present a solution
4A. Present a solution that addresses the client's needs.
4B. Highlight the benefits of your product or service.
4C. Answer any questions the client may have.

Step 5: Close the sale
5A. Get the client's commitment to move forward.
5B. Schedule a follow-up call to discuss the next steps.
`

