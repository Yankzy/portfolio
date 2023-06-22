import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { directChat, updateFireStore } from "./utils/chatUtils";
import { useContext } from "react";
import { ChatContext } from "./ChatContext";


interface FormValues {
  message: string;
}


export default function Input() {

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
