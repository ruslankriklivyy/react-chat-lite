import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import { Loader } from '..';
import { Context } from '../..';
import styles from './chat.module.scss';

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt'),
  );
  const [value, setValue] = useState('');

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue('');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="box">
      <div className={styles.chat}>
        <div className={styles.chatMessages}>
          {messages?.map((message) => (
            <div
              className={
                user?.uid === message.uid ? styles.chatMessagesItemReverse : styles.chatMessagesItem
              }>
              {user?.uid !== message.uid ? <img src={message.photoURL} alt="man" /> : null}
              <div className={styles.chatMessagesInfo}>
                <span>{message.displayName}</span>
                <p>{message.text}</p>
              </div>
              {user?.uid === message.uid ? <img src={message.photoURL} alt="man" /> : null}
            </div>
          ))}
        </div>
        <div className={styles.sendMessage}>
          <textarea
            placeholder="Enter message"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setValue(e.target.value)
            }></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
