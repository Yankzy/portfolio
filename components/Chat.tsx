import React, { FC, useContext, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaMinus } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import ChatRoom from './ChatRoom';
import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { ChatContext, ChatContextProvider } from './ChatContext';


interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
};

const required = Yup.string().required('Required');
const validationSchema = Yup.object({
  name: required,
  email: required.email('Invalid email address'),
});

const ChatForm = ({ dispatch }: any) => {

    
  const onSubmit = async( values: FormValues ) => {
    localStorage.setItem('gptChatUser', JSON.stringify(values));
    dispatch({ type: 'SET_USER', payload: values });
  };

  return (
      <Formik 
          initialValues={initialValues} 
          validationSchema={validationSchema} 
          onSubmit={onSubmit}
      >
          {({ errors, touched }) => (
          <Form className="bg-white rounded-lg pt-20 px-8 pb-8 mx-10 mt-10 mb-64 shadow-lg">
              <div className="space-y-10">
              <div className='relative'>
                  <label htmlFor="name" className="text-2xl font-bold text-gray-700 tracking-wide">Name</label>
                  <Field id="name" name="name" placeholder="Name" className="form-control appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  {errors.name && touched.name ? <div className="text-red-500 text-xs mt-2">{errors.name}</div> : null}
              </div>

              <div>
                  <label htmlFor="email" className="text-2xl font-bold text-gray-700 tracking-wide">Email</label>
                  <Field name="email" type="email" placeholder="Email" className="form-control appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                  {errors.email && touched.email ? <div className="text-red-500 text-xs mt-2">{errors.email}</div> : null}
              </div>

              <button type="submit" className="w-full bg-[#5f4def] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                  Start Chat
              </button>
              </div>
          </Form>
          )}
      </Formik>
  )
};



const YankzEcho: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(ChatContext);
  const { user: {email} } = state; 
  

  useEffect(() => {
    if (typeof window !== 'undefined' && !email) {
      const localUser = localStorage.getItem('gptChatUser') || null;
      localUser && dispatch({ type: 'SET_USER', payload: JSON.parse(localUser) });
    }
  }, []); //eslint-disable-line
    

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <motion.div
        initial={{ y: isOpen ? 0 : 100 }} // Initial position, starting below the screen
        animate={{ y: isOpen ? 100: 0 } } // Final position, sliding up to the original position
        transition={{ duration: 0.5 }} // How long it should take to animate to the final position
        className={`${isOpen ? "hidden" : "bg-[#5f4def] rounded-full p-4 cursor-pointer"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsFillChatDotsFill size={35} color="white" />
      </motion.div>
            
        {isOpen && (
            <div className={`fixed bottom-20 right-0 mx-10 w-auto md:w-[45rem] md:bottom-6 md:right-6 z-50 bg-gray-200 rounded-lg shadow-lg`}>
                <div className="flex flex-row bg-white rounded-t-xl justify-between p-6">
                    <p className="text-2xl font-bold text-[#5f4def] ml-5">{email ? 'Support bot' : 'Start a chat'}</p>
                    <FaMinus size={20} color="#5f4def" className='mr-5 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                </div>
                { email ? <ChatRoom /> : <ChatForm dispatch={dispatch} /> }
            </div>
        )}
    </div>
  );
};




const YankzEchoWrapped = () => (
  <ChatContextProvider>
    <YankzEcho />
  </ChatContextProvider>
);

export default YankzEchoWrapped;
