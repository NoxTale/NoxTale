import React from "react";
import Layout from "./Layout";
import Row from "./Row";
import { useState, useEffect } from "react";
import { db, storage } from "../lib/Firebaseapi";
import ReactAudioPlayer from "react-audio-player";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

function Center() {
  return (
    <Layout>
      <div className="pl-7 h-screen overflow-y-scroll scrollbar-hide">
        <Row title="Pop" getcollection="Pop" />
        <Row title="Pop" getcollection="Pop" />
        <Row title="Pop" getcollection="Pop" />
        <Row title="Pop" getcollection="Pop" />
        <Row title="Pop" getcollection="Pop" />
        <Row title="Pop" getcollection="Pop" />
      </div>
    </Layout>
  );
}

export default Center;
