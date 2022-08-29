import React, { Image } from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../lib/Firebaseapi";
import ReactAudioPlayer from "react-audio-player";
import {
  collection,
  document,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Row({ title, getcollection }) {
  const [users, setUsers] = useState([]);
  const getmycollection = {};
  const usersCollectionRef = collection(db, getcollection);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="">
      <h1 className=" m-5 mb-2 text-4xl text-white">
        <ul>{title}</ul>
      </h1>
      <hr className="border-t-[1px] mb-5 mt-3 border-gray-900" />

      <div className="row_posters md:flex">
        {users.map((user) => {
          //const SongUrl = user.SongURL;
          const play = new Audio(user.SongURL, { volume: 5 });
          const startplay = () => {
            play.play();
          };
          const stopplay = () => {
            play.pause();
          };
          return (
            <div class="bg-gray-900 mr-7 shadow-lg rows items-center rounded p-3 hover:scale-105 transition ">
              <div class="group relative">
                <img
                  class="w-full md:w-72 block rounded"
                  src={user.image}
                  alt=""
                />
                <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg
                      onClick={stopplay}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>

                  <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg
                      onClick={startplay}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </button>

                  <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-white text-lg">{user.name}</h3>
                <p class="text-gray-400">{user.Artist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;

// const play = new Audio(user.SongURL);
//         const startplay = () => {
//           play.play();
//         };
//         const stopplay = () => {
//           play.pause();
//         };
