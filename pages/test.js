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

function test({ title }) {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "SongInfo");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  console.log(users);
  console.table(users);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(0);
  const [newArtist, setNewArtist] = useState(0);
  const [newAlbum, setNewAlbum] = useState(0);
  const [newSongURL, setNewSongURL] = useState(0);
  const usersCollectionCr = collection(db, "Pop");
  const createUser = async () => {
    await addDoc(usersCollectionCr, {
      name: newName,
      image: newImage,
      Artist: newArtist,
      Album: newAlbum,
      SongURL: newSongURL,
    });
  };
  return (
    <div className="bg-gray-800">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="Artist"
        onChange={(event) => {
          setNewArtist(event.target.value);
        }}
      />
      <input
        placeholder="Album"
        onChange={(event) => {
          setNewAlbum(event.target.value);
        }}
      />
      <input
        placeholder="Image"
        onChange={(event) => {
          setNewImage(event.target.value);
        }}
      />
      <input
        placeholder="SongURL"
        onChange={(event) => {
          setNewSongURL(event.target.value);
        }}
      />

      <button onClick={createUser}> Create User</button>
      <h1 class="text-4xl font-bold text-red-200 mb-5">
        Songs Recommended For You
      </h1>

      {users.map((user) => {
        const play = new Audio(user.SongURL);
        const startplay = () => {
          play.play();
        };
        const stopplay = () => {
          play.pause();
        };
        return (
          <div className="row">
            <div className="row_posters">
              <img className="row_poster" src={user.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default test;
